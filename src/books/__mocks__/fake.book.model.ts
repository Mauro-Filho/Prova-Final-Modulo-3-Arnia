import { Model } from "mongoose";
import { Book } from "../models/book.model";
import { fakeBooksData, updatedBook } from "./fake.book.data";

export const fakeBookModel = {
  find: () => Promise.resolve(fakeBooksData),
  findById: jest.fn().mockImplementation(()=> (
    {
        populate: jest.fn().mockImplementation(()=> fakeBooksData[0])
    }
  )),
  create: () => Promise.resolve(fakeBooksData[0]),
  findByIdAndUpdate: () => Promise.resolve(updatedBook),
} as unknown as Model<Book>;
