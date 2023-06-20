import { config } from "dotenv";
import express from "express";
import cors from "cors";
import offerRouter from "./routes/offers.js";
import reviewRouter from "./routes/reviews.js";
import recentRouter from "./routes/recents.js";
import loginRouter from "./routes/login.js";
import registerRouter from "./routes/register.js";
import userRouter from "./routes/users.js";

config();
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.use("/api/offers", offerRouter);

app.use("/api/reviews", reviewRouter);

app.use("/api/recents",recentRouter);

app.use("/api/login",loginRouter);

app.use("/api/register",registerRouter);

app.use("/api/users",userRouter)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
