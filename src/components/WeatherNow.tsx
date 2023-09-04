const WeatherNow = () => {
    return (
        <div className="weather-now">
            <h3 className="text-2xl font-bold">London</h3>
            <p>Date & Hours</p>
            <p className="font-bold text-3xl">42 C°</p>
            <p className="font-bold text-2xl">Cloudy</p>
            <div className="humidity-data">
                <p>Humidity</p>
                <p>45%</p>
            </div>
            <div className="wind-data">
                <p>Wind speed</p>
                <p>12 km/h</p>
            </div>
        </div>
    )
}

export default WeatherNow;