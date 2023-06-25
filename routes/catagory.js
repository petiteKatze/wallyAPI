import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";
const router = express.Router();

router.get("/:catagory", (req, res) => {
  const moduleURL = import.meta.url;
  const filePath = fileURLToPath(moduleURL);
  const directoryPath = dirname(filePath);

  //city scapes
  if (req.params.catagory == "City Scapes") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/city-scapes.json"
    );
    res.sendFile(jsonFilePath);
  } else if (req.params.catagory == "Festivities") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/festivities.json"
    );
    res.sendFile(jsonFilePath);
  } else if (req.params.catagory == "Pastel") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/pastel.json"
    );
    res.sendFile(jsonFilePath);
  } else if (req.params.catagory == "Quotes") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/quotes.json"
    );
    res.sendFile(jsonFilePath);
  } else if (req.params.catagory == "Reverie") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/reverie.json"
    );
    res.sendFile(jsonFilePath);
  } else if (req.params.catagory == "Colors") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/colors.json"
    );
    res.sendFile(jsonFilePath);
  } else if (req.params.catagory == "Gradients") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/gradients.json"
    );
    res.sendFile(jsonFilePath);
  } else if (req.params.catagory == "Serene") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/serene.json"
    );
    res.sendFile(jsonFilePath);
  } else if (req.params.catagory == "Tablet") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/tablet.json"
    );
    res.sendFile(jsonFilePath);
  } else if (req.params.catagory == "Motivational") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/motivational.json"
    );
    res.sendFile(jsonFilePath);
  } else {
    //anything else
    const jsonFilePath = path.join(directoryPath, "../API/all.json");
    res.sendFile(jsonFilePath);
  }
});

export default router;
