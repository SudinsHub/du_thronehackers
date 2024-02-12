import express from "express";
import { createNew } from "../controllers/users.js";
const userRoute = express.Router();
userRoute.use(express.json());

userRoute.post('/', createNew);
// userRoute.get('/', getBooks);
// userRoute.put('/:id', updateBook);
export default userRoute;