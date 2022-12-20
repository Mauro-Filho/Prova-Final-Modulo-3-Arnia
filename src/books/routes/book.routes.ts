import express from "express";
import { booksFactory } from "../factories/book.factory";

const booksRoutes = express.Router();

booksRoutes.get("/", booksFactory.getAll.bind(booksFactory)); //ok
booksRoutes.get("/:id", booksFactory.getById.bind(booksFactory)); //ok
booksRoutes.patch("/:id/author", booksFactory.updateAuthor.bind(booksFactory)); //ok

booksRoutes.post("/", booksFactory.create.bind(booksFactory)); //ok
booksRoutes.put("/:id", booksFactory.update.bind(booksFactory)); //ok
booksRoutes.patch("/:id/status", booksFactory.updateStatus.bind(booksFactory)); //ok

export default booksRoutes;
