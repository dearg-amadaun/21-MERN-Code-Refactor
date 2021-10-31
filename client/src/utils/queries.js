//Examples from Classwork reference book typedef
import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
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
