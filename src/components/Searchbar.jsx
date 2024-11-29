import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
    // Add search logic or API calls here
  };

  return (
    <div className="flex justify-center items-center w-full my-5 px-5">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        className="mx-1 px-4 py-1 w-4/5 sm:w-3/4 md:w-2/4 lg:w-1/3 xl:w-1/2 border-2 border-product-color rounded-full focus:outline-none focus:ring-1 focus:ring-product-color focus:border-product-color  transition-all duration-300"
        placeholder="Search..."
      />
      <button
        onClick={handleSearch}
        className=" py-1 px-2 text-white rounded-full hover:border-product-color hover:border focus:outline-none focus:ring-2 focus:ring-product-color transition-all duration-300"
      >
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
