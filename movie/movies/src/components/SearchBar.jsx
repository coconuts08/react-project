import React from 'react';

const SearchBar = ({ value, onChange, onSearch, disabled }) => {
  return (
    <form onSubmit={onSearch} className="flex mb-6">
      <input
        type="text"
        placeholder="Search for movies..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        disabled={disabled}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-r-lg disabled:bg-indigo-300"
      >
        {disabled ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
};

export default SearchBar;
