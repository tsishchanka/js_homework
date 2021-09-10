// 1st task. arrow function
const firstLetterUp = (name) => {

}

const sayHello = (name) => {

    if (typeof name !== "string") return 'Enter your name';
    const FAVORITE_NAME = 'mark';
    const isMark = name.toLowerCase() === FAVORITE_NAME;
    const specialWord = isMark ? "Hi" : "Hello";

    return `${specialWord }, ${name}!`;
};
console.log(sayHello('Oleg'));
console.log(sayHello('Viktor'));
console.log(sayHello('Mark'));




// 2nd task. arrow function
const calcHypotenuse = (n, m) => {
    if (typeof n !== 'number' || typeof m !== 'number')
        return 'Give me a number';
    const hypotenuse = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
    return (hypotenuse);
};
console.log(calcHypotenuse(3, 4));


// 3rd task. arrow function
const min = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number")
        return 'Enter a number';

    return Math.min(a, b);

}
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

// 4th task. arrow function

const isEven = (x) => {
    if (typeof x !== "number")
        return 'this is not a number'

    return (x % 2) === 0;

}
console.log(isEven(4));
console.log(isEven(5));

// 5th task. arrow function

const deleteChars = (str) => {
    if (typeof str !== "string")
        return 'this is not a string'

    const slicedStr = str.slice(1, -1);

    return slicedStr;
}
console.log(deleteChars('Hello'));
console.log(deleteChars('A'));

// 6th task. arrow function

const charCaseChanger = (value) => {
    if (typeof value !== 'string')
        return 'enter correct value';

    const firstLetter = value[0].toUpperCase();
    const wordRest = value.slice(1).toLowerCase();

    return `${firstLetter}${wordRest}`;
}
console.log(charCaseChanger('пиТеР'));
console.log(charCaseChanger('javaScript'));



// 9th task. arrow function

const stringCutter = (stringValue, charsQuantity) => {
    if (typeof stringValue !== 'string' && typeof charsQuantity !== 'number')
        return 'first enter a string, then a number'
    if (stringValue.length > charsQuantity) {

        return `${stringValue.slice(0, charsQuantity)}...`;
    }
    return stringValue;

}
console.log(stringCutter('Привет мир!', 6));