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
  });
  describe("when the username or password is missing", () => {});
});
