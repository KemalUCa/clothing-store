const request = require("supertest");

describe("GET /products", () => {
    test("getAll to show all product", async () => {
        const response = await request("https://farha-store-url.onrender.com")
            .get("/products");

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    }, 20000);
});