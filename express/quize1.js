const express = require("express");
const app = express();
app.get("/chocolate", (req, res) => {
  const { amount } = req.query;
  console.log(req.query);
  res.send(`<h1>chocolate: ${amount}</h1>`);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`your app is runing on port:${PORT}`);
});
