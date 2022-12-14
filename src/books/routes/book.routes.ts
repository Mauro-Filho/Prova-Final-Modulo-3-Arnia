import express from "express";
import { booksFactory } from "../factories/book.factory";

const booksRoutes = express.Router();

//o bind é encarregado de manter o escopo do this
booksRoutes.get("/", booksFactory.getAll.bind(booksFactory));
booksRoutes.get("/:id", booksFactory.getById.bind(booksFactory));
booksRoutes.get("/:author", booksFactory.getById.bind(booksFactory));
booksRoutes.post("/", booksFactory.create.bind(booksFactory));
booksRoutes.put("/:id", booksFactory.update.bind(booksFactory));
// booksRoutes.delete("/:id", booksFactory.delete.bind(booksFactory));

export default booksRoutes;
