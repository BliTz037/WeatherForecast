
const WeatherDay = (props:
    { day: string, temperature: number, humidity: number, weather: string }
) => {
    return (
        <div className="weather-day rounded-md h-min p-3 text-center bg-blue-900 text-white w-min">
            <p className="font-semibold">{ props.day }</p>
            <p>{ props.weather }</p>
            <div className="humidity-data">
                <p className="font-light">Humidity</p>
                <p>{props.humidity}%</p>
            </div>
        </div>
    )
}

export default WeatherDay;