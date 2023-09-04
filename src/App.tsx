import CityWeatherForm from "./components/CityWeatherForm"
import TemperatureChart from "./components/TemperatureChart"
import WeatherDay from "./components/WeatherDay"
import WeatherNow from "./components/WeatherNow"


function App() {

  return (
    <div className="App">
      <h1 className="text-4xl font-bold">Weather Forecast</h1>

      <div className="container mx-auto my-8 bg-slate-50 rounded-lg drop-shadow">
        <CityWeatherForm />

        <div className="weather-dashboard grid gap-4 grid-cols-3 grid-rows-3">
          <TemperatureChart />
          <WeatherNow />
        </div>
        <div className="weather-week flex flex-row gap-2">
          <WeatherDay day="Today" temperature={42} humidity={45} weather="Cloudy" />
          <WeatherDay day="Tomorrow" temperature={42} humidity={45} weather="Cloudy" />
          <WeatherDay day="Nov 25" temperature={42} humidity={45} weather="Cloudy" />
          <WeatherDay day="Nov 26" temperature={42} humidity={45} weather="Cloudy" />
        </div>
      </div>
    </div>
  )
}

export default App
