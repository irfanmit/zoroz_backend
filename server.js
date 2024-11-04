// /server.js
const express = require('express');
const cors = require('cors'); // Import the cors package
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoute');

connectDB(); // Connect to MongoDB

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON requests

// Define routes
app.use('/api/products', productRoutes); // Route for product-related operations

// Start the server
const PORT = process.env.PORT || 8000; // Define port number
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // Log server start message
});
