import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import { publisher } from "./utils/init_redis";

const app: Express = express();

app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.get("/", (req:Request, res:Response, next: NextFunction) => {
  res.send("Hello World! From Publisher");
});


app.post("/publish", async (req:Request, res:Response, next: NextFunction) => { 
  const {channel, message} = req.body;

  const article = {
    id: '123456',
    name: 'Using Redis Pub/Sub with Node.js'
  };
  
  await publisher.publish('message', JSON.stringify(article));

  res.send({
    channel: channel,
    message: message
  });
})



export default app;
