import { Request } from "express";

export function invalidBody(req: Request) {
  const review = {
    title: req.body.title,
    description: req.body.description,
    score: req.body.score,
  };

  const jsonBook = JSON.stringify(review);
  const jsonBody = JSON.stringify(req.body);

  if (jsonBook !== jsonBody) {
    return true;
  }

  return false;
}
