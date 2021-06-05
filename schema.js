const graphql = require('graphql');

const schema = graphql.buildSchema(`
    type Author {
        id:String
        authorName:String!
        authorCountry:String
        language:String
        book:[Book]
    }

    type Book {
        id:String
        name:String!
        price: Int
        isbn:Int!
        category:Category
    }

    enum Category{
        NOVEL
        DRAMA
        POEMS
        BIOGRAPHY
        COMEDIES
    }

    input AuthorInput{
        id:String
        authorName:String!
        authorCountry:String
        language:String
        book:[BookInput]
    }

    input BookInput{
        id:String
        name:String!
        price: Int
        isbn:Int!
        category:Category
    }

    type Query{
        getAuthor(id:String): Author
    }

    type Mutation{
        createAuthor(input:AuthorInput): Author
    }
`);
module.exports = schema;





