import express from "express";
import bodyParser from "body-parser";
import presentState from "./routes/state.js";
import catagoriesData from "./routes/catagoriesData.js";
import getAll from "./routes/getAll.js";
import catagory from "./routes/catagory.js";

const app = express();
const PORT = 5001;

app.use(bodyParser.json());
app.use("/prState", presentState);
app.use("/ctData", catagoriesData);
app.use("/all", getAll);
app.use("/catagory", catagory);

app.get("/", (req, res) => {
  res.send("Hello Home");
});

app.listen(PORT, () =>
  console.log(`Server started on port : http://localhost:${PORT}`)
);
