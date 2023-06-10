import {  Request, Response } from 'express';
import mongoose from 'mongoose';
import app from './app';

const port:number = 1000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
    }
);

async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/firstdb");
    console.log("Database is connected");
    // app listen 
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
      });
  } catch (error) {
    console.log("Database connect error", error);
  }
}

main();



app.listen(1000, () => { console.log(`Server is running on port ${port}`)});