import { Review } from "../models/review.model";

export const fakeId = "632130d41623c49bf7b1c7e9"

export const fakeReviewData: Review[] = [
    {
        title: "o gato de botas ",
        score: 4,
        descrip: ["oi", "ouy"]
    },
    {
        title: "Carlinha a feiticeira",
        score: 2,
        descrip: ["oi", "ouy"]

    },
    {
        title: "o cangaceiro perigoso",
        score: 3,
        descrip: ["oi", "ouy"]

    },
]

export const updatedReview: Review = {
    title: "um dia vai",
    score: 1,
    descrip: ["oi", "ouy"]

}