// /routes/productRoutes.js
const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getProductById,
    createProduct,
} = require('../controllers/productController');

// Route for getting all products
router.get('/', getAllProducts);

// Route for getting a product by ID
router.get('/:id', getProductById);

// Route for creating a new product
router.post('/', createProduct);

module.exports = router;
