import { BookService } from "../services/book.service";
import { StatusCode } from "../../utils/status.code";
import { query, Request, Response } from "express";
import { invalidBody } from "../utils/book.body.validator";
import { invalidBodyError, promiseError } from "../../utils/error.handler";

export class BookController {
  constructor(private readonly bookService: BookService) {}

  async getAll(req: Request, res: Response) {
    const { author } = req.query;
    if (author) {
      const result = await this.bookService.getByAuthor(author as string);
      return res.status(StatusCode.OK).json(result);
    }
    const result = await this.bookService.getAll(req.body.status);

    //existe pets.promiseError??
    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    return res.status(StatusCode.OK).json(result);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    const result = await this.bookService.getById(id);

    if ("invalidIdError" in result) {
      return res.status(StatusCode.BAD_REQUEST).json(result);
    }

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    return res.status(StatusCode.OK).json(result);
  }

  async getByAuthor(req: Request, res: Response) {
    const { author } = req.query;
    if (!author) {
      return res
        .status(StatusCode.BAD_REQUEST)
        .json(promiseError("Not insert Author"));
    }
    const result = await this.bookService.getByAuthor(author as string);

    if ("invalidIdError" in result) {
      return res.status(StatusCode.BAD_REQUEST).json(result);
    }

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    return res.status(StatusCode.OK).json(result);
  }

  async create(req: Request, res: Response) {
    if (invalidBody(req)) {
      return res
        .status(StatusCode.BAD_REQUEST)
        .json(invalidBodyError(req.body));
    }
    const { body } = req;

    const result = await this.bookService.create(body);

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    return res.status(StatusCode.CREATED).json(result);
  }

  async update(req: Request, res: Response) {
    if (invalidBody(req)) {
      res.status(StatusCode.BAD_REQUEST).json(invalidBodyError(req.body));
      return;
    }

    const { id } = req.params;
    const { body } = req;

    const result = await this.bookService.update(id, body);

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    if ("invalidIdError" in result) {
      return res.status(StatusCode.BAD_REQUEST).json(result);
    }

    return res.status(StatusCode.OK).json(result);
  }

  async updateAuthor(req: Request, res: Response) {
    const { params, body } = req;

    const result = await this.bookService.updateAuthor(params.id, body.author);

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    return res.status(StatusCode.CREATED).json(result);
  }

  async updateStatus(req: Request, res: Response) {
    const { params, body } = req;

    const result = await this.bookService.updateStatus(params.id, body.status);

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    return res.status(StatusCode.CREATED).json(result);
  }
}
