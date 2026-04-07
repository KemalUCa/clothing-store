// import required libraries
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");

// test GET /products endpoint
describe("GET /products", () => {
    test("should return all products with status 200", async () => {
        const response = await request(app).get("/products");

        // check status and response type
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);

        // required output format
        console.log("farha@example.com - getAll to show all product - 200 - PASSED");
    });
});

// close DB connection after test
afterAll(async () => {
    await mongoose.connection.close();
});