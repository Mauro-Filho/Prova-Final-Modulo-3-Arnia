import { ReviewService } from "../services/review.service";
import { StatusCode } from "../../utils/status.code";
import { Request, Response } from "express";
import { invalidBody } from "../utils/review.body.validator";
import { invalidBodyError } from "../../utils/error.handler";

export class ReviewController {
  constructor(private readonly bookService: ReviewService) {}

  async getAll(req: Request, res: Response) {
    const result = await this.bookService.getAll();

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

  async create(req: Request, res: Response) {
    if (invalidBody(req)) {
      return res.status(StatusCode.BAD_REQUEST).json(invalidBodyError(req.body));
    }
    const { body, params } = req;

    const result = await this.bookService.create(body, params.bookId);

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
}
