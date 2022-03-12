const { find } = require("../src/arrays");

describe("find.tests", () => {
    it("Returns the index of an item that has only one occurence in the supplied array", () => {
        const arr = ["a", "b", "c"];
        expect(find(arr, "b")).toEqual(1);
    });

    it("Returns the first index of an item that has multiple occurnces in the supplied array", () => {
        const arr = ["a","b","c","b"];
        expect(find(arr, "b")).toEqual(1);
    });

    it("Returns negative one for an item that is not found in the supplied array", () => {
        const arr = ["a","b","c","b"];
        expect(find(arr, "e")).toEqual(-1);   
    });

    it("Returns negative one for any item if the array is empty", () => {
        expect(find([], "a")).toEqual(-1);
    });

    it("Can be used with custom check function", () => {
        const areEqual = (a, b) => {
            a.name && b.name && a.value && b.value && a.name === b.name && a.value === b.value;
        }

        const arr = [{ name: "a", value: 1 }, { name: "b", value: 2 }, { name: "c", value: 3}];

        expect(find(arr, { name: "b", value: 2 }, areEqual)).toEqual(1);
    });

    it("Throws an error if the array is undefined", () => {
        let error = undefined;

        try {
            find(undefined, "a");
        } catch (err) {
            error = err;
        }

        expect(error).toBeTruthy();
    });
});