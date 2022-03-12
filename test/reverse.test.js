const { reverse } = require("../src/arrays");

describe("reverse.tests", () => {
    it("Will reverse an odd length array", () => {
        const arr = ["a", "b", "c"];
        expect(reverse(arr)).toEqual(["c", "b", "a"]);
    });

    it("Will reverse an even length array", () => {
        const arr = ["a", "b", "c", "d"];
        expect(reverse(arr)).toEqual(["d", "c", "b", "a"]);
    });

    it("Will do nothing with a single element array", () => {
        const arr = ["a"];
        expect(reverse(arr)).toEqual(["a"]);
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
});