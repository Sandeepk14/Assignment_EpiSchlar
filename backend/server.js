const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

app.use(cors());

const port = 8090; // You can use any port you prefer

app.get("/globe-data", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
