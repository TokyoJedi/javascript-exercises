const reverseString = function (input) {
    let stringToReverse = input.split("");
    let start = 0;
    let end = stringToReverse.length - 1;
    let final;

    while (start < end) {
        [stringToReverse[start], stringToReverse[end]] = [stringToReverse[end], stringToReverse[start]];
        start++;
        end--;
    }

    final = stringToReverse.join("");

    return final
};

// Do not edit below this line
module.exports = reverseString;
