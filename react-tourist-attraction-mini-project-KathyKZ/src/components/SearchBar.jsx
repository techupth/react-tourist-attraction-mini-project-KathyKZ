import React, { useState } from "react";
import { useTravel } from "../components/SearchBar";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { fetchTravel } = useTravel();

  const handleSearch = (event) => {
    event.preventDefault();
    fetchTravel(search);
  };

  return (
    <form onSubmit={handleSearch} className="search">
      <div className="flex items-center">
        <input
          className="search-actions"
          type="text"
          description="ค้นหาที่เที่ยว..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button
          className="search-button" type="submit" onClick={() => useTravel("/")}>
          ค้นหา
        </button>
      </div>
    </form>
  );
};

export default SearchBar;