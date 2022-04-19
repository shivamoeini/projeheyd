const express = require("express");
const app = express();
app.get("/search", (req, res) => {
  const { q } = req.query;
  console.log(req.query);
  res.send(`you searched for: ${q}`);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`your app is runing on port:${PORT}`);
});
