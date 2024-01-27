// function gcd(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }

const  gcd = (length1, length2) => {
    while (length2 !== 0) {
        let temp = length2;
        length2 = length1 % length2;
        length1 = temp;
    }
    return length1;
}

const largestCommonDivisor = (str1, str2) => {
    const length1 = str1.length;
    const length2 = str2.length;
    
    const len = gcd(length1, length2);
    
    const substring = str1.substring(0, len);
    
    if (substring.repeat(length1 / len) === str1 && substring.repeat(length2 / len) === str2) {
        return substring;
    }
    
    return "";
}

// // Test cases
// console.log(largestCommonDivisor("ABCABC", "ABC")); // Output: "ABC"
// console.log(largestCommonDivisor("ABABAB", "ABAB")); // Output: "AB"
// console.log(largestCommonDivisor("CODECODECODECODE", "CODECODE")); // Output: ""


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function(str1, str2) {
    
    if (str1 + str2 !== str2 + str1) {

        return "";
    }

    let n = str1.length;

    let k = str2.length;

    let gcds = function (x, y) {
        
        if (!y) {
            return x;
        }
        return gcds(y, x % y);
    }

    let div = gcds (n, k);

    return str1.slice(0, div);
};

// // Test cases
// console.log(gcdOfStrings("ABCABC", "ABC")); // Output: "ABC"
// console.log(gcdOfStrings("ABABAB", "ABAB")); // Output: "AB"
// console.log(gcdOfStrings("CODECODECODECODE", "CODECODE")); // Output: ""

module.exports = {
    gcdOfStrings,
    largestCommonDivisor,
    gcd

}