import { ReviewService } from "../services/review.service";
import { ReviewRepository } from "../repositories/review.repository";
import { ReviewModel } from "../models/review.model";
import { ReviewController } from "../controllers/review.controller";
import { bookService } from "../../books/factories/book.factory";

export function reviewFactory() {
  const booksRepository = new ReviewRepository(ReviewModel);
  const booksService = new ReviewService(booksRepository, bookService);
  const booksController = new ReviewController(booksService);

  return booksController;
}

export const reviewsFactory = reviewFactory();
