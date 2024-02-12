import { Book } from "../models.js";
import mongoose from "mongoose";
// let books = [];


export const createNew = (req, res)=>{
    const dtls = req.body;
    const newBook = new Book({...dtls});
    newBook
        .save()
        .then((result) => {
        res.status(201).json(dtls);
        })
        .catch((err) => console.log(err));
    // console.log(`The book ${dtls.title} is included.`);
    console.log(dtls);
    // res.send(dtls);
}

export const getBooks = (req, res)=>{
    const {title, author, genre, sort, order} = req.query;
    const searchField = title || author || genre;
    const fieldName = title ? 'title' : (author ? 'author' : 'genre');
    const orderSeq = (order == 'DESC') ? -1 : 1;
    const sortField = sort ? sort : "id";
    if(!searchField){
        Book
        .find()
        .select('id title author genre price -_id')
        .sort({[sortField] : orderSeq, 'id':1})
        .exec()
        .then((list)=>{
            res.status(200).json({
                "books" : list});
            })
        .catch((err) => console.log(err));
    } else{
        Book
        .find({[fieldName] : searchField})
        .select('id title author genre price -_id')
        .sort({[sortField] : orderSeq, id:1})
        .exec()
        .then((list)=>{
            res.status(200).json({
                "books" : list});
            })
        .catch((err) => console.log(err));

    }
}

export const updateBook = async(req, res)=>{
    const bookID = req.params.id;
    const newInfo = req.body;
    
    await Book.findOneAndUpdate({id:bookID}, newInfo) // {new: true, select: '-_id'}
    .select('id title author genre price -_id')
    .then((doc)=>{
        if(!doc) return res.status(404).json({
            "message": `book with id: ${bookID} was not found` 
            });
        res.status(200).json(doc);
    })
    .catch((err)=>{
        console.log("Error in update Book", err);
    })
}
