// server.js
import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 3000;

// Serve static frontend files
app.use(express.static("public"));

// Endpoint to read and process text file
app.get("/api/text", (req, res) => {
  const filePath = path.join(process.cwd(), "sample.txt");

  // Read file
  const content = fs.readFileSync(filePath, "utf8");

  // Find all [CIT###] and wrap them in <a> links
  const linked = content.replace(
    /\[CIT(\d+)\]/g,
    (match, num) => `<a href="/citation/${num}" target="_blank">${match}</a>`
  );

  res.send(linked);
});

// Example endpoint for clicked citations
app.get("/citation/:id", (req, res) => {
  const id = req.params.id;
  res.send(`<h1>Details for Citation ${id}</h1><p>This is placeholder info.</p>`);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));