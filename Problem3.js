// Function to convert a character to lower case using arrow function
const toLowerCase = char => char.toLowerCase();

// Function to convert a word to lower case using the toLowerCase function
const wordToLowerCase = word => word.split('').map(toLowerCase).join('');

// Function to convert an array of words to lower case using the wordToLowerCase function
const arrayToLowerCase = arr => arr.map(wordToLowerCase);

// Sample Input
const inputArray = ["MA", "SA", "I", "SCH", "OOL"];

// Sample Output
const outputArray = arrayToLowerCase(inputArray);

console.log(outputArray);
