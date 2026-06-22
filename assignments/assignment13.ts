//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters includeletters and numbers.
//Given a string s, return true if it is a palindrome, or false otherwise.

let s:string = "A man, a plan, a canal: Panama";

function isPalimdrome(s:string):boolean {
    const reversed = s.split(' ').reverse().join();
    return s===reversed;
}

console.log(isPalimdrome ("s"));