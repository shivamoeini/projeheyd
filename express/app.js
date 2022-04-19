const express = require("express");
const app = express();
// app.use(() => {
//   console.log("hello world");
// });
// app.use((request, response) => {
//   //   console.dir(request);
//   console.log(request.send);
//   response.send("<h1>hello world</h1>");
// });

// app.get("/cat", (req, res) => {
//   res.send("<h1>mewoe</h1>");
// });
// app.post("/cat", (req, res) => {
//   res.send("<h1>mewoe</h1>");
// });
// app.get("/dog", (req, res) => {
//   res.send("<h6>woof</h6>");
// });
// app.post("/dog", (req, res) => {
//   res.send("<h4>woof</h6>");
// });
// app.get("/r/:par", (req, res) => {
//   const { par } = req.params;
//   res.send(`your serch${par}`);
// });
// app.get("/search", (req, res) => {
//   const { q } = req.query;
//   res.send(`you search for:${q}`);
// });
app.get("/*", (req, res) => {
  res.send("page not found");
});
const PORT = 6633;
app.listen(PORT, () => {
  console.log(`your app is runing on port:${PORT}`);
});
