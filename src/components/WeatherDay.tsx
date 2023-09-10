import { WiNightAltCloudy, WiRain, WiCloud, WiDaySunny } from "react-icons/wi";


const weatherIconDict: { [key: string]: any } = {
    "Clouds": <WiCloud className="text-4xl" />,
    "Sunny": <WiDaySunny className="text-4xl" />,
    "Rain": <WiRain className="text-4xl" />,
};

const WeatherDay = (props:
    { day: string, temperature: number, humidity: number, weather: string }
) => {

    const weatherIcon = (props.weather in weatherIconDict) ?
        weatherIconDict[props.weather] : <WiNightAltCloudy className="text-4xl" />;

    return (
        <div className="weather-day rounded-md h-min p-3 text-center bg-blue-900 text-white w-min md:w-1/4">
            <p className="font-semibold">{props.day}</p>
            <div className="flex flex-col items-center justify-center">
                {weatherIcon}
            </div>
            <div className="humidity-data">
                <p className="font-light">Humidity</p>
                <p>{props.humidity}%</p>
            </div>
        </div>
    )
}
export default WeatherDay;