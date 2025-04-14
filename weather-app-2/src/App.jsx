import React from 'react';
import SearchInput from './components/SearchInput';
import WeatherCard from './components/WeatherCard';
import { useFetch } from './hooks/useFetch';

const WeatherApp = () => {
  const [city, setCity] = React.useState('');
  const [query, setQuery] = React.useState('');
  const API_KEY = '3957b682938f0391563c46be8ab4ab87';

  const apiUrl = query
    ? `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
    : null;

  const { data: weatherData, loading, error } = useFetch(apiUrl);

  const handleSearch = (term) => {
    setCity(term);
    setQuery(term); // triggers the fetch
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Weather App</h1>
            <p className="mt-2 text-gray-600">Get current weather information</p>
          </div>

          <SearchInput
            placeholder="Enter city name"
            onSearch={handleSearch}
            disabled={loading}
            value={city}
            setValue={setCity}
            buttonLabel={loading ? 'Searching...' : 'Search'}
          />

          {/* Loading */}
          {loading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              <p className="mt-2 text-gray-600">Loading weather data...</p>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
              <p>Error: {error}</p>
            </div>
          )}

          {/* Weather Card */}
          {!loading && !error && weatherData && <WeatherCard data={weatherData} />}
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
