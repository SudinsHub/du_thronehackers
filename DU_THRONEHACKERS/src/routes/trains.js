import express from "express";
import { createNew } from "../controllers/trains.js";
const trainRoute = express.Router();
trainRoute.use(express.json());

trainRoute.post('/', createNew);
// trainRoute.get('/', getBooks);
// trainRoute.put('/:id', updateBook);
export default trainRoute;