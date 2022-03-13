const { sort } = require("../src/arrays");

const UNSORTED_ARRAY = ["c", "a", "b"];
const SORTED_ARRAY = ["a", "b", "c"];
const CUSTOM_COMPARITOR_ARRAY = [
    { name: "a", value: 1 }, 
    { name: "b", value: 2 }, 
    { name: "c", value: 3 }, 
    { name: "!a", value: 0 }, // this should turn into the first element in the array
];

describe("sort.tests", () => {
    it("Will sort an array", () => {
        const arr = UNSORTED_ARRAY;

        // make sure the array sorted
        expect(sort(arr)).toEqual(["a", "b", "c"]);
        // make sure the original array is un-modified
        expect(arr).toEqual(UNSORTED_ARRAY);
    });

    it("Won't change a sorted array", () => {
        const arr = SORTED_ARRAY;

        // make sure the array stays the same
        expect(sort(arr)).toEqual(arr);
        // make sure the original array is unmodified
        expect(arr).toEqual(SORTED_ARRAY);
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

        const arr = CUSTOM_COMPARITOR_ARRAY;

        // make sure the array sorted properly
        expect(sort(arr, compare)).toEqual([
            { name: "!a", value: 0 }, { name: "a", value: 1 }, { name: "b", value: 2 }, { name: "c", value: 3 }
        ]);
        // make sure the original array was un-modified
        expect(arr).toEqual(CUSTOM_COMPARITOR_ARRAY);
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

    it("Will throw an error with an null array", () => {
        const error = undefined;

        try {
            sort(null);
        } catch (err) {
            error = err;
        }

        expect(error).toBeTruthy();
    });
});