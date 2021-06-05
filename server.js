const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const resolver = require('./resolver');
const schema = require('./schema');

const app = express();

// get route
app.get('/', (req, res) => {
    res.send('It is working');
});

const root = resolver;

app.use('/graphql', graphqlHTTP({
    schema: schema, // set schema
    rootValue: root, // set root value as our resolvers
    graphiql: true // used to enable graphiql query editor
}));

app.listen(3000, () => {
    console.log('Server up and running');
});