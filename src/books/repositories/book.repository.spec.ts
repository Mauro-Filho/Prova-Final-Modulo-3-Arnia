import {
  fakeBooksData,
  updatedBook,
  fakeId,
} from "../__mocks__/fake.book.data";
import { fakeBookModel } from "../__mocks__/fake.book.model";
import { BookRepository } from "./book.repository";
import { jest } from "@jest/globals";

const bookRepository = new BookRepository(fakeBookModel);

describe("BookRepository", () => {
  describe("getById", () => {
    it("should return a book", async () => {
      jest.spyOn(fakeBookModel, "findById").mockImplementationOnce(
        () =>
          ({
            populate: jest.fn().mockImplementationOnce(() => fakeBooksData[0]),
          } as any)
      );
      const book = await bookRepository.getById(fakeId);
      console.log(
        book,
        fakeBooksData[0],
        JSON.stringify(book) === JSON.stringify(fakeBooksData[0])
      );
      expect(book).toEqual(fakeBooksData[0]);
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
      jest
        .spyOn(fakeBookModel, "findByIdAndUpdate")
        .mockResolvedValueOnce(null);

      const book = await bookRepository.update(fakeId, fakeBooksData[0]);
      expect(book).toEqual({});
    });
  });
});
