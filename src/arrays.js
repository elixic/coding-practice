/**
 * Default areEqual function for determining object equality, meant to be used on pimitive
 * types only. number, string, boolean. Object types probably won't work.
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
const areEqual = (a, b) => a === b;

/**
 * Default filter check returns true when an item is not undefined or null.
 * @param {*} a 
 * @returns 
 */
const defaultFilterCheck = (a) => a !== undefined && a !== null;

/**
 * Default compare operation for primitive types.
 * 
 * If a is equal to be returns 0;
 * If a is greater than b returns 1;
 * otherwise return -1;
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
const compare = (a, b) => a === b ? 0 : a > b ? 1 : -1;

/**
 * Reverse the supplied array and return it without modifying the orignally array.
 * 
 * @param {*} array 
 * @returns 
 */
const reverse = (array) => {
    // TODO: reverse this array
    return undefined;
}

/**
 * Find the index of the specified value in the array using the supplied check
 * function.
 * 
 * @param {*} array 
 * @param {*} value 
 * @param {*} check
 * @returns 
 */
const find = (array, value, check = areEqual) => {
    // TODO: find the first index of the specified value or -1 if not found.
    return undefined;
}

/**
 * Filter the array using the specified filter function, so that any time the check function
 * returns true, it should be added to the results of the filter.
 * 
 * @param {*} array 
 * @param {*} check 
 * @returns 
 */
const filter = (array, check = defaultFilterCheck) => {
    return undefined;
}

/**
 * Sort the specified array using the suppliec comparitor
 * 
 * @param {*} array 
 * @param {*} comparitor 
 * @returns 
 */
const sort = (array, comparitor = compare) => {
    return undefined;
}

module.exports = {
    filter,
    find,
    reverse,
    sort,
};