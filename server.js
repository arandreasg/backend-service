const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  console.log("Hit root / route");
  res.send({ message: "Default route" });
});

// Endpoint GET /hello
app.get("/hello", (req, res) => {
  console.log("Hit endpoint /hello");
  res.send({ message: "Hello from /hello API" });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${PORT}/`);
});