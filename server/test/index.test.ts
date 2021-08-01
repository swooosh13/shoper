import { app } from "../src/index";
import request from "supertest";

describe("Test the root path", () => {
  test("It should response Get Method", (done) => {
    request(app)
      .get("/api/check")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
