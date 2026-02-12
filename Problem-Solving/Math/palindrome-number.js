function IsPalindromrNumber(number) {
    let tempNumber = number;
    let reverseNumber = 0;
    while(tempNumber > 0) {
        const lastDigit = tempNumber % 10;
        reverseNumber = (reverseNumber * 10) + lastDigit;
        tempNumber = Math.floor(tempNumber / 10);
    }

    return number === reverseNumber ? `${number} is palindrome: Yes` : `${number} is palindrome: No`
}

console.log(IsPalindromrNumber(367));
console.log(IsPalindromrNumber(363));

