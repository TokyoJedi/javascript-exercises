const sumAll = function (num1, num2) {
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);
    let final = 0;

    if ((min < 0 || max < 0) || (!Number.isInteger(num1) 
        || !Number.isInteger(num2))) {
        return "ERROR"
    }

    for (i = min; i <= max; i++) {
        final += i;
    }

    return final;



};

// Do not edit below this line
module.exports = sumAll;
