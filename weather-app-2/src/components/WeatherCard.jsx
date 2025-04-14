import React from 'react';

const WeatherCard = ({ data }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          {data.name}, {data.sys.country}
        </h2>
        <div className="text-gray-500">
          {new Date(data.dt * 1000).toLocaleDateString("en-us", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="text-5xl font-bold text-gray-800">
            {Math.round(data.main.temp)}°C
          </div>
          <div className="text-gray-600 capitalize">{data.weather[0].description}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-gray-500 text-sm">Feels Like</div>
          <div className="font-semibold">{Math.round(data.main.feels_like)}°C</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-gray-500 text-sm">Humidity</div>
          <div className="font-semibold">{data.main.humidity} %</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-gray-500 text-sm">Wind Speed</div>
          <div className="font-semibold">{data.wind.speed} m/s</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-gray-500 text-sm">Pressure</div>
          <div className="font-semibold">{data.main.pressure} hPa</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
