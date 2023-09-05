import React, { useState } from 'react';

function SearchBar({ cities, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    onSearch(searchTerm);
  };

  return (
    <div className='flex flex-col items-center'>
<input
      type="text"
      placeholder="Search City"
      value={searchTerm}
      onChange={handleSearch}
      className="p-2 border border-gray-300 rounded-md mb-4 w-64"
    />
    </div>
    
  );
}

export default SearchBar;