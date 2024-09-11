import cors from "cors";
import express from "express";
const a = 0;

const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(8080, () => console.log("Server listening on port 8080"));
