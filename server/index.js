import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import UserRoute from "./router/UserRoutes.js";
import PropertyRoute from "./router/PropertyRoute.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json()); // recieve data (JSON) from client and convert to JS Object
app.use(express.urlencoded({ extended: true })); // recieve form data from client and convert to JS Object

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB");
  })

  .catch((err) => console.error(err));


// ROUTES

app.use("/api/v1/user", UserRoute);
app.use("/api/v1/property", PropertyRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
