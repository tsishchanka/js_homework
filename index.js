// 1st task function expression
const sayHello = function(name) {
    if (typeof name !== "string") {
        return `${'Enter your name'}`;
    } else if (typeof name === "string" && name !== "Mark") {
        return `${'Hello,'} ${name}${'!'}`;
    } else {
        return `${'Hi,'} ${name}${'!'}`;
    }
};
console.log(sayHello('Oleg'));
console.log(sayHello('Viktor'));
console.log(sayHello('Mark'));


// 2nd task function
const calcHypotenuse = function() {
    const n = 3;
    const m = 4;
    return (n * n + m * m);
};
console.log(calcHypotenuse());

// 3rd task function
const min = function(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return 'Enter a number';
    } else if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

// 4th task function

const isEven = function(x) {
    if (typeof x !== "number") {
        return 'this is not a number'
    } else {
        return (x % 2) == 0;
    }
}
console.log(isEven(4));
console.log(isEven(5));

// 5th task function

const deleteChars = function(str) {
    if (typeof str == "number") {
        return 'this is not a string'
    } else {
        const slicedStr = str.slice(1, -1);

        return slicedStr;
    }

}
console.log(deleteChars('Hello'));
console.log(deleteChars('A'));

// 6th task function

const charCaseChanger = function(value) {
    if (typeof value !== 'string' || typeof value == 'string' && value.trim().indexOf(' ') >= 0) {
        return 'enter correct value'
    } else {
        const stringValueLower = value.toLowerCase();
        const stringValueFirstLetter = stringValueLower.slice(0, 1);
        const joinedStringValue = stringValueLower.replace(stringValueFirstLetter, stringValueFirstLetter.toUpperCase())

        return joinedStringValue;
    }
}
console.log(charCaseChanger('пиТеР'));
console.log(charCaseChanger('javaScript'));



// 9th task function
const stringCutter = function(stringValue, maxLength) {
    if (typeof stringValue !== 'string' && maxLength !== 'number') {
        return 'first enter a string, then a number'
    } else if (stringValue.length > maxLength) {
        stringValue = stringValue.slice(0, maxLength);
        stringValue += '...'
        return stringValue;
    } else {
        return stringValue;
    }
}
console.log(stringCutter('Привет мир!', 6));