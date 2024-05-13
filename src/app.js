import express from "express";

const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send();
  }

  res.send({ userId: 0 });
});

export default app;
