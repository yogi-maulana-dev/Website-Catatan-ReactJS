// Programmer : yogi maulana
// No HP : 082211114147
// GITHUB : https://github.com/yogi-maulana-dev/
// LINKED : https://www.linkedin.com/in/yogi-maulana-0249a8131/
import React from "react";

const SearchBar = ({ value, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Cari catatan..."
        value={value}
        onChange={onSearch}
        className="p-2 w-full bg-gray-800 text-white border border-gray-700 rounded"
      />
    </div>
  );
};

export default SearchBar;
