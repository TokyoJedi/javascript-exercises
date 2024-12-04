const findTheOldest = function (arrayOfObjects) {
    let oldest = null;
    let oldestPerson = null;
    let oldestObject = null;
    let ages = new Map();
    let person = arrayOfObjects;
    const currentYear = new Date().getFullYear();

    const calculateAge = (yearOfBirth, yearOfDeath = currentYear) => {
        return yearOfDeath - yearOfBirth;
    }

    for (record of person) {
        ages.set(record.name, calculateAge(record.yearOfBirth, record.yearOfDeath));
    }

    if (oldest == null) { // Determine oldest age
        for (thisAge of ages) {
            oldest = Math.max(thisAge[1], oldest);
        }
    }

    for (nameAndAge of ages) { // Determine name of oldest person
        nameAndAge[1] === oldest ? oldestPerson = nameAndAge[0] : false
    }

    for (thisObject of person) {
        if (thisObject.name === oldestPerson) {
            oldestObject = thisObject;
        }
    }

    return oldestObject
};

// Do not edit below this line
module.exports = findTheOldest;
