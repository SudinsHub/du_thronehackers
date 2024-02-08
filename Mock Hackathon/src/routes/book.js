import express from "express";
import { createNew, getBooks, updateBook } from "../controllers/book.js";
const bookRoute = express.Router();
bookRoute.use(express.json());

bookRoute.post('/', createNew);
bookRoute.get('/', getBooks);
bookRoute.put('/:id', updateBook);
export default bookRoute;