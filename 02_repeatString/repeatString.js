const repeatString = function(string, num) {
    const stringToRepeat = string;
    const timesToRepeat = num;
    let final = '';

    if (timesToRepeat < 0) {
        return "ERROR";          
    }
    
    for(let i = 1; i <= num; i++) {
        final += stringToRepeat;
    }
    return final;
};

// Do not edit below this line
module.exports = repeatString;
