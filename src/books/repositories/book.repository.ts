import { Book, BookModel } from "../models/book.model";
import { Model } from "mongoose";

export class BookRepository {
  constructor(private readonly bookModel: Model<Book>) {}

  async getAll(status: boolean): Promise<Book[]> {
    const books = await this.bookModel.find({ status: true });

    return books;
  }

  async getById(id: string): Promise<Book> {
    const book = await this.bookModel.findById(id).populate("reviewId");

    if (book === null) {
      return {} as Book;
    }

    return book;
  }

  async getByAuthor(author: string): Promise<Book[]> {
    const book = await this.bookModel.find({
      author: { $regex: ".*" + author + ".*" },
    });
    return book;
  }
  //

  async create(book: Book): Promise<Book> {
    const newBook = this.bookModel.create(book);
    return newBook;
  }

  async update(id: string, book: Book): Promise<Book> {
    const updatedBook = await this.bookModel.findByIdAndUpdate(id, book, {
      new: true,
    });

    if (updatedBook === null) {
      return {} as Book;
    }

    return updatedBook;
  }

  async updateReview(bookId: string, review_Id: string): Promise<Book> {
    const updatedBook = await this.bookModel.findByIdAndUpdate(
      bookId,
      { $set: { reviewId: review_Id } },
      { new: true }
    );

    if (updatedBook === null) {
      return {} as Book;
    }

    return updatedBook;
  }

  async updateAuthor(bookId: string, name: string): Promise<Book> {
    const updatedBook = await this.bookModel.findByIdAndUpdate(
      bookId,
      { $set: { author: name } },
      { new: true }
    );

    if (updatedBook === null) {
      return {} as Book;
    }

    return updatedBook;
  }

  async updateStatus(bookId: string, name: boolean): Promise<Book> {
    const updatedBook = await this.bookModel.findByIdAndUpdate(
      bookId,
      { $set: { status: name } },
      { new: true }
    );

    if (updatedBook === null) {
      return {} as Book;
    }

    return updatedBook;
  }
}

const bookRepository = new BookRepository(BookModel);
