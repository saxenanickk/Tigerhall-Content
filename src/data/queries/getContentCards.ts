import {gql} from '@apollo/client';

const GET_CONTENT_CARDS_QUERY = gql`
  query ($limit: Int, $offset: Int) {
    contentCards(
      filter: {limit: $limit, offset: $offset, keywords: "", types: [PODCAST]}
    ) {
      edges {
        ... on Podcast {
          name
          slug
          image {
            uri
          }
          categories {
            name
          }
          experts {
            firstName
            lastName
            company
            title
          }
        }
      }
    }
  }
`;

export default GET_CONTENT_CARDS_QUERY;
