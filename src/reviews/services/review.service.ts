import { CustomErrors, invalidIdError, promiseError, } from "../../utils/error.handler";
import { Review } from "../models/review.model";
import { ReviewRepository } from "../repositories/review.repository";
import { Types } from "mongoose";
import { RequestUpdateReviewDto } from "../../../src/reviews/dtos/update-review.dto";
import { BookService } from "../../books/services/book.service";

export class ReviewService {
    constructor(
        private readonly reviewRepository: ReviewRepository,
        private readonly bookService: BookService
    ) {}

    async getAll(): Promise<Review[] | CustomErrors> {
        try {
            const reviews = await this.reviewRepository.getAll()
            return reviews
        } catch (error) {
            return promiseError(error)
        }
    }

    async getById(id: string): Promise<Review | CustomErrors> {
        if(Types.ObjectId.isValid(id) === false ){
            return invalidIdError(id)
        }
        try {
            const review = await this.reviewRepository.getById(id)
            return review
        } catch (error) {
            return promiseError(error)
        }
    }

    async create(reviewBody: Review, bookId: string): Promise<Review | CustomErrors>{
        try {
            const review = await this.reviewRepository.create(reviewBody)
            await this.bookService.associateReview(bookId, (review as any).id )
            return review
        } catch (error) {
            return promiseError(error)
        }
    }

    async update(id: string, reviewBody: RequestUpdateReviewDto): Promise<Review | CustomErrors>{
        if(Types.ObjectId.isValid(id) === false ){
            return invalidIdError(id)
        }
        try {
            const review = await this.reviewRepository.update(id, reviewBody)
            return review
        } catch (error) {
            return promiseError(error)
        }
    }
}

