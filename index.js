import express from "express";
import bodyParser from "body-parser";
import presentState from "./routes/state.js";
import catagoriesData from "./routes/catagoriesData.js";

const app = express();
const PORT = 5001;

app.use(bodyParser.json());
app.use("/prState", presentState);
app.use("/ctData", catagoriesData);

app.get("/", (req, res) => {
  res.send("Hello Home");
});

app.listen(PORT, () =>
  console.log(`Server started on port : http://localhost:${PORT}`)
);
