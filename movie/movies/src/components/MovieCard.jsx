import React from 'react';

const MovieCard = ({ movie }) => {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://placehold.co/300x450?text=No+Image';

  const releaseYear = movie.release_date?.split('-')[0] || 'N/A';
  const rating = movie.vote_average?.toFixed(1) || 'N/A';

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full">
      <img
        src={poster}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-1">
          {movie.title}
        </h2>

        <div className="flex items-center gap-2 mb-2">
          <span className="bg-yellow-400 text-white text-xs font-semibold px-2 py-0.5 rounded">
            {rating}
          </span>
          <span className="text-sm text-gray-600">{releaseYear}</span>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2">
          {movie.overview || 'No description available.'}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
