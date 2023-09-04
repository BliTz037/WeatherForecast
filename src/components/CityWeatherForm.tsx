
const CityWeatherForm = () => {
    return (
        <div className="city-form flex items-center p-3">
            <div className="mr-3">
                <label className="mr-1" htmlFor="inline-city-name">Your city</label>
            </div>
            <div className="">
                <input type="text" className="form-input bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:bg-blue-200" id="inline-city-name" />
            </div>
        </div>
    );
}

export default CityWeatherForm;