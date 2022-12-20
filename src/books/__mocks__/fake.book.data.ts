import { Types } from "mongoose";
import { Book } from "../models/book.model";

export const fakeId = "639dfc0d78f364bd2fb5ed10";

export const fakeBooksData: Book[] = [
    {
    title: "As Cronicas de Narnia",
    releaseDateOf: "2001",
    languages:  ["portugues"],
    status: true,
    author: "Jorge Amado1",
    reviewId:  new Types.ObjectId("639dfc0d78f364bd2fb5ed10")
  },
{
  title: "As Cronicas de Joaquim",
  releaseDateOf: "2001",
  languages:  ["portugues"],
  status: true,
  author: "Jorge Amado",
  reviewId:  new Types.ObjectId("639dfc0d78f364bd2fb5ed11")

},
{
  title: "As Cronicas do  Sapo",
  releaseDateOf: "2010",
  languages:  ["portugues"],
  status: true,
  author: "Careca",
  reviewId:  new Types.ObjectId("639dfc0d78f364bd2fb5ed12")
},
{
  title: "As Cronicas de Madeira",
  releaseDateOf: "2011",
  languages:  ["portugues", "espanhol", "italiano"],
  status: true,
  author: "Pepe o pequenino",
  reviewId:  new Types.ObjectId("639dfc0d78f364bd2fb5ed12")
}];

export const updatedBook: Book = {
  title: "O cachorro caramelo",
  releaseDateOf: "1970",
  languages:  ["portugues"],
  status: true,
  author: "Um Brasileiro",
  reviewId:  new Types.ObjectId("632130d41623c49bf7b1c7e9")
};
