import { describe, it, expect } from "@jest/globals";
import { invalidBody } from "./book.body.validator";
import { Record } from "globals";

const validateTestObj = {
  body: {
    title: "A garota sexy",
    releaseDateOf: "2001",
    languages: "12312312",
    status: true,
    author: "tonico",
  },
} as unknown as Record;

const invalidateTestObj = {
  body: {
    title: "nemo um peixe",
    releaseDateOf: "0a",
    language: "12312312",
    status: true,
    chart: "21-10-2222",
  },
} as unknown as Record;

describe("invalidBody", () => {
  it("should return true if body is invalid", () => {
    const isValidBody = invalidBody(invalidateTestObj);
    expect(isValidBody).toEqual(true);
  });

  it("should return false if body is valid", () => {
    const isValidBody = invalidBody(validateTestObj);
    expect(isValidBody).toEqual(false);
  });
});
