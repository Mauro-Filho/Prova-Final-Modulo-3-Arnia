import { Schema, model, Model, InferSchemaType } from "mongoose";

const reviewsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 24,
      unique: true
    },
    description: [
      {
        type: String,
        required: true,
        maxLength: 200,
      },
    ],
    score: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    updatedAt: [{
      type: Date,
      default: [Date.now]
    }]
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export type Review = InferSchemaType<typeof reviewsSchema>;

export const ReviewModel: Model<Review> = model("Review", reviewsSchema);
