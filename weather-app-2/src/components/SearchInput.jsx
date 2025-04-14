import React from 'react';

const SearchInput = ({ placeholder, onSearch, disabled, value, setValue, buttonLabel = "Search" }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={disabled}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-lg disabled:bg-blue-400 transition duration-200"
        >
          {buttonLabel}
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
