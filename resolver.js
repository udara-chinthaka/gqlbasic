const nanoId = require('nanoid').nanoid;

class Author {
    constructor(id, { authorName, authorCountry, language, book }) {
        this.id = id,
            this.authorCountry = authorCountry,
            this.authorName = authorName,
            this.language = language,
            this.book = book
    }
}

// object for hold authors
const holdAuthors = {};

const resolver = {
    //accept id 
    getAuthor: ({ id }) => {
        return new Author(id, holdAuthors[id])
    },
    createAuthor: ({ input }) => {
        let id = nanoId(); // get random id
        holdAuthors[id] = input; //assign id and input into holdAuthors object
        return new Author(id, input); // pass params to author constructor
    }
}

module.exports = resolver;

