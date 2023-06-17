import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";
const router = express.Router();

router.get("/", (req, res) => {
  const moduleURL = import.meta.url;
  const filePath = fileURLToPath(moduleURL);
  const directoryPath = dirname(filePath);
  const jsonFilePath = path.join(directoryPath, "../API/catagories-data.json");
  res.sendFile(jsonFilePath);
});

export default router;
