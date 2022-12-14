import { fakeReviewData, updatedReview, fakeId } from "../__mocks__/fake.review.data";
import { fakeReviewRepository } from "../__mocks__/fake.review.repository";
import { ReviewService } from "./review.service";
import { jest, describe, it, expect } from "@jest/globals";
import { invalidIdError } from "../../utils/error.handler";

const bookService = new ReviewService(fakeReviewRepository);

describe("BookService", () => {
  describe("getAll", () => {
    it("should call Repository.getAll", async () => {
      //criamos um spy que observa o fakePetRepository
      const spy = jest.spyOn(fakeReviewRepository, "getAll");

      //chamamos o método getAll do service
      await bookService.getAll();

      //verificamos se o método foi chamado
      expect(spy).toHaveBeenCalled();
    });
    it("should return a list of books", async () => {
      const book = await bookService.getAll();
      expect(book).toEqual(fakeReviewData);
    });
    it("should return an promiseError", async () => {
    
      jest.spyOn(fakeReviewRepository, "getAll").mockRejectedValueOnce("Error");

      
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
      const spy = jest.spyOn(fakeReviewRepository, "getById");
      await bookService.getById(fakeId);
      expect(spy).toHaveBeenCalled();
    });
    it("should return a book", async () => {
      const book = await bookService.getById(fakeId);
      expect(book).toEqual(fakeReviewData[0]);
    });
    it("should return an promiseError", async () => {
      jest.spyOn(fakeReviewRepository, "getById").mockRejectedValueOnce("Error");
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
      const spy = jest.spyOn(fakeReviewRepository, "create");
      await bookService.create(fakeReviewData[0]);
      expect(spy).toHaveBeenCalled();
    });
    it("should return a pet", async () => {
      const book = await bookService.create(fakeReviewData[0]);
      expect(book).toEqual(fakeReviewData[0]);
    });
    it("should return an promiseError", async () => {
      jest.spyOn(fakeReviewRepository, "create").mockRejectedValueOnce("Error");
      const error = await bookService.create(fakeReviewData[1]);
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
      const spy = jest.spyOn(fakeReviewRepository, "update");
      await bookService.update(fakeId, updatedReview);
      expect(spy).toHaveBeenCalled();
    });
    it("should return a book", async () => {
      const book = await bookService.update(fakeId, updatedReview);
      expect(book).toEqual(updatedReview);
    });
    it("should return an promiseError", async () => {
      jest.spyOn(fakeReviewRepository, "update").mockRejectedValueOnce("Error");
      const error = await bookService.update(fakeId, updatedReview);
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "Error",
        },
      });
    });

    it("should return a invalidIdError", async () => {
      const error = await bookService.update("invalidId", updatedReview);
      expect(error).toEqual(invalidIdError("invalidId"));
    });
  });
});
