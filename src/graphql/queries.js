import { gql } from '@apollo/client';

export const ALL_REPOSITORIES = gql`
query repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $after: String, $keyword: String){
  repositories (orderBy: $orderBy, orderDirection: $orderDirection, first: 6, after: $after, searchKeyword: $keyword) {
        edges {
          node {
            fullName
            description
            language
            reviewCount
            ratingAverage
            forksCount
            stargazersCount
            ownerAvatarUrl
            id
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
`;

export const GET_AUTH_USER = gql`
query {
  authorizedUser {
    id
    username
  }
}
`;

export const REPOSITORY = gql`
query repository($id: ID!, $after: String){
  repository(id: $id) {
    id
    fullName
    reviews(first: 3, after: $after) {
      totalCount
      edges {
        node {
          id
          text
          rating
          createdAt
          repositoryId
          user {
            id
            username
          }
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
}
`;

/* export const SEARCH_REPOSITORIES = gql`
query repositories($keyword: String) {
  repositories(searchKeyword: $keyword) {
    edges {
      node {
        fullName
        description
        language
        reviewCount
        ratingAverage
        forksCount
        stargazersCount
        ownerAvatarUrl
        id
      }
    }
  }
}
`; */