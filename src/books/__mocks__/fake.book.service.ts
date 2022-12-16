import { BookService } from "../services/book.service";
import { fakeBooksData, updatedBook } from "./fake.book.data";

export const fakeBooksService = {
  getAll: () => Promise.resolve(fakeBooksData),
  getById: () => Promise.resolve(fakeBooksData[0]),
  getAllByAuthor: () => Promise.resolve(fakeBooksData[0]),
  create: () => Promise.resolve(fakeBooksData[1]),
  update: () => Promise.resolve(updatedBook),
  updateStatus: () => Promise.resolve(updatedBook)
} as unknown as BookService;
