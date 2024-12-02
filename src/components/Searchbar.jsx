import React, { useState } from "react";
import { Link } from "react-router-dom";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      redirectUser();
    }
  };

  const redirectUser = (event) => {
      const redirectUrl = `http://localhost:5173/solution`;
      window.location.href = redirectUrl;
  };

  return (
    <div className="flex justify-center items-center w-full my-5 px-5">
      <input
        type="text"
        value={searchTerm}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
        className="mx-1 px-4 py-1 w-4/5 sm:w-3/4 md:w-2/4 lg:w-1/3 xl:w-1/2 border-2 border-product-color rounded-full focus:outline-none focus:ring-1 focus:ring-product-color focus:border-product-color  transition-all duration-300"
        placeholder="Search..."
      />
      <Link to="/solution">
        <button
          onClick={handleSearch}
          className=" py-1 px-2 text-white rounded-full hover:border-product-color hover:border focus:outline-none focus:ring-2 focus:ring-product-color transition-all duration-300"
        >
          🔍
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;
