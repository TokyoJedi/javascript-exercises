const palindromes = function (input) {
    const sanitizedInput = input.replace(/[^\w]/g, "").toLowerCase();
    let inputToTest = sanitizedInput;
    let start = 0;
    let end = sanitizedInput.length;
    let final = [];

    while (start < end) {
        [final[start], final[end]] = [inputToTest[end], inputToTest[start]];
        start++;
        end--;
    }

    final = (Object.values(final) + "").replace(/,/g, "");

    if (final == inputToTest) {
        return true
    }

    return false
};

// Do not edit below this line
module.exports = palindromes;
