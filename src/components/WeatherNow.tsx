import { useEffect, useState } from "react";

const WeatherNow = () => {

    var [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000)
        return () => clearInterval(timer)
    }, []);

    return (
        <div className="weather-now flex flex-col items-center justify-center pb-10 pl-4 pt-2">
            <p className="text-slate-500">{date.toDateString()} {date.getHours()}:{date.getMinutes()}</p>
            <h3 className="text-2xl font-bold">London</h3>
            <p className="font-bold text-3xl">42 C°</p>
            <p className="font-bold text-2xl">Cloudy</p>
            <div className="flex flex-row items-center justify-center space-x-4 text-center">
                <div className="humidity-data" >
                    <p>Humidity</p>
                    <p>45%</p>
                </div>
                <div className="wind-data">
                    <p>Wind speed</p>
                    <p>12 km/h</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherNow;