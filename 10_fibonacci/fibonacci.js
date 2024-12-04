const fibonacci = function (numberInSequence) {
    let sequence = [1, 1];
    sanitizedNumberInSequence = parseInt(numberInSequence);

    if (!sanitizedNumberInSequence) return 0

    if (sanitizedNumberInSequence < 0) return "OOPS"

    for (i = 1; i < sanitizedNumberInSequence; i++) {
        sequence.push(sequence[i - 1] + sequence[i]);
    }

    return sequence[sanitizedNumberInSequence - 1];
};

// Do not edit below this line
module.exports = fibonacci;
