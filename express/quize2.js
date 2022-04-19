const express = require("express");
const app = express();

app.get("/newSearch", (req, res) => {
  const { q, query } = req.query;
  console.log(req.query);
  res.send(`you searched for: ${q} with query of: ${query}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`your app is runing on port:${PORT}`);
});
