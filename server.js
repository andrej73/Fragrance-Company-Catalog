const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const productsData = require('./products.json');
const reviewsData = require('./reviews.json');

app.use(cors())

app.get('/api/products', (req, res) => {
  res.json(productsData.products)
});

app.get('/api/reviews/:productId', (req, res) => {
  const productId = parseInt(req.params.productId)
  const productReviews = reviewsData.reviews.filter((r) => r.productId === productId)
  res.json(productReviews)
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
