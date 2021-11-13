//Reference user-controller.js, book model, and user model.
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    users: [User]
    me: User
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
      token: ID!
      user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(authors: [String], description: String, title: String, bookId: String, image: String, link: String): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
