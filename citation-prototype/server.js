// server.js
import express from "express";
import fs from "fs";
import path from "path";
import { REPORTER_PATTERNS, REPORTER_NAMES, citationPattern } from "./config.js";

const app = express();
const PORT = 3000;

// Serve static frontend files
app.use(express.static("public"));

// ****** GET citations from text file ******

const citationDatabase = new Map();

// Endpoint to read and process text file
app.get("/api/text", (req, res) => {
  const filePath = path.join(process.cwd(), "sample.txt");

  // Read file
  const content = fs.readFileSync(filePath, "utf8");

  const linkedContent = content.replace(
    citationPattern,
    (match, plaintiff, defendant, volume, reporter, page, year) => {
      const citation = {
        plaintiff,
        defendant,
        volume,
        reporter: REPORTER_NAMES[reporter] || reporter,
        page,
        year
      };

      // Store citation in "database"
      const citationId = `${plaintiff}-${defendant}-${year}`.toLowerCase();
      citationDatabase.set(citationId, citation);

      return `<a href="/citation/${encodeURIComponent(citationId)}" 
        class="citation" 
        data-reporter="${reporter}"
        title="${plaintiff} v. ${defendant}, ${volume} ${reporter} ${page}">${match}</a>`;
    }
  );

  res.send(linkedContent);
});

// Example endpoint for clicked citations
app.get("/citation/:id", (req, res) => {
  const id = req.params.id;
  const citation = citationDatabase.get(id);

  if (!citation) {
    return res.status(404).send('Citation not found');
  }
  res.send(`
    <h1>Citation Details</h1>
    <p>Case: ${citation.plaintiff} v. ${citation.defendant}</p>
    <p>Reporter: Volume ${citation.volume} ${citation.reporter} Page ${citation.page}</p>
    <p>Year: ${citation.year}</p>
    <hr>
    <!-- Could add more details like -->
    <p>Full Citation: ${citation.plaintiff} v. ${citation.defendant}, ${citation.volume} ${citation.reporter} ${citation.page} (${citation.year})</p>
    <!-- Could add links to similar cases, related documents, etc. -->
  `);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));