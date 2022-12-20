import { ReviewModel } from "../reviews/models/review.model";
import { fakeReviewData } from "../reviews/__mocks__/fake.review.data";
import { mongoConnect, mongoDisconnect } from "../db/mongo.connection";
import { BookModel } from "../books/models/book.model";

mongoConnect();

export async function bookSeeding() {

  try {
    await ReviewModel.insertMany(fakeReviewData);
    
  } catch (error) {
    console.log(`failed to seed user ${BookModel}`);
    console.log(error, 'fail seeding');
  }
  
  console.log("DB successfully seeded");

  mongoDisconnect();
}
bookSeeding();
