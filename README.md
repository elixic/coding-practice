# Code Tests

## To Run

* 1.) Install Node
* 2.) run "npm install" from the package root.
* 3.) run "npm test" from the package root.

## To Pass

Edit the code files in the src folder so that the functions work.

## Files

### arrays.js

A set of array functions. All functions shoule throw an error if undefined or null is supplied for the array argument.

* filter - This function should filter items in an array using the supplied filterCheck function. The filterCheck function accepts a single argument and returns true or false. A true response from the filterCheck function keeps the value being checked, a false response from the filterCheck function discards the value be checked.
* find - This function should return the first index of the specified value in the array, if it exists. An optional equalityCheck can be supplied that can be used for non-primitive values, or if the first element that matches some specific criteria is needed. The equlityCheck funtion takes two arguments and determines if they are equal. If the equalityCheck function returns true, the find function should return the index of that item.
* sort - This function will sort an array using the specified item comparitor. The comparitor function takes two arguments, and returns 0 if they are equal, 1 if the first argument is greater than the second argument, and -1 otherwise. This should be used to determine if any sort operation is needed for the two values.
* reverse - This funtion will reverse the supplied array.

