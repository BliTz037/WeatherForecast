import CityWeatherForm from "./components/CityWeatherForm"
import TemperatureChart from "./components/TemperatureChart"
import WeatherDay from "./components/WeatherDay"
import WeatherNow from "./components/WeatherNow"

function App() {

  return (
    <div className="App">
      <h1 className="text-4xl font-bold">Weather Forecast</h1>

        <div className="container mx-auto px-4 py-4 bg-slate-50 rounded-lg drop-shadow">
        <CityWeatherForm />

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
  )
}

export default App
