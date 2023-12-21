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

export { fetchWeatherData, fetchWeatherDataNow, fetchCityLocation };