const { sort } = require("../src/arrays");

describe("sort.tests", () => {
    it("Will sort an array", () => {
        const arr = ["c", "a", "b"];
        expect(sort(arr)).toEqual(["a", "b", "c"]);
    });

    it("Won't change a sorted array", () => {
        const arr = ["a", "b", "c"];
        expect(sort(arr)).toEqual(["a", "b", "c"]);
    });

    it("Won't change a single element array", () => {
        const arr = ["z"];
        expect(sort(arr)).toEqual(["z"]);
    });

    it("Won't change an empty array", () => {
        expect(sort([])).toEqual([]);
    });

    it("Will sort using a comstom comparitor", () => {
        const compare = (a, b) => {
            if (a.value === b.value) {
                return 0;
            } else if (a.value > b.value) {
                return 1;
            } else {
                return -1;
            }
        }

        const arr = [{ name: "a", value: 1 }, { name: "b", value: 2 }, { name: "c", value: 3 }, { name: "!a", value: 0 }];
        expect(sort(arr, compare)).toEqual([
            { name: "!a", value: 0 }, { name: "a", value: 1 }, { name: "b", value: 2 }, { name: "c", value: 3 }
        ]);
    });

    it("Will throw an error with an undefined array", () => {
        const error = undefined;

        try {
            sort(undefined);
        } catch (err) {
            error = err;
        }

        expect(error).toBeTruthy();
    });
});