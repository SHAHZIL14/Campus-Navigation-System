import React, { useState } from 'react';

const SelectDropdown = ({optionsArray}) => {
  // Array of random options
  const options = [...optionsArray];

  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="flex justify-center items-center">
      <select
        value={selectedOption}
        onChange={handleChange}
        className="my-5 px-4 py-2 font-semibold md:px-8 lg:px-10 xl:px-14 text-sm lg:text-base  lg:py-2 xl:py-3 border-2 border-product-color text-product-color flex justify-center items-center border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-product-color"
      >
        {options.map((option, index) => (
          <option className='hover:bg-product-color text-center  p-3 text-product-color text-sm lg:text-base xl:text-xl'  key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropdown;
