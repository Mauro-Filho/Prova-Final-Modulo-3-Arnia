import {
  fakeReviewData,
  updatedReview,
  fakeId,
} from "../__mocks__/fake.review.data";
import { fakeReviewModel } from "../__mocks__/fake.review.model";
import { ReviewRepository } from "./review.repository";
import { jest } from "@jest/globals";

const bookRepository = new ReviewRepository(fakeReviewModel);

describe("BookRepository", () => {
  describe("getAll", () => {
    it("should return a list of books", async () => {
      const books = await bookRepository.getAll();
      expect(books).toEqual(fakeReviewData);
    });
    it("should return an empty array", async () => {
      jest.spyOn(fakeReviewModel, "find").mockResolvedValueOnce([]);

      const books = await bookRepository.getAll();
      expect(books).toEqual([]);
    });
  });
  describe("getById", () => {
    it("should return a book", async () => {
      const book = await bookRepository.getById(fakeId);
      expect(book).toEqual(fakeReviewData[0]);
    });
    it("should return an empty object", async () => {
      jest.spyOn(fakeReviewModel, "findById").mockResolvedValueOnce(null);

      const book = await bookRepository.getById(fakeId);
      expect(book).toEqual({});
    });
  });
  describe("create", () => {
    it("should create a book", async () => {
      const newBook = await bookRepository.create(fakeReviewData[0]);
      expect(newBook).toEqual(fakeReviewData[0]);
    });
  });
});
