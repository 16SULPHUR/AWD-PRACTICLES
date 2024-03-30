import React, { useState } from 'react';
import './App.css';

export default function App() {
  const data = [
    "Apple",
    "Banana",
    "Orange",
    "Pineapple",
    "Strawberry",
    "Grapes",
    "Watermelon",
    "Mango",
    "Kiwi",
    "Peach",
    "Lemon",
    "Cherry",
    "Blueberry",
    "Raspberry",
    "Blackberry"
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    
    <div className="app">
      <h2>202203103510124<br />Ankit Patil</h2>
      <h1>Search Filter Demo</h1>
      <div className="search-container">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="search-input"
          />
          <i className="search-icon fas fa-search"></i>
        </div>
        <ul className="item-list">
          {filteredData.map((item, index) => (
            <li key={index} className="item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}