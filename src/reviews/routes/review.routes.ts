import express from "express";
import { reviewsFactory } from "../factories/review.factory";

const reviewsRoutes = express.Router();

reviewsRoutes.get("/books/:bookId/reviews/", reviewsFactory.getAll.bind(reviewsFactory));//ok
reviewsRoutes.get("/books/:bookId/reviews/:id", reviewsFactory.getById.bind(reviewsFactory));//ok
reviewsRoutes.post("/books/:bookId/reviews/", reviewsFactory.create.bind(reviewsFactory));//ok
reviewsRoutes.put("/books/:bookId/reviews/:id", reviewsFactory.update.bind(reviewsFactory));

export default reviewsRoutes;