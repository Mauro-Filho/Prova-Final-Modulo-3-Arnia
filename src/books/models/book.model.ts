import { Schema, model, Model, InferSchemaType } from "mongoose";

const booksSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 24,
      unique: true,
    },
    releaseDateOf: {
      type: String,
      required: true,
    },
    languages: {
      type: [String],
      required: true,
      maxLength: 18,
    },
    status: {
      type: Boolean,
      required: true,
    },

    author: {
      type: String,
      required: true,
      maxLength: 24,
    },
    reviewId: {
      type: Schema.Types.ObjectId,
      ref: "Review",
      required: false,
    },
  },
  { timestamps: true }
);

export type Book = InferSchemaType<typeof booksSchema>;

export const BookModel: Model<Book> = model("Book", booksSchema);
