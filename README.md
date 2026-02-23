# dsa-javascript

##### Few things which is needed frequently to solve the questions
1. ASCII related calculations

```
const char = 'A';
const asciiValue = char.charCodeAt(0); // asciiValue will be 65
```

```
const code = 65;
const char = String.fromCharCode(code); // char will be 'A'
```

```
const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
// alphabet will be ['A', 'B', 'C', ..., 'Z']
```

```
const allAscii = Array.from({ length: 128 }, (_, i) => String.fromCharCode(i));
// allAscii will contain characters from ASCII 0 (null) to 127 (delete)
```

Solutions trick sometimes - character indexes

2. JavaScript Native Sorting - Uses a combination of quick sort and merge sort - so complexity is O(n.logn)

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
// Result: [1, 5, 10, 25, 40, 100]

points.sort((a, b) => b - a);
// Result: [100, 40, 25, 10, 5, 1]

const mixedArr = [1, 'ss', 11, 2, 'aa'];

function sortMixedArray(arr) {
  const numArr = arr.filter(el => typeof el === "number").sort((a, b) => a - b);
  const strArr = arr.filter(el => typeof el === "string").sort((a, b) => a.localeCompare(b));
  return numArr.concat(strArr);
}

const sortedMixed = sortMixedArray(mixedArr);
// Result: [1, 2, 11, 'aa', 'ss']

const mixedStrings = ["a100", "a20", "a3"];
mixedStrings.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
// Result: ["a3", "a20", "a100"]

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
// Result: ["Apple", "Banana", "Mango", "Orange"]

3. Creating an initally filled array.

Using Array() Constructor and fill()
    This method is ideal for creating an array of a specific size where all elements should have the same static value (e.g., numbers, strings, or booleans). 
    javascript
    // Creates an array of length 5, with each element set to 0
    const zeros = Array(5).fill(0); 
    // Result: [0, 0, 0, 0, 0]

    // Creates an array of length 3, with each element set to "default"
    const defaultUsers = new Array(3).fill("default");
    // Result: ["default", "default", "default"]
    Caution with Objects: If the value is an object, every element in the array will reference the same object instance. Modifying one will affect all of them. 
Using Array.from()
    This is a flexible method to create a new array from an array-like or iterable object, and it can use a mapping function to generate values. This is the best approach for creating arrays with unique object instances or generated sequences. 
    javascript
    // Creates an array of length 3, with each element being a new, unique object instance
    const uniqueObjects = Array.from({ length: 3 }, () => ({ score: 0 }));
    // Result: [{ score: 0 }, { score: 0 }, { score: 0 }] 
    // Modifying one object will not affect others.

    // Creates an array with a sequence of numbers from 0 to 4
    const sequence = Array.from({ length: 5 }, (_, index) => index);
    // Result: [0, 1, 2, 3, 4]
    Pros: Allows dynamic value generation and creates unique instances of non-primitive values (like objects).
    Cons: Slightly more verbose than fill(). 

4. Map & Set

5. WeakMap & WeakSet