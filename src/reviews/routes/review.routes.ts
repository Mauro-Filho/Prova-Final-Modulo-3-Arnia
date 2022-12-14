import express from "express";
import { reviewsFactory } from "../factories/review.factory";

const reviewsRoutes = express.Router();

reviewsRoutes.get("/", reviewsFactory.getAll.bind(reviewsFactory));
reviewsRoutes.get("/:id", reviewsFactory.getById.bind(reviewsFactory));
reviewsRoutes.post("/", reviewsFactory.create.bind(reviewsFactory));
reviewsRoutes.put("/:id", reviewsFactory.update.bind(reviewsFactory));

export default reviewsRoutes;