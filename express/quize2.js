const express = require("express");
const app = express();

app.get("/multiply", (req, res) => {
  const { value1, value2 } = req.query;
  console.log(req.query);
  res.send(
    `<h1>Value1:</h1> <h4>${value1}</h4>  <h1> Value2: </h1><h4>${value2}</h4>  `
  );
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`your app is runing on port:${PORT}`);
});
