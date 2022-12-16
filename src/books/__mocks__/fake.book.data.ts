import { Types } from "mongoose";
import { Book } from "../models/book.model";

export const fakeId = "632130d41623c49bf7b1c7e9";

export const fakeBooksData: Book[] = [
    {
    title: "As Cronicas de Narnia",
    releaseDateOf: "2001",
    languages:  ["portugues"],
    status: true,
    author: "Jorge Amado1",
    review_Id:  new Types.ObjectId("632130d41623c49bf7b1c7e9")
  },
{
  title: "As Cronicas de Joaquim",
  releaseDateOf: "2001",
  languages:  ["portugues"],
  status: true,
  author: "Jorge Amado",
  review_Id:  new Types.ObjectId("632130d41623c49bf7b1c7e9")

},
{
  title: "As Cronicas do  Sapo",
  releaseDateOf: "2010",
  languages:  ["portugues"],
  status: true,
  author: "Careca",
  review_Id:  new Types.ObjectId("632130d41623c49bf7b1c7e9")
},
{
  title: "As Cronicas de Madeira",
  releaseDateOf: "2011",
  languages:  ["portugues", "espanhol", "italiano"],
  status: true,
  author: "Pepe o pequenino",
  review_Id:  new Types.ObjectId("632130d41623c49bf7b1c7e9")
}];

export const updatedBook: Book = {
  title: "O cachorro caramelo",
  releaseDateOf: "1970",
  languages:  ["portugues"],
  status: true,
  author: "Um Brasileiro",
  review_Id:  new Types.ObjectId("632130d41623c49bf7b1c7e9")
};
