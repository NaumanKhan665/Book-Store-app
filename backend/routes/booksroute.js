import express from 'express';
import { Book } from "../model/bookmodel.js";

const router=express.Router()



//routes for books
router.post('/', async (req, res) => {
    try {

        if (!req.body.title ||
            !req.body.author ||
            !req.body.publishyear
        ) {
            res.status(400).send({ message: "send all required fields" })
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishyear: req.body.publishyear

        }
        const book = await Book.create(newBook)
        return res.status(201).send(book)


    }
    catch (err) {
        console.log(err.message)
        res.status(5000).send({ message: err.message })
    }

})

//route to get all the books
router.get('/', async (req, res) => {

    try {
        const books = await Book.find({});

        return res.status(200).json({
            count: books.length,
            data: books
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.messages })
    }

})

//route to get single book
router.get('/:id', async (req, res) => {

    try {
        const { id } = req.params;
        const book = await Book.findById(id)

        if (!book) {
            return res.status(401).json({ message: "book not found" })
        }
        return res.status(200).json(book)


    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.messages })


    }

})

//update the book 
router.put('/:id', async (req, res) => {

    try {
        const { id } = req.params;

        const result = await Book.findByIdAndUpdate(id, req.body)
        if (!result) {
            return res.status(404).json({ message: "book not found" })
        }
        return res.status(200).send({ message: "book updated succesfuly" })


    } catch (error) {


        console.log(error.message)
        res.status(500).send({ message: error.messages })

    }



})
//delete the book 

router.delete('/:id', async (req, res) => {


    try {

        const { id } = req.params;

        const result = await Book.findByIdAndDelete(id)
        if (!result) {
            return res.status(404).json({ message: "book not found" })
        }
        return res.status(200).send({ message: "book Deleted succesfuly" })


    } catch (error) {
        console.log(error)
        res.status(500).send({ message: message.error })

    }

})



export default router;