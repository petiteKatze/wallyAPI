import express from "express";
import bodyParser from "body-parser";
import presentState from "./routes/state.js";
import catagoriesData from "./routes/catagoriesData.js";
import getAll from "./routes/getAll.js";
import catagory from "./routes/catagory.js";

const app = express();
const PORT = 5001;

app.use(bodyParser.json());
//returns present state of wallpapers stored
app.use("/prState", presentState);
//returns catagory data
app.use("/ctData", catagoriesData);
//returns all wallpapers (costly operation)
app.use("/all", getAll);
//returns a particular catagory wallpaper ,  example -/catagory/city-scapes
app.use("/catagory", catagory);

app.get("/version", (req, res) => {
  res.send("104");
});

app.get("/", (req, res) => {
  res.send("Wally API, v1.0.0");
});

app.listen(PORT, () =>
  console.log(`Server started on port : http://localhost:${PORT}`)
);
