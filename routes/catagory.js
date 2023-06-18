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
  if (req.params.catagory == "city-scapes") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/city-scapes.json"
    );
    res.sendFile(jsonFilePath);
  }
  //festivities
  if (req.params.catagory == "festivities") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/festivities.json"
    );
    res.sendFile(jsonFilePath);
  }
  //pastel
  if (req.params.catagory == "pastel") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/pastel.json"
    );
    res.sendFile(jsonFilePath);
  }
  //quotes
  if (req.params.catagory == "quotes") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/quotes.json"
    );
    res.sendFile(jsonFilePath);
  }
  //reverie
  if (req.params.catagory == "reverie") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/reverie.json"
    );
    res.sendFile(jsonFilePath);
  }
  //colors
  if (req.params.catagory == "colors") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/colors.json"
    );
    res.sendFile(jsonFilePath);
  }
  //gradients
  if (req.params.catagory == "gradients") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/gradients.json"
    );
    res.sendFile(jsonFilePath);
  }
  //srerene
  if (req.params.catagory == "serene") {
    const jsonFilePath = path.join(
      directoryPath,
      "../API/Catagory/serene.json"
    );
    res.sendFile(jsonFilePath);
  } else {
    //anything else
    const jsonFilePath = path.join(directoryPath, "../API/all.json");
    res.sendFile(jsonFilePath);
  }
});

export default router;
