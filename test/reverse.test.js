const { reverse } = require("../src/arrays");

const ODD_ARRAY = ["a", "b", "c"];
const EVEN_ARRAY = ["a", "b", "c", "d"];
const SINGLE_ELEMENT_ARRAY = ["zz"];

describe("reverse.tests", () => {
    it("Will reverse an odd length array", () => {
        const arr = ODD_ARRAY;

        // make sure the array is reversed
        expect(reverse(arr)).toEqual(["c", "b", "a"]);
        // make sure the original array is un-modified
        expect(arr).toEqual(ODD_ARRAY);
    });

    it("Will reverse an even length array", () => {
        const arr = EVEN_ARRAY;

        // make sure the array is reversed
        expect(reverse(arr)).toEqual(["d", "c", "b", "a"]);
        // make sure the original array is un-modified
        expect(arr).toEqual(EVEN_ARRAY);
    });

    it("Will do nothing with a single element array", () => {
        const arr = SINGLE_ELEMENT_ARRAY;

        // make sure the array stays the same
        expect(reverse(arr)).toEqual(arr);
        // make sure the original array is un-modifed
        expect(arr).toEqual(SINGLE_ELEMENT_ARRAY);
    });

    it("Will do nothing with an empty array", () => {
        expect(reverse([])).toEqual([]);
    });

    it("Will throw an error with an undefined array", () => {
        let error = undefined;

        try {
            reverse(undefined);
        } catch (err) {
            error = err;
        }

        expect(error).toBeTruthy();
    });

    it("Will throw an error with an null array", () => {
        let error = undefined;

        try {
            reverse(null);
        } catch (err) {
            error = err;
        }

        expect(error).toBeTruthy();
    });
});