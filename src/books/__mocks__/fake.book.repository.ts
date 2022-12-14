import { fakeBooksData, updatedBook } from "./fake.book.data";
import { BookRepository } from "../repositories/book.repository"; 



export const fakeBooksRepository = {
  getAll: () => Promise.resolve(fakeBooksData),
  getById: () => Promise.resolve(fakeBooksData[0]),
  create: () => Promise.resolve(fakeBooksData[1]),
  update: () => Promise.resolve(updatedBook),
} as unknown as BookRepository;
