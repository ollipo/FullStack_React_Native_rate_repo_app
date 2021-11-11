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