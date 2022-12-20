import { Review, ReviewModel } from "../models/review.model";
import { Model } from "mongoose";
import { RequestUpdateReviewDto } from "../../../src/reviews/dtos/update-review.dto";

export class ReviewRepository {
  constructor(private readonly reviewModel: Model<Review>) {}

  async getAll(): Promise<Review[]> {
    const review = await this.reviewModel.find();
    return review;
  }

  async getById(id: string): Promise<Review> {
    const reviewId = await this.reviewModel.findById(id);

    if (reviewId === null) {
      return {} as Review;
    }

    return reviewId;
  }

  
  async create(review: Review): Promise<Review> {
    const newReview = this.reviewModel.create(review);
    return newReview;
  }

  async update(id: string, book: RequestUpdateReviewDto): Promise<Review> {
    const updatedReview = await this.reviewModel.findByIdAndUpdate(
      id,
      {
        $push: {
          description: book.description,
          updatedAt: new Date().getTime(),
        }
      },
      {
        new: true,
      }
    );

    if (updatedReview === null) {
      return {} as Review;
    }

    return updatedReview;
  }
}

const reviewRepository = new ReviewRepository(ReviewModel);
