# js-helpers

Helper functions for javascript/Node.js — helps with strings, objects, arrays... .

## String

### `ucfirst`(string)

@return: string

Capitalize first letter of the string.

### `lcfirst`(string)

@return: string

Lowercase first letter of the string.

### `removeExtraSpaces`(string)

@return: string

Removes whitespace from both sides of a string (like `trim()`).

Transforms all **double** spaces into one space.

### `mapValue`(value, inMin, inMax, outMin, outMax)

@return: integer

Transforms value between input and output -> min and max values.

Example:
We want to have the output value between 1 to 10. But the input can be 1 to 1000.
inputValue = 100
outputValue = 10
