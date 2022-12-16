import { describe, it, expect } from "@jest/globals";
import { invalidBody } from "./book.body.validator";
import { Record } from "globals";

const validateTestObj = {
    body: {
        // title: "A garota sexy",
        // releaseDateOf: "0a",
        // languages: "12312312",
        // status: true,
        // author: "tonico",
        languages: "oi",
    status: true,
    // author: req.body.author,
    review_Id: "639b46e02363fb1962af9617"
        
    },
} as unknown as  Record

const invalidateTestObj = {
    body: {
        title: "nemo um peixe",
        releaseDateOf: "0a",
        language: "12312312",
        status: true,
         chart: "21-10-2222",
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
