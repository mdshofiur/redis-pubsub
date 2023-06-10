import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";

const app: Express = express();

app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.get("/", (req:Request, res:Response, next: NextFunction) => {
  res.send("Hello World!");
});

export default app;
