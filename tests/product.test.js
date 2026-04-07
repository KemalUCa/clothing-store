const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");

describe("GET /products", () => {
    test("should return all products with status 200", async () => {
        const response = await request(app).get("/products");

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);

        console.log("kemalucler@gmail.com - getAll to show all product - 200 - PASSED");
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});