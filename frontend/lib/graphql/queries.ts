export const GET_PROFILE = /* GraphQL */ `
  query GetProfile {
    globalSet(handle: "profile") {
      ... on GlobalSet_Profile {
        name
        tagline
        about
        interests
        skills {
          ... on Set_Skills_Skill {
            name
            icon
            color
          }
        }
        social_links {
          ... on Set_SocialLinks_Link {
            platform {
              value
            }
            url
          }
        }
      }
    }
  }
`;

export const GET_SITE_SETTINGS = /* GraphQL */ `
  query GetSiteSettings {
    globalSet(handle: "site_settings") {
      ... on GlobalSet_SiteSettings {
        title
        description
        url
      }
    }
  }
`;

export const GET_STACK = /* GraphQL */ `
  query GetStack {
    entries(collection: "stack") {
      data {
        id
        title
        ... on Entry_Stack_Stack {
          description
          categories {
            value
          }
          icon_slug
          icon_image {
            url
          }
          link_url
        }
      }
    }
  }
`;

export const GET_BOOKMARKS = /* GraphQL */ `
  query GetBookmarks {
    entries(collection: "bookmarks", sort: "order") {
      data {
        id
        title
        ... on Entry_Bookmarks_Bookmarks {
          link_url
          description
          category {
            value
          }
        }
      }
    }
  }
`;
