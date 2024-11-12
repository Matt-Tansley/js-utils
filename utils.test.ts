import { describe, it, expect, expectTypeOf } from "vitest"
import * as utils from "./utils"

// Helper function to check if a date is valid
function isValidDate(date) {
    return date instanceof Date && !isNaN(date.getTime())
}

describe('formateDateForHTMLInput', () => {
    it('should take a date and return a string', () => {
        const date = new Date()
        const formattedDate = utils.formatDateForHTMLInput(date)
        expect(formattedDate).toBeTypeOf('string')
    })

    it('should return a valid date when given a date from "new Date()"', () => {
        const date = new Date()
        const formattedDate = utils.formatDateForHTMLInput(date)
        expect(isValidDate(new Date(formattedDate))).toBe(true)
    })

    it('should return a valid date when given a date constructed from a string', () => {
        const date = new Date('2000-01-01')
        const formattedDate = utils.formatDateForHTMLInput(date)
        expect(isValidDate(new Date(formattedDate))).toBe(true)
    })

    it('should return the same string when a yyyy-mm-dd string is used to construct a date', () => {
        const dateString = '2000-01-01'
        const date = new Date(dateString)
        const formattedDate = utils.formatDateForHTMLInput(date)
        expect(formattedDate).toEqual(dateString)
    })
})