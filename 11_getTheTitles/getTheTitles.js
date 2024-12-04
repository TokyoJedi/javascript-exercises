const getTheTitles = function() {
    let books = arguments;
    books = Array.from(books).flat();
    let final = [];

    for(record of books) {
        final.push(record.title);
    }

    return final;
};

// Do not edit below this line
module.exports = getTheTitles;
