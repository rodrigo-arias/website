import { gql } from "graphql-request";

export const GET_PROFILE = gql`
  query GetProfile {
    globalSet(handle: "profile") {
      ... on GlobalSet_Profile {
        name
        tagline
        about
        skills
        social_links
      }
    }
  }
`;

export const GET_STACK = gql`
  query GetStack {
    entries(collection: "stack") {
      data {
        title
        ... on Entry_Stack_Stack {
          description
          categories
          icon_slug
          icon_image {
            url
          }
          url
        }
      }
    }
  }
`;

export const GET_BOOKMARKS = gql`
  query GetBookmarks {
    entries(collection: "bookmarks") {
      data {
        title
        ... on Entry_Bookmarks_Bookmarks {
          url
          description
          category
        }
      }
    }
  }
`;
