const { filter } = require("../src/arrays");

const NULL_FILTER_ARRAY =  ["a", undefined, "b", null, "c"];
const CHECK_FUNCTION_ARRAY = [{ name: "a", keep: true }, { name: "b", keep: true }, { name: "c", keep: false }];

describe("filter.tests", () => {
    it("Filters out null and undefined values by default", () => {
        const arr = NULL_FILTER_ARRAY;

        // check the new array has filtered out the proper values
        expect(filter(arr)).toEqual(["a","b","c"]);
        // make sure the supplied array is not modified
        expect(arr).toEqual(NULL_FILTER_ARRAY);
    });

    it("Does not change the array if everything passes the check", () => {
        const arr = ["a", "b", "c"];
        // NOTE: The default check for the filter only filters out null or undefined
        expect(filter(arr)).toEqual(arr);
    });

    it("Filters items if a check function is suppled", () => {
        const arr = CHECK_FUNCTION_ARRAY;
        const hasKeep = (arg) => arg.keep;

        // make sure it filters out values where keep is false
        expect(filter(arr, hasKeep)).toEqual([{ name: "a", keep: true }, { name: "b", keep: true }]);
        // make sure the supplied array is not modified
        expect(arr).toEqual(CHECK_FUNCTION_ARRAY);
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

    it("Throws an error if null is supplied for the array argument", () => {
        let error = undefined;

        try {
            filter(null);
        } catch (err) {
            error = err;
        }

        expect(error).toBeTruth();
    });
});