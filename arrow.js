// 1st task. arrow function
const firstLetterUp = (name) => {

}

const sayHello = (name) => {

    if (typeof name !== "string")
        return 'Enter your name';
    correctedName = name.charAt(0).toUpperCase() + name.toLowerCase().slice(1);

    if (correctedName !== "Mark")
        return `Hello, ${correctedName}!`;

    return `Hi, ${correctedName}!`;

};
console.log(sayHello('Oleg'));
console.log(sayHello('Viktor'));
console.log(sayHello('Mark'));




// 2nd task. arrow function
const calcHypotenuse = (n, m) => {

    const hypotenuse = Math.sqrt(n * n + m * m) // hurried up with the first task solution :)
    return (hypotenuse);
};
console.log(calcHypotenuse(3, 4));


// 3rd task. arrow function
const min = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number")
        return 'Enter a number';
    if (a < b)
        return a;
    return b;
}
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

// 4th task. arrow function

const isEven = (x) => {
    if (typeof x !== "number")
        return 'this is not a number'

    return (x % 2) == 0;

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
    if (typeof value !== 'string' ||
        typeof value == 'string' &&
        value.trim().indexOf(' ') >= 0
    )
        return 'enter correct value';

    const firstLetter = value.charAt(0).toUpperCase();
    correctedValue = firstLetter + value.toLowerCase().slice(1);

    return correctedValue;
}
console.log(charCaseChanger('пиТеР'));
console.log(charCaseChanger('javaScript'));



// 9th task. arrow function

const stringCutter = (stringValue, maxLength) => {
    if (typeof stringValue !== 'string' && maxLength !== 'number')
        return 'first enter a string, then a number'
    if (stringValue.length > maxLength) {
        slicedValue = stringValue.slice(0, maxLength) + '...';
        return slicedValue;
    } else {
        return stringValue;
    }
}
console.log(stringCutter('Привет мир!', 6));