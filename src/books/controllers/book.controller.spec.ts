import { describe, it, expect, jest } from "@jest/globals"
import { mockResponse, mockRequest } from "../__mocks__/fake.book.routes";
import { fakeBooksService } from "../__mocks__/fake.book.service";
import { BookController } from "./book.controller";
import { fakeId, fakeBooksData } from "../__mocks__/fake.book.data";
import { StatusCode } from "../../utils/status.code";
import { invalidIdError, promiseError } from "../../utils/error.handler";

const bookController = new BookController(fakeBooksService);
const req = mockRequest();
const res = mockResponse();

describe("BookController", () => {
  describe("getAll", () => {
    it("should return all books", async () => {
      await bookController.getAll(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeBooksData);
    });
    it("should return status code 200", async () => {
      await bookController.getAll(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });
    it("should return a promiseError", async () => {
      jest
        .spyOn(fakeBooksService, "getAll")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await bookController.getAll(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
  });

  describe("getById", () => {
    it("should return a book", async () => {
      req.params.id = fakeId;
      await bookController.getById(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeBooksData[0]);
    });
    it("should return status code 200", async () => {
      req.params.id = fakeId;
      await bookController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });
    it("should return a promiseError", async () => {
      req.params.id = fakeId;
      jest
        .spyOn(fakeBooksService, "getById")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await bookController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
    it("should return a invalidIdError", async () => {
      jest
        .spyOn(fakeBooksService, "getById")
        .mockImplementation(() => Promise.resolve(invalidIdError("id")));
      await bookController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
    });
  });

  describe("create", () => {
    it("should create a book", async () => {
      req.body = fakeBooksData[0];
      await bookController.create(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeBooksData[0]);
    });
    it("should return status code 201", async () => {
      req.body = fakeBooksData[0];
      await bookController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.CREATED);
    });
    it("should return a promiseError", async () => {
      req.body = fakeBooksData[0];
      jest
        .spyOn(fakeBooksService, "create")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await bookController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
  });

  describe("update", () => {
    it("should update a book", async () => {
      req.params.id = fakeId;
      req.body = fakeBooksData[1];
      await bookController.update(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeBooksData[1]);
    });
    it("should return status code 200", async () => {
      req.params.id = fakeId;
      req.body = fakeBooksData[1];
      await bookController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });
    it("should return a promiseError", async () => {
      req.params.id = fakeId;
      req.body = fakeBooksData[1];
      jest
        .spyOn(fakeBooksService, "update")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await bookController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
    it("should return a invalidIdError", async () => {
      req.params.id = fakeId;
      req.body = fakeBooksData[1];
      jest
        .spyOn(fakeBooksService, "update")
        .mockImplementation(() => Promise.resolve(invalidIdError("id")));

      await bookController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
    });
  });
});
