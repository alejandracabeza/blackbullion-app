import React from "react";

function SearchBar({ input: keyword, onChange: setKeyword }) {
  return (
    <div>
      <input
        value={keyword}
        placeholder={"Search..."}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
