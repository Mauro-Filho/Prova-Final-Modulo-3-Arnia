import { BookModel } from "../books/models/book.model";
import { fakeBooksData } from "../books/__mocks__/fake.book.data";
import { mongoConnect, mongoDisconnect } from "../db/mongo.connection";

mongoConnect();

export async function bookSeeding() {
  try {
    await BookModel.insertMany(fakeBooksData);
  } catch (error) {
    console.log(`failed to seed user ${BookModel}`);
    console.log(error, "fail seeding");
  }

  console.log("DB successfully seeded");

  mongoDisconnect();
}
bookSeeding();
