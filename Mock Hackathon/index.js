import express from "express";
import bookRoute from "./src/routes/book.js";
import 'dotenv/config';
import mongoose from "mongoose";
import { dbName } from "./src/constants.js";
// import { PORT, MONGO } from "dotenv";
const dbUrl = process.env.MONGODB_URI;
 
mongoose
  .connect(dbUrl + '/' + dbName)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Connection failed!", error);
    process.exit();
  });  

const app = express();

app.get('/', (req, res)=>{
    res.send("Hello API");
});

app.use('/api/books', bookRoute);


const PORTA = process.env.PORT;

app.listen(PORTA, ()=>{
    console.log(`Server is listening on port: ${PORTA}`);
});