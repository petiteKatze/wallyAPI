import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";
const router = express.Router();

router.get("/:catagory", (req, res) => {
  const moduleURL = import.meta.url;
  const filePath = fileURLToPath(moduleURL);
  const directoryPath = dirname(filePath);
  if (req.params.catagory == "city-scapes") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/city-scapes.json"
    );
    res.sendFile(jsonFilePath);
  }
  if (req.params.catagory == "festivities") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/festivities.json"
    );
    res.sendFile(jsonFilePath);
  }
  if (req.params.catagory == "pastel") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/pastel.json"
    );
    res.sendFile(jsonFilePath);
  }
  if (req.params.catagory == "quotes") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/quotes.json"
    );
    res.sendFile(jsonFilePath);
  }
  if (req.params.catagory == "reverie") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/reverie.json"
    );
    res.sendFile(jsonFilePath);
  }
  if (req.params.catagory == "serene") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/serene.json"
    );
    res.sendFile(jsonFilePath);
  } else {
    const jsonFilePath = path.join(directoryPath, "../API/all.json");
    res.sendFile(jsonFilePath);
  }
});

export default router;
