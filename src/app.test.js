import express from "express";
import request from "supertest";

import app from "../src/app";

describe("POST /users", () => {
  describe("given a username and password", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/users").send({
        username: "username",
        password: "password",
      });
      expect(response.statusCode).toBe(200);
    });

    test("should specify JSON in the Content-Type header", async () => {
      const response = await request(app).post("/users").send({
        username: "username",
        password: "password",
      });
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });

    test("response should have userId", async () => {
      const response = await request(app).post("/users").send({
        username: "username",
        password: "password",
      });
      expect(response.body.userId).toBeDefined();
    });
  });
  describe("when the username or password is missing", () => {});
});
