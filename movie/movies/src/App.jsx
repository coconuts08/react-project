import React from 'react';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import Footer from './components/Footer';
import { useFetch } from './hooks/useFetch';

const API_KEY = "10fdbd3050244f8963f4d152552ca800";

const App = () => {
  const [query, setQuery] = React.useState('');
  const [term, setTerm] = React.useState('');

  const url = term
    ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${term}`
    : null;

  const { data, loading, error } = useFetch(url);

  const handleSearch = (e) => {
    e.preventDefault();
    setTerm(query.trim());
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 pt-10">
            <h1 className="text-4xl font-bold text-gray-800">Movie Explorer</h1>
            <p className="mt-2 text-gray-600">Search for your favorite movies powered by TMDb</p>
          </div>

          <SearchBar
            value={query}
            onChange={setQuery}
            onSearch={handleSearch}
            disabled={loading}
          />

          {loading && (
            <div className="text-center mt-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
              <p className="text-gray-600 mt-2">Fetching movies...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded mt-6">
              <p>Error: {error}</p>
            </div>
          )}

          {data?.results?.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {data.results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          )}

          {!loading && !error && term && data?.results?.length === 0 && (
            <p className="text-center text-gray-500 mt-10">No movies found for "{term}"</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
