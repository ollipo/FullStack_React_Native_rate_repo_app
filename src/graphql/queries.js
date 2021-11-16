import { gql } from '@apollo/client';

export const ALL_REPOSITORIES = gql`
query {
    repositories {
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
query repository($id: ID!){
  repository(id: $id) {
    id
    fullName
    url
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}
`;