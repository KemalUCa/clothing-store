# Clothing Store API - Group 7

This project is a Node.js and Express REST API for managing products in a Clothing Store. It supports basic CRUD operations (create, read, update, delete) using MongoDB Atlas for data storage.
The application is integrated with other team members’ APIs. A custom endpoint (GET /allproducts) fetches and combines product data from multiple deployed services, simulating a simple microservices architecture.

A basic frontend interface is included to display products from all stores under a unified "Group 7 Store" view. An API testing section is also provided for interacting with the Clothing Store endpoints.

Testing is implemented using Jest and Supertest. The GET /products endpoint is tested to ensure it returns a 200 status code and a valid array, with output formatted as:

`email@example.com - getAll to show all product - 200 - PASSED`.

An automate.js script runs all test files sequentially and provides clear, readable output in the terminal.

# How to Run

1. Install dependencies: `npm install`
2. Create a .env file with your MongoDB connection string and port.
3. Start the server: `npm start`
4. Run tests: `npm test`
5. Run all tests sequentially: `npm run automate`

# Deployment

## API Endpoints

Base URL:
https://clothing-store-saix.onrender.com

### Clothing Store (Own API)

- GET /products → Retrieve all products from Clothing Store  
  `https://clothing-store-saix.onrender.com/products`

### Integrated Endpoint (Group 7)

- GET /allproducts → Retrieve and combine products from all stores  
  https://clothing-store-saix.onrender.com/allproducts
