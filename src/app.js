import express from "express";

const app = express();

app.post("/users", (req, res) => {
  res.send({ userId: 0 });
});

export default app;
