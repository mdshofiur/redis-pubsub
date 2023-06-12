import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import { publisher } from "./utils/init_redis";

const app: Express = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World! From Publisher");
});

app.post(
  "/publish",
  async (req: Request, res: Response, next: NextFunction) => {
    const { message } = req.body;
    const channel = "message";
    await publisher.publish(channel, JSON.stringify(message));
    res.send({
      message: message,
    });
  }
);

export default app;
