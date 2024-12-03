const leapYears = function (year) {
    const yearToCheck = year;
    const isDivisibleBy4 = (yearToCheck % 4) === 0 ? true : false;
    const isDivisibleBy400 = (yearToCheck % 400) === 0 ? true : false;
    let isCentury = null;

    const isCenturyFn = () => {
        let toString = year + "";
        let length = toString.length;
        for (i = length - 2; i < length; i++) {
            isCentury = (toString[i] == 0) ? true : false;
        }
        return isCentury
    }

    if ((isDivisibleBy4 && !isCenturyFn()) || (isCenturyFn() && isDivisibleBy400)) {
        return true
    }

    return false

};

// Do not edit below this line
module.exports = leapYears;
