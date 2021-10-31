//Examples from Classwork reference book typedef
import { gql } from '@apollo/client';

export const GET_ME = gql`
  get me {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        type Book {
            bookId: String
            authors: [String]
            description: String
            title: String
            image: String
            link: String
      }
    }
  }
`;
