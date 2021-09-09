// the 1st task

const filterUnique = (numArray) =>
    numArray.filter((number, i, arr) => arr.indexOf(number) === i);
console.log(filterUnique([1, 2, 2, 2, 3, 4, 5, 5, 7]));
console.log(filterUnique([1, 1, 2]));



// the 2nd task
const cubizer = (numberArray) =>
    numberArray.map((number) => number = Math.pow(number, 3));
console.log(cubizer([1, 2, 3]));
console.log(cubizer([1, 1, 2]));


// the 3rd task
const filterLongStrings = (longStrings, longStringsLength) =>
    longStrings.filter((stringValue) => stringValue.length <= longStringsLength);
console.log(filterLongStrings(['a', 'b', 'sqw'], 1))
console.log(filterLongStrings(['Hello', 'World', 'Hello World'], 6))

// the 4th task

const filterOnlyNumbers = (arr) => {
    return arr.filter((value) => { return typeof value === 'number'; });
}

console.log(filterOnlyNumbers(['a', 1, 'b', 2, 'sqw', [1, 2, 3]]));
console.log(filterOnlyNumbers(['Hello', 'World', 'Hello World']));

// the 5th task
const findMaxNumber = (arr) => {
    return arr.reduce((maxValue, value) => {

        if (maxValue > value) {
            return maxValue
        }
        return value;

    })
}

console.log(findMaxNumber([1, 3, 5, 2]));
console.log(findMaxNumber([3, 4, 5, 12, 10, 25]));