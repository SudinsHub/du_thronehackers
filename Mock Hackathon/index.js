import express from "express";
import 'dotenv/config';
import mongoose from "mongoose";
import bookRoute from "./src/routes/book.js";
import { dbName } from "./src/constants.js";
import { Book } from "./src/models.js";
const dbUrl = process.env.MONGODB_URI;
 
mongoose
  .connect(dbUrl + '/' + dbName)
  .then(() => {
    console.log("Connected to database!");
  })
  .then(() => {
    Book.collection.drop();
    console.log("Cleared Book Collection!");
  })
  .catch((error) => {
    console.log("Something is wrong in connection or Dropping!", error);
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