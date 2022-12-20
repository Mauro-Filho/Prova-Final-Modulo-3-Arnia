import { Book } from "../models/book.model";
import { BookRepository } from "../repositories/book.repository";
import {
  CustomErrors,
  InvalidIdError,
  invalidIdError,
  promiseError,
} from "../../utils/error.handler";
import { isIdValid } from "../../utils/id.validator";

export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async getAll(status: boolean): Promise<Book[] | CustomErrors> {
    try {
      const books = await this.bookRepository.getAll(status);
      return books;
    } catch (error) {
      return promiseError(error);
    }
  }

  async getById(id: string): Promise<Book | CustomErrors> {
    if (!isIdValid(id)) {
      return invalidIdError(id);
    }

    try {
      const book = await this.bookRepository.getById(id);
      return book;
    } catch (error) {
      return promiseError(error);
    }
  }

  async getByAuthor(author: string): Promise<Book[] | CustomErrors> {
    try {
      const booksAuthor = await this.bookRepository.getByAuthor(author);
      return booksAuthor;
    } catch (error) {
      return promiseError(error);
    }
  }

  async create(book: Book): Promise<Book | CustomErrors> {
    try {
      const newBook = await this.bookRepository.create(book);
      return newBook;
    } catch (error) {
      return promiseError(error);
    }
  }

  async update(id: string, book: Book): Promise<Book | CustomErrors> {
    if (!isIdValid(id)) {
      return invalidIdError(id);
    }

    try {
      const updatedBook = await this.bookRepository.update(id, book);
      return updatedBook;
    } catch (error) {
      return promiseError(error);
    }
  }

  async updateAuthor(id: string, name: string): Promise<Book | CustomErrors> {
    if (!isIdValid(id)) {
      return invalidIdError(id);
    }

    try {
      const updatedBook = await this.bookRepository.updateAuthor(id, name);

      return updatedBook;
    } catch (error) {
      return promiseError(error);
    }
  }

  async updateStatus(id: string, name: boolean): Promise<Book | CustomErrors> {
    if (!isIdValid(id)) {
      return invalidIdError(id);
    }

    try {
      const updatedBook = await this.bookRepository.updateStatus(id, name);

      return updatedBook;
    } catch (error) {
      return promiseError(error);
    }
  }
  async associateReview(
    bookId: string,
    reviewId: string
  ): Promise<Book | InvalidIdError | CustomErrors> {
    try {
      const updateBook = await this.bookRepository.updateReview(
        bookId,
        reviewId
      );
      if (!isIdValid(bookId)) {
        return invalidIdError(bookId);
      }
      return updateBook;
    } catch (error) {
      return promiseError(error);
    }
  }
}
