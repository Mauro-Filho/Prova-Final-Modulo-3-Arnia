import { Review, ReviewModel } from "../models/review.model";
import { Model } from "mongoose";
import { RequestUpdateReviewDto } from "../../../src/reviews/dtos/update-review.dto";

export class ReviewRepository {
  constructor(private readonly bookModel: Model<Review>) {}

  async getAll(): Promise<Review[]> {
    const books = await this.bookModel.find();
    return books;
  }

  async getById(id: string): Promise<Review> {
    const book = await this.bookModel.findById(id);

    if (book === null) {
      return {} as Review;
    }

    return book;
  }

  async create(book: Review): Promise<Review> {
    const newBook = this.bookModel.create(book);
    return newBook;
  }

  async update(id: string, book: RequestUpdateReviewDto): Promise<Review> {
    const updatedBook = await this.bookModel.findByIdAndUpdate(
      id,
      {
        $push: {
          descrip: book.descrip,
          updatedAt: new Date().getTime(),
        }
      },
      {
        new: true,
      }
    );

    if (updatedBook === null) {
      return {} as Review;
    }

    return updatedBook;
  }
}

const reviewRepository = new ReviewRepository(ReviewModel);
