const removeFromArray = function (array, ...args) {
    let finalArray = new Set(array);
    let start = 0;
    let toRemove = args;
    let toRemoveCount = toRemove.length;

    while (start < toRemoveCount) {
        finalArray.delete(toRemove[start]);
        start++;
    }
    
    finalArray = Array.from(finalArray);
    
    return finalArray

};

// Do not edit below this line
module.exports = removeFromArray;
