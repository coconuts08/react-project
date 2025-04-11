import React from 'react'

const LatestNews = () => {
    const [news, setNews] = React.useState("");
      const [weatherData, setWeatherData] = React.useState(null);
    
      const [loading, setLoading] = React.useState(false);
      const [error, setError] = React.useState("");
    
      const API_KEY = "52f0dd7f328b41e094f13691e93202f3";
    
      const fetchWeatherData = async () => {
        if (!news.trim()) return;
    
        setLoading(true);
        setError("");
        try {
          const response = await fetch(
            `https://newsapi.org/v2/everything?q=${news}&apiKey=${API_KEY}&pageSize=10`
          );
    
          if (!response.ok) {
            throw new Error("News not Found");
          }
    
          const data = await response.json();
          setWeatherData(data);
        } catch (err) {
          setError(err.message);
          setWeatherData(null);
        } finally {
          setLoading(false);
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeatherData();
      };
    
    console.log(weatherData);
  return (
   <>
     <div className="min-h-screen bg-gradient-to-brpy-12 px-4 sm:px-6 lg:px-8">
        <div className="max-width-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-7xl">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Weather App</h1>
            </div>

            <form onSubmit={handleSubmit} className="mb-8">
              <div className="flex">
                <input
                  type="text"
                  value={news}
                  onChange={(e) => setNews(e.target.value)}
                  placeholder="Enter News"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-lg disabled:bg-blue-400 transition duration-200"
                >
                  {loading ? "Searching..." : "Search"}
                </button>
              </div>
            </form>

            {/* For loading when fetching from api */}
            {loading && (
                <div className="text-center py-8">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                    <p className="mt-2 text-gray-600">Loading weather data...</p>
                </div>
            )}
            
             {/* For error when fetching from API */}
             {error && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
                <p>Error: {error}</p>
              </div>
            )}

        {/* for wheather data*/}
       {weatherData?.articles?.length > 0 && (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
    {weatherData.articles.map((article, index) => (
      <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
        <img
          src={article.urlToImage || "http://placehold.co/300x200"}

          className="mb-2 w-full h-48 object-cover rounded"
        />
        <h1 className="font-bold text-lg mb-2">{article.title}</h1>
        <p className="text-gray-500 text-sm mb-4">{article.description}</p>
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-gray-600">{article.source.name}</p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-sm"
          >
            Read more
          </a>
        </div>
      </div>
    ))}
  </div>
)}
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestNews