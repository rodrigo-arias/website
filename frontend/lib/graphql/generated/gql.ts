/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetProfile {\n    globalSet(handle: \"profile\") {\n      ... on GlobalSet_Profile {\n        name\n        tagline\n        about\n        interests\n        skills {\n          ... on Set_Skills_Skill {\n            name\n            icon\n            color\n          }\n        }\n        social_links {\n          ... on Set_SocialLinks_Link {\n            platform {\n              value\n            }\n            url\n          }\n        }\n      }\n    }\n  }\n": typeof types.GetProfileDocument,
    "\n  query GetSiteSettings {\n    globalSet(handle: \"site\") {\n      ... on GlobalSet_Site {\n        site_title\n        site_description\n        site_url\n      }\n    }\n  }\n": typeof types.GetSiteSettingsDocument,
    "\n  query GetStack {\n    entries(collection: \"stack\") {\n      data {\n        id\n        title\n        ... on Entry_Stack_Stack {\n          description\n          categories {\n            value\n          }\n          icon_slug\n          icon_image {\n            url\n          }\n          link_url\n        }\n      }\n    }\n  }\n": typeof types.GetStackDocument,
    "\n  query GetBookmarks {\n    entries(collection: \"bookmarks\", sort: \"order\") {\n      data {\n        id\n        title\n        ... on Entry_Bookmarks_Bookmarks {\n          link_url\n          description\n          category {\n            value\n          }\n        }\n      }\n    }\n  }\n": typeof types.GetBookmarksDocument,
};
const documents: Documents = {
    "\n  query GetProfile {\n    globalSet(handle: \"profile\") {\n      ... on GlobalSet_Profile {\n        name\n        tagline\n        about\n        interests\n        skills {\n          ... on Set_Skills_Skill {\n            name\n            icon\n            color\n          }\n        }\n        social_links {\n          ... on Set_SocialLinks_Link {\n            platform {\n              value\n            }\n            url\n          }\n        }\n      }\n    }\n  }\n": types.GetProfileDocument,
    "\n  query GetSiteSettings {\n    globalSet(handle: \"site\") {\n      ... on GlobalSet_Site {\n        site_title\n        site_description\n        site_url\n      }\n    }\n  }\n": types.GetSiteSettingsDocument,
    "\n  query GetStack {\n    entries(collection: \"stack\") {\n      data {\n        id\n        title\n        ... on Entry_Stack_Stack {\n          description\n          categories {\n            value\n          }\n          icon_slug\n          icon_image {\n            url\n          }\n          link_url\n        }\n      }\n    }\n  }\n": types.GetStackDocument,
    "\n  query GetBookmarks {\n    entries(collection: \"bookmarks\", sort: \"order\") {\n      data {\n        id\n        title\n        ... on Entry_Bookmarks_Bookmarks {\n          link_url\n          description\n          category {\n            value\n          }\n        }\n      }\n    }\n  }\n": types.GetBookmarksDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProfile {\n    globalSet(handle: \"profile\") {\n      ... on GlobalSet_Profile {\n        name\n        tagline\n        about\n        interests\n        skills {\n          ... on Set_Skills_Skill {\n            name\n            icon\n            color\n          }\n        }\n        social_links {\n          ... on Set_SocialLinks_Link {\n            platform {\n              value\n            }\n            url\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProfile {\n    globalSet(handle: \"profile\") {\n      ... on GlobalSet_Profile {\n        name\n        tagline\n        about\n        interests\n        skills {\n          ... on Set_Skills_Skill {\n            name\n            icon\n            color\n          }\n        }\n        social_links {\n          ... on Set_SocialLinks_Link {\n            platform {\n              value\n            }\n            url\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSiteSettings {\n    globalSet(handle: \"site\") {\n      ... on GlobalSet_Site {\n        site_title\n        site_description\n        site_url\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSiteSettings {\n    globalSet(handle: \"site\") {\n      ... on GlobalSet_Site {\n        site_title\n        site_description\n        site_url\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetStack {\n    entries(collection: \"stack\") {\n      data {\n        id\n        title\n        ... on Entry_Stack_Stack {\n          description\n          categories {\n            value\n          }\n          icon_slug\n          icon_image {\n            url\n          }\n          link_url\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetStack {\n    entries(collection: \"stack\") {\n      data {\n        id\n        title\n        ... on Entry_Stack_Stack {\n          description\n          categories {\n            value\n          }\n          icon_slug\n          icon_image {\n            url\n          }\n          link_url\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetBookmarks {\n    entries(collection: \"bookmarks\", sort: \"order\") {\n      data {\n        id\n        title\n        ... on Entry_Bookmarks_Bookmarks {\n          link_url\n          description\n          category {\n            value\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBookmarks {\n    entries(collection: \"bookmarks\", sort: \"order\") {\n      data {\n        id\n        title\n        ... on Entry_Bookmarks_Bookmarks {\n          link_url\n          description\n          category {\n            value\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;