/**
 * Default equality check function used by the find function. This is 
 * meant to be used on pimitive types only; number, string, boolean. 
 * 
 * Note: Object types probably won't work.
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns True if the supplied values are equal
 */
const areEqualCheck = (a, b) => a === b;

/**
 * Default filter check returns true for anything that is not undefined or null.
 * 
 * @param {*} a 
 * @returns 
 */
const defaultFilterCheck = (a) => a !== undefined && a !== null;

/**
 * Default compare operation for the sort fucntion. Works with primitive types, object types are not
 * supported and may not work as expected.
 * 
 * If a is equal to b returns 0;
 * If a is greater than b returns 1;
 * otherwise return -1;
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
const defaultComparitor = (a, b) => a === b ? 0 : a > b ? 1 : -1;

/**
 * Reverse the supplied array and return it without modifying the orignal array.
 * 
 * Note: Should throw an error if array is undefined or null
 * 
 * @param {*} array The array to reverse.
 * @returns 
 */
const reverse = (array) => {
    // TODO: reverse this array
    return undefined;
}

/**
 * Find the index of the specified value in the array using the supplied equality check
 * function. Retrun the index of the first value that is equal. If no value is found that
 * is equal, return -1;
 * 
 * Note: Should throw an error if array is undefined or null
 * 
 * @param {*} array The array to search
 * @param {*} value The value to check for
 * @param {*} equalityCheck Options function for comparing two array elements and determining if they are equal
 * @returns 
 */
const find = (array, value, equalityCheck = areEqualCheck) => {
    // TODO: find the first index of the specified value or -1 if not found.
    return undefined;
}

/**
 * Filter the array using the specified filterCheck function, so that any time the check function
 * returns true, it should be added to the results of the filter. Does not modify the supplied array
 * but returns a new array with the filtered results.
 * 
 * Note: Should throw an error if array is undefined or null
 * 
 * @param {*} array The array to filter
 * @param {*} filterCheck A function that should be called on each element in the array to determine if it 
 * should be kept or filtered. If this function returns true on an item it is kept, if it returns false, it
 * is filtered. By default this will filter all null or undefined values.
 * @returns 
 */
const filter = (array, filterCheck = defaultFilterCheck) => {
    return undefined;
}

/**
 * Sort the specified array using the suppliec comparitor. Does not modify the original array.
 * 
 * Note: Should throw an error if array is undefined or null
 * 
 * @param {*} array The array to sort
 * @param {*} comparitor A function that compares two values. Returns 0 if the values are the same, returns 1 if the 
 * first value is greater than the second value, and returns -1 if the first value is less than the second value.
 * @returns 
 */
const sort = (array, comparitor = defaultComparitor) => {
    return undefined;
}

module.exports = {
    filter,
    find,
    reverse,
    sort,
};