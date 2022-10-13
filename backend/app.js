import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import blogRouter from './route/blog-route';
import userRouter from './route/user-route';


const app = express()
app.use(cors())
const port = 4000;


app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/blog', blogRouter);


const username = encodeURIComponent("admin");
const password = encodeURIComponent("@dmin1234");
mongoose
    .connect(`mongodb+srv://${username}:${password}@cluster0.mnm0mek.mongodb.net/?retryWrites=true&w=majority`)
    .then(() =>
        app.listen(port)
    )
    .then(() =>
        console.log('connect to db')
    )
    .catch((err) => console.log(err));
