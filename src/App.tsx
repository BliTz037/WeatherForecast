import { useEffect, useState } from "react";
import CityWeatherForm from "./components/CityWeatherForm";
import TemperatureChart from "./components/TemperatureChart";
import WeatherDay from "./components/WeatherDay";
import WeatherNow from "./components/WeatherNow";

function App() {
  const [city, setCity] = useState("Paris");

  const handleCityChange = (newCity: string) => {
    console.log("Called handleCityChange");
    setCity(newCity);
  };

  const fetchWeather = async () => {
    try {
      const geoData = await fetchCityLocation();
      console.log(geoData);

      const weatherData = await fetchWeatherData(geoData.lat, geoData.lon);
      console.log(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      console.log(error);
    }
  };

  const fetchWeatherData = async (lat: Number, lon: Number) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_OPENWEATHER_KEY_API}`;
    try {
      const response = await fetch(API_URL, { method: "GET" });
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  const fetchCityLocation = async () => {
    const API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${import.meta.env.VITE_OPENWEATHER_KEY_API}`;
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

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <div className="App">
      <h1 className="text-4xl font-bold">Weather Forecast</h1>

      <div className="container mx-auto my-5 px-4 py-5 bg-slate-50 rounded-lg drop-shadow">
        <CityWeatherForm onCityChange={handleCityChange} />

        <div className="weather-dashboard flex flex-wrap space-x-10 space-y-4 pb-3">
          <WeatherNow />
          <div className="flex-grow">
            <TemperatureChart />
            <div className="weather-week pb-2 pr-3 py-3 flex flex-row gap-2">
              <WeatherDay day="Today" temperature={30} humidity={41} weather="Sunny" />
              <WeatherDay day="Tomorrow" temperature={26} humidity={50} weather="Clouds" />
              <WeatherDay day="Nov 25" temperature={25} humidity={80} weather="Rain" />
              <WeatherDay day="Nov 26" temperature={28} humidity={37} weather="z" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
