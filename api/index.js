import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = express();
var port = 3000;

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

app.listen(8800)