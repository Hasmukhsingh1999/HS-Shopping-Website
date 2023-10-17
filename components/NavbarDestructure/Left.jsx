"use client";
import React, { useState } from "react";

const Left = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className={`flex items-center gap-2 flex-1 justify-center`}>
      <p className={`font-bold`}>EN</p>
      <input
        type="search"
        name="search"
        className={`rounded-3xl py-2 px-4 border`}
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Left;
