let word1 = prompt("Enter the first word:");
let word2 = prompt("Enter the second word:");

function isPalindrome(word) {
    let reversed = word.split('').reverse().join('');
    return word === reversed;
}

console.log(`${word1} is a palindrome: ${isPalindrome(word1)}`);
console.log(`${word2} is a palindrome: ${isPalindrome(word2)}`);

