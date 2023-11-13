const express = require('express');
const axios = require('axios');

const app = express();
const port = 5000;

// Sample data
const categories = ['Fruits', 'Vegetables', 'Animals'];
const subcategories = {
  Fruits: ['Apple', 'Banana', 'Orange'],
  Vegetables: ['Carrot', 'Broccoli', 'Spinach'],
  Animals: ['Dog', 'Cat', 'Elephant'],
};

app.get('/api/categories', (req, res) => {
  res.json(categories);
});

app.get('/api/subcategories/:category', (req, res) => {
  const { category } = req.params;
  res.json(subcategories[category] || []);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
