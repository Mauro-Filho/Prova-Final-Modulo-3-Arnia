import { fakeBooksData, updatedBook, fakeId } from "../__mocks__/fake.book.data";
import { fakeBookModel } from "../__mocks__/fake.book.model";
import { BookRepository } from "./book.repository";
import { jest } from "@jest/globals";

const bookRepository = new BookRepository(fakeBookModel);

describe("BookRepository", () => {
  describe("getAll", () => {
    it("should return a list of books", async () => {
      const books = await bookRepository.getAll();
      expect(books).toEqual(fakeBooksData);
    });
    it("should return an empty array", async () => {
      
      jest.spyOn(fakeBookModel, "find").mockResolvedValueOnce([]);

      const books = await bookRepository.getAll();
      expect(books).toEqual([]);
    });
  });
  describe("getById", () => {
    it("should return a book", async () => {
      const book = await bookRepository.getById(fakeId);
      expect(book).toEqual(fakeBooksData[0]);
    });
    it("should return an empty object", async () => {
      jest.spyOn(fakeBookModel, "findById").mockResolvedValueOnce(null);

      const book = await bookRepository.getById(fakeId);
      expect(book).toEqual({});
    });
  });
  describe("create", () => {
    it("should create a book", async () => {
      const newBook = await bookRepository.create(fakeBooksData[0]);
      expect(newBook).toEqual(fakeBooksData[0]);
    });
  });
  describe("update", () => {
    it("should update a book", async () => {
      const book = await bookRepository.update(fakeId, fakeBooksData[0]);
      expect(book).toEqual(updatedBook);
    });
    it("should return an empty object", async () => {
      jest.spyOn(fakeBookModel, "findByIdAndUpdate").mockResolvedValueOnce(null);

      const book = await bookRepository.update(fakeId, fakeBooksData[0]);
      expect(book).toEqual({});
    });
  });
});
