const isPalindrome = (value) => {
    const text = String(value).toLowerCase().replace(/[^a-z0-9]/g, '');
    return text === text.split('').reverse().join('');
};

const capitalizeWords = (text) =>
    String(text)
    .trim()
    .split(/\s+/)
    .map((w) => (w[0] ? w[0].toUpperCase() + w.slice(1).toLowerCase() : ''))
    .join(' ');

const countOccurrences = (arr, target) => arr.filter((x) => x === target).length;

console.log('palindrome:', isPalindrome('Kasur ini rUsak'));
console.log('capitalize:', capitalizeWords('hello world from js'));
console.log('count 2:', countOccurrences([1, 2, 2, 3, 2], 2));