import React, { useState } from 'react';
import './index.css'
const SearchBar = ({
  callback = (search="") => {}
}) => {
  // implement the search bar
  const [search, setSearch] = useState("");
  
  const handleSearch = (event) => {
    setSearch(event.target.value);
    callback(event.target.value);
  };

  return (
    <div className='search-bar'> 
      <input type="text" placeholder="Recherche produits" value={search} onChange={handleSearch} />
    </div>
  );

}

export default SearchBar;
