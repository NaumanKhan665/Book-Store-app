import express, { response } from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import { Book } from "./model/bookmodel.js";
import booksroute from './routes/booksroute.js'
import cors from 'cors'

dotenv.config()


const app = express();
const port = process.env.PORT || 3000;
const db_url = process.env.DB;
app.use(express.json())
app.use(cors())
app.use('/books',booksroute)



mongoose
    .connect(db_url)
    .then(() => {

        console.log("succfully connected to database")
        app.listen(port, () => {
            console.log(`system is started on port ${port}`)

        })


    })
    .catch((error) => {
        console.log("Database connection failed", error)

    })




