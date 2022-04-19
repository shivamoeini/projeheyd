const express = require("express");
const app = express();

app.get("/multiply", (req, res) => {
  const { value1, value2 } = req.query;
  console.log(req.query);
  res.send(`you searched for: ${value1} with query of: ${value2}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`your app is runing on port:${PORT}`);
});
