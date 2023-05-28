import { config } from "dotenv";
import express from "express";
import cors from "cors";
import offerRouter from "./routes/offers.js";


config();
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.use("/api/offers",offerRouter)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
