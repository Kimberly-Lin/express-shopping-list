const request = require("supertest");

const app = require("./app");
// const { items } = require("./fakeDb");
let db = require("./fakeDb");
// let routes = require("./router");

/** GET /items - returns '{items: [item, ...]}' */
describe("GET /items", function() {
    it("Gets a list of items", async function() {
        const resp = await request(app).get("/items");

        expect(resp.body).toEqual({"items": [
            {"name": "bananas", "price": 1.99}, 
            {"name": "avocado", "price": 2.99}
        ]});
    });
});

/** POST /items - create item from data; return `{added: new_item}` */

describe("POST /items", function() {
    it("Adds a new item to list", async function() {
      const resp = await request(app)
        .post(`/items`)
        .send({
          name: "toy", price: 13.99
        });
      expect(resp.statusCode).toEqual(200);
      expect(resp.body).toEqual({
        added: { name: "toy", price: 13.99 }
      });
    });
  });