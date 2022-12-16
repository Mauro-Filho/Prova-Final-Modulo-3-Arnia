import { describe, it, expect } from "@jest/globals";
import { invalidBody } from "./review.body.validator";
import { Record } from "globals";

const validateTestObj = {
   
        body: {
        // title: "A garota sexy",
        // score: 3,
        descrip: ["oi", "ola"]
    },
} as unknown as  Record

const invalidateTestObj = {
    body: {
        title: "nemo um peixe",
        releaseDateOf: "0a",
        languages: "12312312",
        status: true,
         chart: "21-10-2222",
        cars: "111"
    }, 
} as unknown as Record

describe("invalidBody", () => {
    it("should return true if body is invalid", () => {
        const isValidBody = invalidBody(invalidateTestObj)
        expect(isValidBody ).toEqual(true)
    })

    it("should return false if body is valid", () => {
        const isValidBody = invalidBody(validateTestObj)
        expect(isValidBody).toEqual(false)
    }) 
})
