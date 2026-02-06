/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Array: { input: any; output: any; }
  JsonArgument: { input: any; output: any; }
};

export type AssetContainer = {
  handle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type AssetInterface = {
  blueprint?: Maybe<Scalars['String']['output']>;
  container: AssetContainer;
  duration?: Maybe<Scalars['Float']['output']>;
  edit_url?: Maybe<Scalars['String']['output']>;
  extension: Scalars['String']['output'];
  focus_css?: Maybe<Scalars['String']['output']>;
  folder?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  is_audio?: Maybe<Scalars['Boolean']['output']>;
  is_image?: Maybe<Scalars['Boolean']['output']>;
  is_video?: Maybe<Scalars['Boolean']['output']>;
  last_modified?: Maybe<Scalars['String']['output']>;
  orientation?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  permalink?: Maybe<Scalars['String']['output']>;
  ratio?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  size_b?: Maybe<Scalars['Int']['output']>;
  size_bytes?: Maybe<Scalars['Int']['output']>;
  size_gb?: Maybe<Scalars['Float']['output']>;
  size_gigabytes?: Maybe<Scalars['Float']['output']>;
  size_kb?: Maybe<Scalars['Float']['output']>;
  size_kilobytes?: Maybe<Scalars['Float']['output']>;
  size_mb?: Maybe<Scalars['Float']['output']>;
  size_megabytes?: Maybe<Scalars['Float']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type AssetInterfacePagination = {
  /** Current page of the cursor */
  current_page: Scalars['Int']['output'];
  /** List of items on the current page */
  data: Array<AssetInterface>;
  /** Number of the first item returned */
  from?: Maybe<Scalars['Int']['output']>;
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean']['output'];
  /** The last page (number of pages) */
  last_page: Scalars['Int']['output'];
  /** Number of items returned per page */
  per_page: Scalars['Int']['output'];
  /** Number of the last item returned */
  to?: Maybe<Scalars['Int']['output']>;
  /** Number of total items selected by the query */
  total: Scalars['Int']['output'];
};

export type Asset_Assets = AssetInterface & {
  alt?: Maybe<Scalars['String']['output']>;
  blueprint?: Maybe<Scalars['String']['output']>;
  container: AssetContainer;
  duration?: Maybe<Scalars['Float']['output']>;
  edit_url?: Maybe<Scalars['String']['output']>;
  extension: Scalars['String']['output'];
  focus_css?: Maybe<Scalars['String']['output']>;
  folder?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  is_audio?: Maybe<Scalars['Boolean']['output']>;
  is_image?: Maybe<Scalars['Boolean']['output']>;
  is_video?: Maybe<Scalars['Boolean']['output']>;
  last_modified?: Maybe<Scalars['String']['output']>;
  orientation?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  permalink?: Maybe<Scalars['String']['output']>;
  ratio?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  size_b?: Maybe<Scalars['Int']['output']>;
  size_bytes?: Maybe<Scalars['Int']['output']>;
  size_gb?: Maybe<Scalars['Float']['output']>;
  size_gigabytes?: Maybe<Scalars['Float']['output']>;
  size_kb?: Maybe<Scalars['Float']['output']>;
  size_kilobytes?: Maybe<Scalars['Float']['output']>;
  size_mb?: Maybe<Scalars['Float']['output']>;
  size_megabytes?: Maybe<Scalars['Float']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Code = {
  code: Scalars['String']['output'];
  mode: Scalars['String']['output'];
};

export type Collection = {
  handle: Scalars['String']['output'];
  mount?: Maybe<EntryInterface>;
  structure?: Maybe<CollectionStructure>;
  title: Scalars['String']['output'];
};

export type CollectionStructure = {
  expects_root: Scalars['Boolean']['output'];
  handle: Scalars['String']['output'];
  max_depth?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  tree?: Maybe<Array<Maybe<CollectionTreeBranch>>>;
};


export type CollectionStructureTreeArgs = {
  site?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionTreeBranch = {
  children?: Maybe<Array<Maybe<CollectionTreeBranch>>>;
  depth: Scalars['Int']['output'];
  entry?: Maybe<EntryInterface>;
  /** @deprecated Replaced by `entry` */
  page?: Maybe<EntryInterface>;
};

export type DateRange = {
  end?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['String']['output']>;
};


export type DateRangeEndArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type DateRangeStartArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type EntryInterface = {
  blueprint?: Maybe<Scalars['String']['output']>;
  collection: Collection;
  date?: Maybe<Scalars['String']['output']>;
  edit_url: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  last_modified?: Maybe<Scalars['String']['output']>;
  locale: Scalars['String']['output'];
  parent?: Maybe<EntryInterface>;
  permalink?: Maybe<Scalars['String']['output']>;
  private: Scalars['Boolean']['output'];
  published: Scalars['Boolean']['output'];
  site: Site;
  slug: Scalars['String']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type EntryInterfaceDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type EntryInterfaceLast_ModifiedArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type EntryInterfacePagination = {
  /** Current page of the cursor */
  current_page: Scalars['Int']['output'];
  /** List of items on the current page */
  data: Array<EntryInterface>;
  /** Number of the first item returned */
  from?: Maybe<Scalars['Int']['output']>;
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean']['output'];
  /** The last page (number of pages) */
  last_page: Scalars['Int']['output'];
  /** Number of items returned per page */
  per_page: Scalars['Int']['output'];
  /** Number of the last item returned */
  to?: Maybe<Scalars['Int']['output']>;
  /** Number of total items selected by the query */
  total: Scalars['Int']['output'];
};

export type Entry_Bookmarks_Bookmarks = EntryInterface & {
  blueprint?: Maybe<Scalars['String']['output']>;
  category?: Maybe<LabeledValue>;
  collection: Collection;
  date?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  edit_url: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  last_modified?: Maybe<Scalars['String']['output']>;
  link_url: Scalars['String']['output'];
  locale: Scalars['String']['output'];
  parent?: Maybe<EntryInterface>;
  permalink?: Maybe<Scalars['String']['output']>;
  private: Scalars['Boolean']['output'];
  published: Scalars['Boolean']['output'];
  site: Site;
  slug: Scalars['String']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type Entry_Bookmarks_BookmarksDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type Entry_Bookmarks_BookmarksLast_ModifiedArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type Entry_Stack_Stack = EntryInterface & {
  blueprint?: Maybe<Scalars['String']['output']>;
  categories?: Maybe<Array<Maybe<LabeledValue>>>;
  collection: Collection;
  date?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  edit_url: Scalars['String']['output'];
  icon_image?: Maybe<AssetInterface>;
  icon_slug?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  last_modified?: Maybe<Scalars['String']['output']>;
  link_url: Scalars['String']['output'];
  locale: Scalars['String']['output'];
  parent?: Maybe<EntryInterface>;
  permalink?: Maybe<Scalars['String']['output']>;
  private: Scalars['Boolean']['output'];
  published: Scalars['Boolean']['output'];
  site: Site;
  slug: Scalars['String']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type Entry_Stack_StackDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type Entry_Stack_StackLast_ModifiedArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type Field = {
  config?: Maybe<Scalars['Array']['output']>;
  display: Scalars['String']['output'];
  handle: Scalars['String']['output'];
  if?: Maybe<Scalars['Array']['output']>;
  instructions?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  unless?: Maybe<Scalars['Array']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type Form = {
  fields?: Maybe<Array<Maybe<Field>>>;
  handle: Scalars['String']['output'];
  honeypot?: Maybe<Scalars['String']['output']>;
  rules?: Maybe<Scalars['Array']['output']>;
  sections?: Maybe<Array<Maybe<Section>>>;
  title: Scalars['String']['output'];
};

export type GlobalSetInterface = {
  handle: Scalars['String']['output'];
  site: Site;
  title: Scalars['String']['output'];
};

export type GlobalSet_Profile = GlobalSetInterface & {
  about?: Maybe<Scalars['String']['output']>;
  handle: Scalars['String']['output'];
  interests?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name: Scalars['String']['output'];
  site: Site;
  skills?: Maybe<Array<Maybe<Sets_Skills>>>;
  social_links?: Maybe<Array<Maybe<Sets_SocialLinks>>>;
  tagline?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type GlobalSet_Site = GlobalSetInterface & {
  handle: Scalars['String']['output'];
  site: Site;
  site_description?: Maybe<Scalars['String']['output']>;
  site_title: Scalars['String']['output'];
  site_url?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type LabeledValue = {
  label?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type LinkValue = {
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type NavTreeBranch = {
  children?: Maybe<Array<Maybe<NavTreeBranch>>>;
  depth: Scalars['Int']['output'];
  page?: Maybe<PageInterface>;
};

export type Navigation = {
  expects_root: Scalars['Boolean']['output'];
  handle: Scalars['String']['output'];
  max_depth?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  tree?: Maybe<Array<Maybe<NavTreeBranch>>>;
};


export type NavigationTreeArgs = {
  site?: InputMaybe<Scalars['String']['input']>;
};

export type PageInterface = {
  entry_id?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  permalink?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  asset?: Maybe<AssetInterface>;
  assetContainer?: Maybe<AssetContainer>;
  assetContainers?: Maybe<Array<Maybe<AssetContainer>>>;
  assets?: Maybe<AssetInterfacePagination>;
  collection?: Maybe<Collection>;
  collections?: Maybe<Array<Maybe<Collection>>>;
  entries?: Maybe<EntryInterfacePagination>;
  entry?: Maybe<EntryInterface>;
  globalSet?: Maybe<GlobalSetInterface>;
  globalSets?: Maybe<Array<Maybe<GlobalSetInterface>>>;
  ping?: Maybe<Scalars['String']['output']>;
};


export type QueryAssetArgs = {
  container?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAssetContainerArgs = {
  handle: Scalars['String']['input'];
};


export type QueryAssetsArgs = {
  container: Scalars['String']['input'];
  filter?: InputMaybe<Scalars['JsonArgument']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCollectionArgs = {
  handle?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEntriesArgs = {
  collection?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Scalars['JsonArgument']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query_scope?: InputMaybe<Scalars['JsonArgument']['input']>;
  site?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryEntryArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JsonArgument']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGlobalSetArgs = {
  handle?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Scalars['String']['input']>;
};

export type Role = {
  handle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Section = {
  display?: Maybe<Scalars['String']['output']>;
  fields?: Maybe<Array<Maybe<Field>>>;
  instructions?: Maybe<Scalars['String']['output']>;
};

export type Set_Skills_Skill = {
  color?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Set_SocialLinks_Link = {
  id?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<LabeledValue>;
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Sets_Skills = Set_Skills_Skill;

export type Sets_SocialLinks = Set_SocialLinks_Link;

export type Site = {
  handle: Scalars['String']['output'];
  locale: Scalars['String']['output'];
  name: Scalars['String']['output'];
  short_locale: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type TableRow = {
  cells?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Taxonomy = {
  handle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type TermInterface = {
  edit_url: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  permalink?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  taxonomy: Taxonomy;
  title: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type User = {
  avatar?: Maybe<AssetInterface>;
  edit_url?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Maybe<UserGroup>>>;
  id?: Maybe<Scalars['String']['output']>;
  initials?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Maybe<Role>>>;
};

export type UserGroup = {
  handle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { globalSet?:
    | { name: string, tagline?: string | null, about?: string | null, interests?: Array<string | null> | null, skills?: Array<{ name: string, icon?: string | null, color?: string | null } | null> | null, social_links?: Array<{ url: string, platform?: { value?: string | null } | null } | null> | null }
    | Record<PropertyKey, never>
   | null };

export type GetSiteSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSiteSettingsQuery = { globalSet?:
    | { site_title: string, site_description?: string | null, site_url?: string | null }
    | Record<PropertyKey, never>
   | null };

export type GetStackQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStackQuery = { entries?: { data: Array<
      | { id: string, title: string }
      | { description?: string | null, icon_slug?: string | null, link_url: string, id: string, title: string, categories?: Array<{ value?: string | null } | null> | null, icon_image?: { url?: string | null } | null }
    > } | null };

export type GetBookmarksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBookmarksQuery = { entries?: { data: Array<
      | { link_url: string, description?: string | null, id: string, title: string, category?: { value?: string | null } | null }
      | { id: string, title: string }
    > } | null };


export const GetProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"globalSet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"handle"},"value":{"kind":"StringValue","value":"profile","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GlobalSet_Profile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tagline"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"interests"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Set_Skills_Skill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"social_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Set_SocialLinks_Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platform"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProfileQuery, GetProfileQueryVariables>;
export const GetSiteSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSiteSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"globalSet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"handle"},"value":{"kind":"StringValue","value":"site","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GlobalSet_Site"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"site_title"}},{"kind":"Field","name":{"kind":"Name","value":"site_description"}},{"kind":"Field","name":{"kind":"Name","value":"site_url"}}]}}]}}]}}]} as unknown as DocumentNode<GetSiteSettingsQuery, GetSiteSettingsQueryVariables>;
export const GetStackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"collection"},"value":{"kind":"StringValue","value":"stack","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry_Stack_Stack"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"icon_slug"}},{"kind":"Field","name":{"kind":"Name","value":"icon_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link_url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetStackQuery, GetStackQueryVariables>;
export const GetBookmarksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBookmarks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"collection"},"value":{"kind":"StringValue","value":"bookmarks","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"order","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Entry_Bookmarks_Bookmarks"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link_url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetBookmarksQuery, GetBookmarksQueryVariables>;