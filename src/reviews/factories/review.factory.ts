import { ReviewService } from "../services/review.service";
import { ReviewRepository } from "../repositories/review.repository";
import { ReviewModel } from "../models/review.model";
import { ReviewController } from "../controllers/review.controller";

export function reviewFactory() {
  const booksRepository = new ReviewRepository(ReviewModel);
  const booksService = new ReviewService(booksRepository);
  const booksController = new ReviewController(booksService);

  return booksController;
}

export const reviewsFactory = reviewFactory();
