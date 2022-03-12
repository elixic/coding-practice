const { filter } = require("../src/arrays");

describe("filter.tests", () => {
    it("Filters out null and undefined values by default", () => {
        const arr = ["a", undefined, "b", null, "c"];
        expect(filter(arr)).toEqual(["a","b","c"]);
    });

    it("Does not change the array if everything passes the check", () => {
        const arr = ["a", "b", "c"];
        // NOTE: The default check for the filter only filters out null or undefined
        expect(filter(arr)).toEqual(arr);
    });

    it("Filters items if a check function is suppled", () => {
        const arr = [{ name: "a", keep: true }, { name: "b", keep: true }, { name: "c", keep: false }];
        const hasKeep = (arg) => arg.keep;
        // filters out values where keep is false
        expect(filter(arr, hasKeep)).toEqual([{ name: "a", keep: true }, { name: "b", keep: true }]);
    });

    it("Returns an empty array if an empty array is supplied", () => {
        expect(filter([])).toEqual([]);
    });

    it("Throws an error if undefined is supplied for the array argument", () => {
        let error = undefined;

        try {
            filter(undefined);
        } catch (err) {
            error = err;
        }

        expect(error).toBeTruth();
    });
});