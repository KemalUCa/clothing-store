# Clothing Store API - Group 7

This project is a Node.js and Express-based REST API developed to manage products in a Clothing Store. It allows users to perform basic CRUD operations such as creating, retrieving, updating, and deleting products, with data stored in MongoDB Atlas.

The application also integrates with other team members’ modules using API calls. An additional endpoint, GET /allproducts, is used to fetch and combine product data from different deployed services, simulating a microservices-style architecture where independent systems communicate through HTTP requests.

A simple frontend interface is included to display products from all stores under a unified Group 7 Store view, while also providing an API testing section for the Clothing Store module.

Testing is implemented using Jest and Supertest. The GET /products endpoint is tested to ensure it returns a 200 status code and a valid array. The output follows the required format:
"email@example.com - getAll to show all product - 200 - PASSED".

An automate.js script is used to run all test files sequentially, ensuring readable output and clear test results in the terminal.

To run the project, install dependencies using `npm install`, create a `.env` file with your MongoDB connection string and port, and start the server using `npm run dev`. Tests can be executed using `npm test`, and all tests can be run sequentially using `npm run automate`.

The application is deployed on Render:
https://clothing-store-saix.onrender.com

This project demonstrates REST API development, integration of multiple services, automated testing, and collaborative development without code sharing.
