// finance.js
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Personal Finance Planner Backend is running successfully!");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
