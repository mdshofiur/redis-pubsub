import express, { Express } from "express";
import cors from "cors";
import Redis  from 'ioredis'


const app: Express = express();
app.use(cors());
const port: number = 8080;

const subscriber = new Redis({
  port: 6379,
  host: '127.0.0.1'
});


(function () {


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// check redis connection

subscriber.ping((err, result) => {
  if (err) {
    console.error('Error connecting to Redis');
  } else {
    console.log('Redis connection successful');
  }
});


subscriber.subscribe('message');

subscriber.on('message', (channel, message) => {
  console.log(`Received message on channel ${channel}: ${message}`);
});


process.on("SIGINT", async () => {
  subscriber.quit();
});

})();