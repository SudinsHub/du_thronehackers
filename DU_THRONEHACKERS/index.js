import express from "express";
import 'dotenv/config';
import mongoose from "mongoose";
import { dbName } from "./src/constants.js";
import stationRoute from "./src/routes/stations.js";
import userRoute from "./src/routes/users.js";
import trainRoute from "./src/routes/trains.js";
import walletRoute from "./src/routes/wallet.js";
import { User, Train, Station } from "./src/models.js";
const dbUrl = process.env.MONGODB_URI;

mongoose
  .connect(dbUrl + '/' + dbName)
  .then(() => {
    console.log("Connected to database!");
  })
  .then(() => {
    // TO DO
    User.collection.drop();
    Train.collection.drop();
    Station.collection.drop();
    console.log("Cleared Book Collection!");
  })
  .catch((error) => {
    console.log("Something is wrong in connection or Dropping!", error);
    process.exit();
  });  


const app = express();

app.use(express.json());
app.use('/api/trains', trainRoute);
app.use('/api/stations', stationRoute);
app.use('/api/users', userRoute);
app.use('/api/wallets', walletRoute);



const PORTA = process.env.PORT;

app.listen(PORTA, ()=>{
    console.log(`Server is listening on port: ${PORTA}`);
});