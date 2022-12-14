import { CustomErrors, invalidIdError, promiseError, } from "../../utils/error.handler";
import { Review } from "../models/review.model";
import { ReviewRepository } from "../repositories/review.repository";
import { Types } from "mongoose";

export class ReviewService {
    constructor(private readonly reviewRepository: ReviewRepository) {}

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

    async create(reviewBody: Review): Promise<Review | CustomErrors>{
        try {
            const review = await this.reviewRepository.create(reviewBody)
            return review 
        } catch (error) {
            return promiseError(error)
        }
    }

    async update(id: string, reviewBody: Review): Promise<Review | CustomErrors>{
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