import { ReviewModel } from "../reviews/models/review.model";
import { fakeReviewData } from "../reviews/__mocks__/fake.review.data";
import { mongoConnect, mongoDisconnect } from "../db/mongo.connection";

mongoConnect();

export async function bookSeeding() {
  // for (const book of fakeBooksData) {
  //   const bookCreate = new BookModel(book);
  await ReviewModel.insertMany(fakeReviewData);

  // try {
  // } catch (error) {
  //   console.log(`failed to seed user ${BookModel}`);
  //   console.log(error, 'fail seeding');
  // }
  // }
  console.log("DB successfully seeded");

  mongoDisconnect();
}
bookSeeding();
// mongoDisconnect();

// export async function bookSeeding() {
//   await BookModel.insertMany(fakeBooksData);
//   for (const book of fakeBooksData) {
//     const bookCreate = new BookModel(book);
//     try {
//       await bookCreate.save();
//     } catch (error) {
//       console.log(`failed to seed user ${book.author}`);
//       console.log(error);
//     }
//   }
// }
// bookSeeding()
// mongoDisconnect();
// export async function bookSeeding() {
//   await BookModel.insertMany(fakeBooksData);
//   for (const book of fakeBooksData) {
//     const bookCreate = new BookModel(book);
//     try {
//       await bookCreate.save();
//     } catch (error) {
//       console.log(`failed to seed user ${book.author}`);
//       console.log(error);
//     }
//   }
