import mongoose from "mongoose";

export const bookSchema = mongoose.Schema({
    id: Number,
    title: String,
    author: String,
    genre: String,
    price: Number
});

export const Book = mongoose.model("Book", bookSchema);

  