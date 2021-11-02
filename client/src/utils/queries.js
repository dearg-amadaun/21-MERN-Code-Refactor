//Examples from Classwork reference book typedef
import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
            bookId
            authors
            description
            title
            image
            link
    }
  }
}
`;
