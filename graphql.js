//refactor to es6?
const { ApolloServer, gql } = require('apollo-server-lambda');
const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core');

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    hello: String
    books: [Book]
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    books: () => books,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

exports.graphqlHandler = server.createHandler();
