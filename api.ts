import express, {Request, Response} from "express";
import cors from "cors";
import { photoRouter } from "./src/routers/photo-router";

const app = express();
app.use(cors());
app.use(express.json());

app.use('/photos', photoRouter);

const PORT = 5001;
app.listen(PORT,()=> {
  console.log("we started in port", PORT);
})