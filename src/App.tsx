import { useEffect, useState } from "react";
import CityWeatherForm from "./components/CityWeatherForm";
import TemperatureChart from "./components/TemperatureChart";
import WeatherDay from "./components/WeatherDay";
import WeatherNow from "./components/WeatherNow";

interface WeatherDays {
  day: string;
  temperature: number;
  humidity: number;
  weather: string;
}

function App() {
  const [city, setCity] = useState("London");
  const [weatherData, setWeatherData] = useState({ now: {}, futur: {} });
  const [weatherDays, setWeatherDays] = useState<WeatherDays[]>([]);

  const handleCityChange = (newCity: string) => {
    setCity(newCity);
  };

  const fetchWeather = async (cityName: string) => {
    try {
      const geoData = await fetchCityLocation(cityName);
      const now = await fetchWeatherDataNow(geoData.lat, geoData.lon);
      const futur = await fetchWeatherData(geoData.lat, geoData.lon);

      setWeatherData({ now, futur });
    } catch (error) {
      console.error("Error fetching weather data:", error);
      console.log(error);
    }
  };

  const fetchWeatherData = async (lat: Number, lon: Number) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_OPENWEATHER_KEY_API}`;
    try {
      const response = await fetch(API_URL, { method: "GET" });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  const fetchWeatherDataNow = async (lat: Number, lon: Number) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_OPENWEATHER_KEY_API}`;
    try {
      const response = await fetch(API_URL, { method: "GET" });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  const fetchCityLocation = async (cityName: string) => {
    const API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${import.meta.env.VITE_OPENWEATHER_KEY_API}`;
    try {
      const response = await fetch(API_URL, { method: "GET" });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return { lat: data[0].lat, lon: data[0].lon };
    } catch (error) {
      throw error;
    }
  };

  const getWeatherDays = (data: any) => {
    const weatherDays: WeatherDays[] = [];
    const middayValues: any[] = data?.futur?.list?.filter((item: any) => item.dt_txt.includes("12:00:00"));

    weatherDays.push({
      day: "Now",
      temperature: Math.round(data?.now?.main?.temp),
      humidity: data?.now?.main?.humidity,
      weather: data?.now?.weather?.[0]?.main,
    });

    if (!middayValues)
      return;
    const day = new Date(middayValues[0].dt_txt).toDateString();
    if (day == new Date().toDateString()) {
      middayValues.shift();
    }
    middayValues.forEach((item: any) => {
      weatherDays.push({
        day: new Date(item.dt_txt).toDateString(),
        temperature: Math.round(item.main.temp),
        humidity: item.main.humidity,
        weather: item.weather[0].main,
      });
    });
    setWeatherDays(weatherDays);
  };

  useEffect(() => {
      fetchWeather(city);
  }, [city]);

  useEffect(() => {
      getWeatherDays(weatherData);
  }, [weatherData]);

    return (
      <div className="App">
        <h1 className="text-4xl font-bold">Weather Forecast</h1>

        <div className="container mx-auto my-5 px-4 py-5 bg-slate-50 rounded-lg drop-shadow">
          <CityWeatherForm onCityChange={handleCityChange} />

          <div className="weather-dashboard flex flex-wrap space-x-10 space-y-4 pb-3">
            <WeatherNow data={weatherData} />
            <div className="flex-grow">
              <TemperatureChart data={weatherData} />
              <div className="weather-week pb-2 pr-3 py-3 flex flex-row gap-2">
                {
                  weatherDays.map((item, index) => (
                    <WeatherDay key={index} day={item.day} temperature={item.temperature} humidity={item.humidity} weather={item.weather} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default App;
