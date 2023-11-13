// src/App.js
import React, { useState } from 'react';
import githubLogo from './Logos/github-logo.png';
import './App.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = ['Fruits', 'Vegetables', 'Animals'];
  const subcategories = {
    Fruits: ['Apple', 'Banana', 'Orange'],
    Vegetables: ['Carrot', 'Broccoli', 'Spinach'],
    Animals: ['Dog', 'Cat', 'Elephant'],
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>My Grocery List</h1>
        <a href="https://github.com/your-username/your-repo" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub Logo" className="logo" />
        </a>
      </div>

      <div className="main-content">
        <div className="category-list">
          <h2>Select a Category:</h2>
          <ul>
            {categories.map((category) => (
              <li key={category} onClick={() => handleCategoryChange(category)}>
                {category}
              </li>
            ))}
          </ul>
        </div>

        {selectedCategory && (
          <div className="selected-list">
            <h2>{`Selected ${selectedCategory}:`}</h2>
            <ul>
              {subcategories[selectedCategory].map((subCategory) => (
                <li key={subCategory}>{subCategory}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

