import dotenv from "dotenv";
import express from 'express';
import { mongoConnect } from './db/mongo.connection';
import booksRoutes from "./books/routes/book.routes";
import reviewsRoutes from "./reviews/routes/review.routes";


mongoConnect();

const app = express();
app.use(express.json());
app.use(reviewsRoutes);
app.use("/books", booksRoutes);
app.listen(3333, () => console.log("Server is running on port 3333"));
