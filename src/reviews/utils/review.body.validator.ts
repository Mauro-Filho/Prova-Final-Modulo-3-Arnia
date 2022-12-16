import { Request } from "express";

export function invalidBody(req: Request) {
    const review = {
    
        descrip: req.body.descrip,
         score: req.body.score
    }

    const jsonBook = JSON.stringify(review)
    const jsonBody = JSON.stringify(req.body)

    if (jsonBook !== jsonBody) {
        return true;
    }

    return false;
}