import React from 'react'

const SearchBar = ({ search, handleSearchChange }) => {
  return(
    <div className="field">
      <div className="control">
        <input
          className="input"
          type="text"
          name="search"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  )
}

export default SearchBar
