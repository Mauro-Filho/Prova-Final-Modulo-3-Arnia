import { fakeBooksData, updatedBook, fakeId } from "../__mocks__/fake.book.data";
import { fakeBooksRepository } from "../__mocks__/fake.book.repository";
import { BookService } from "./book.service";
import { jest, describe, it, expect } from "@jest/globals";
import { invalidIdError } from "../../utils/error.handler";

const bookService = new BookService(fakeBooksRepository);

describe("BookService", () => {
  describe("getAll", () => {
    it("should call Repository.getAll", async () => {
      //criamos um spy que observa o fakePetRepository
      const spy = jest.spyOn(fakeBooksRepository, "getAll");

      //chamamos o método getAll do service
      await bookService.getAll();

      //verificamos se o método foi chamado
      expect(spy).toHaveBeenCalled();
    });
    it("should return a list of books", async () => {
      const book = await bookService.getAll();
      expect(book).toEqual(fakeBooksData);
    });
    it("should return an promiseError", async () => {
    
      jest.spyOn(fakeBooksRepository, "getAll").mockRejectedValueOnce("Error");

      
      const error = await bookService.getAll();

     
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "Error",
        },
      });
    });
  });

  describe("getById", () => {
    it("should call BookRepository.getById", async () => {
      const spy = jest.spyOn(fakeBooksRepository, "getById");
      await bookService.getById(fakeId);
      expect(spy).toHaveBeenCalled();
    });
    it("should return a book", async () => {
      const book = await bookService.getById(fakeId);
      expect(book).toEqual(fakeBooksData[0]);
    });
    it("should return an promiseError", async () => {
      jest.spyOn(fakeBooksRepository, "getById").mockRejectedValueOnce("Error");
      const error = await bookService.getById(fakeId);
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "Error",
        },
      });
    });
    it("should return a invalidIdError", async () => {
      const error = await bookService.getById("invalidId");
      expect(error).toEqual(invalidIdError("invalidId"));
    });
  });

  describe("create", () => {
    it("should call Repository.create", async () => {
      const spy = jest.spyOn(fakeBooksRepository, "create");
      await bookService.create(fakeBooksData[0]);
      expect(spy).toHaveBeenCalled();
    });
    it("should return a pet", async () => {
      const book = await bookService.create(fakeBooksData[1]);
      expect(book).toEqual(fakeBooksData[1]);
    });
    it("should return an promiseError", async () => {
      jest.spyOn(fakeBooksRepository, "create").mockRejectedValueOnce("Error");
      const error = await bookService.create(fakeBooksData[1]);
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "Error",
        },
      });
    });
  });

  describe("update", () => {
    it("should call BookRepository.update", async () => {
      const spy = jest.spyOn(fakeBooksRepository, "update");
      await bookService.update(fakeId, updatedBook);
      expect(spy).toHaveBeenCalled();
    });
    it("should return a book", async () => {
      const book = await bookService.update(fakeId, updatedBook);
      expect(book).toEqual(updatedBook);
    });
    it("should return an promiseError", async () => {
      jest.spyOn(fakeBooksRepository, "update").mockRejectedValueOnce("Error");
      const error = await bookService.update(fakeId, updatedBook);
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "Error",
        },
      });
    });

    it("should return a invalidIdError", async () => {
      const error = await bookService.update("invalidId", updatedBook);
      expect(error).toEqual(invalidIdError("invalidId"));
    });
  });
});
