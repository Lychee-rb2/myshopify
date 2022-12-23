import type { ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw';
import { graphql } from 'msw'
import type { GraphQLClient } from 'graphql-request';
import type * as Dom from 'graphql-request/dist/types.dom.js';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
  Dimension: number;
  HexColor: string;
  JSON: any;
  Quality: number;
};

export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  globalCollection?: Maybe<GlobalCollection>;
  mediaCollection?: Maybe<MediaCollection>;
  peopleCollection?: Maybe<PeopleCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsGlobalCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPeopleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Global = Entry & {
  __typename?: 'Global';
  contentfulMetadata: ContentfulMetadata;
  footerMenuCollection?: Maybe<GlobalFooterMenuCollection>;
  headerMenuCollection?: Maybe<GlobalHeaderMenuCollection>;
  icon?: Maybe<Asset>;
  linkedFrom?: Maybe<GlobalLinkingCollections>;
  seo?: Maybe<Seo>;
  serverPolicy?: Maybe<GlobalServerPolicy>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


export type GlobalFooterMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GlobalHeaderMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GlobalIconArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type GlobalLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type GlobalSeoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type GlobalServerPolicyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type GlobalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type GlobalCollection = {
  __typename?: 'GlobalCollection';
  items: Array<Maybe<Global>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type GlobalFilter = {
  AND?: InputMaybe<Array<InputMaybe<GlobalFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GlobalFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  footerMenuCollection_exists?: InputMaybe<Scalars['Boolean']>;
  headerMenuCollection_exists?: InputMaybe<Scalars['Boolean']>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']>;
  serverPolicy_contains?: InputMaybe<Scalars['String']>;
  serverPolicy_exists?: InputMaybe<Scalars['Boolean']>;
  serverPolicy_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type GlobalFooterMenuCollection = {
  __typename?: 'GlobalFooterMenuCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type GlobalHeaderMenuCollection = {
  __typename?: 'GlobalHeaderMenuCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type GlobalLinkingCollections = {
  __typename?: 'GlobalLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type GlobalLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum GlobalOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type GlobalServerPolicy = {
  __typename?: 'GlobalServerPolicy';
  json: Scalars['JSON'];
  links: GlobalServerPolicyLinks;
};

export type GlobalServerPolicyAssets = {
  __typename?: 'GlobalServerPolicyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type GlobalServerPolicyEntries = {
  __typename?: 'GlobalServerPolicyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type GlobalServerPolicyLinks = {
  __typename?: 'GlobalServerPolicyLinks';
  assets: GlobalServerPolicyAssets;
  entries: GlobalServerPolicyEntries;
};

export enum ImageFormat {
  Avif = 'AVIF',
  Jpg = 'JPG',
  JpgProgressive = 'JPG_PROGRESSIVE',
  Png = 'PNG',
  Png8 = 'PNG8',
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  Bottom = 'BOTTOM',
  BottomLeft = 'BOTTOM_LEFT',
  BottomRight = 'BOTTOM_RIGHT',
  Center = 'CENTER',
  Face = 'FACE',
  Faces = 'FACES',
  Left = 'LEFT',
  Right = 'RIGHT',
  Top = 'TOP',
  TopLeft = 'TOP_LEFT',
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  Crop = 'CROP',
  Fill = 'FILL',
  Fit = 'FIT',
  Pad = 'PAD',
  Scale = 'SCALE',
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  cornerRadius?: InputMaybe<Scalars['Int']>;
  format?: InputMaybe<ImageFormat>;
  height?: InputMaybe<Scalars['Dimension']>;
  quality?: InputMaybe<Scalars['Quality']>;
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  width?: InputMaybe<Scalars['Dimension']>;
};

export type Media = Entry & {
  __typename?: 'Media';
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  itemCollection?: Maybe<MediaItemCollection>;
  linkedFrom?: Maybe<MediaLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


export type MediaImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type MediaItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MediaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MediaTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type MediaCollection = {
  __typename?: 'MediaCollection';
  items: Array<Maybe<Media>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MediaFilter = {
  AND?: InputMaybe<Array<InputMaybe<MediaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MediaFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  itemCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MediaItemCollection = {
  __typename?: 'MediaItemCollection';
  items: Array<Maybe<Shared>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MediaLinkingCollections = {
  __typename?: 'MediaLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type MediaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum MediaOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Page = Entry & {
  __typename?: 'Page';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageLinkingCollections>;
  sliceCollection?: Maybe<PageSliceCollection>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PageSliceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type PageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sliceCollection_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  globalCollection?: Maybe<GlobalCollection>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageLinkingCollectionsGlobalCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageSliceCollection = {
  __typename?: 'PageSliceCollection';
  items: Array<Maybe<People>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type People = Entry & {
  __typename?: 'People';
  avatar?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<PeopleDescription>;
  job?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PeopleLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sliceSpacing?: Maybe<Scalars['String']>;
  socialCollection?: Maybe<PeopleSocialCollection>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


export type PeopleAvatarArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type PeopleDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type PeopleJobArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type PeopleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PeopleNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type PeopleSliceSpacingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type PeopleSocialCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PeopleTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PeopleCollection = {
  __typename?: 'PeopleCollection';
  items: Array<Maybe<People>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PeopleDescription = {
  __typename?: 'PeopleDescription';
  json: Scalars['JSON'];
  links: PeopleDescriptionLinks;
};

export type PeopleDescriptionAssets = {
  __typename?: 'PeopleDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PeopleDescriptionEntries = {
  __typename?: 'PeopleDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PeopleDescriptionLinks = {
  __typename?: 'PeopleDescriptionLinks';
  assets: PeopleDescriptionAssets;
  entries: PeopleDescriptionEntries;
};

export type PeopleFilter = {
  AND?: InputMaybe<Array<InputMaybe<PeopleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PeopleFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  job?: InputMaybe<Scalars['String']>;
  job_contains?: InputMaybe<Scalars['String']>;
  job_exists?: InputMaybe<Scalars['Boolean']>;
  job_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  job_not?: InputMaybe<Scalars['String']>;
  job_not_contains?: InputMaybe<Scalars['String']>;
  job_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sliceSpacing?: InputMaybe<Scalars['String']>;
  sliceSpacing_contains?: InputMaybe<Scalars['String']>;
  sliceSpacing_exists?: InputMaybe<Scalars['Boolean']>;
  sliceSpacing_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sliceSpacing_not?: InputMaybe<Scalars['String']>;
  sliceSpacing_not_contains?: InputMaybe<Scalars['String']>;
  sliceSpacing_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  socialCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PeopleLinkingCollections = {
  __typename?: 'PeopleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  socialCollection?: Maybe<SocialCollection>;
};


export type PeopleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PeopleLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PeopleLinkingCollectionsSocialCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PeopleOrder {
  JobAsc = 'job_ASC',
  JobDesc = 'job_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SliceSpacingAsc = 'sliceSpacing_ASC',
  SliceSpacingDesc = 'sliceSpacing_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PeopleSocialCollection = {
  __typename?: 'PeopleSocialCollection';
  items: Array<Maybe<Social>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  entryCollection?: Maybe<EntryCollection>;
  global?: Maybe<Global>;
  globalCollection?: Maybe<GlobalCollection>;
  media?: Maybe<Media>;
  mediaCollection?: Maybe<MediaCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  people?: Maybe<People>;
  peopleCollection?: Maybe<PeopleCollection>;
  seo?: Maybe<Seo>;
  seoCollection?: Maybe<SeoCollection>;
  shared?: Maybe<Shared>;
  sharedCollection?: Maybe<SharedCollection>;
  social?: Maybe<Social>;
  socialCollection?: Maybe<SocialCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryGlobalArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGlobalCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<GlobalOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GlobalFilter>;
};


export type QueryMediaArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MediaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MediaFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageFilter>;
};


export type QueryPeopleArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPeopleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PeopleOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PeopleFilter>;
};


export type QuerySeoArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SeoFilter>;
};


export type QuerySharedArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySharedCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SharedOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SharedFilter>;
};


export type QuerySocialArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySocialCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SocialOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SocialFilter>;
};

export type Seo = Entry & {
  __typename?: 'Seo';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  keyword?: Maybe<Array<Maybe<Scalars['String']>>>;
  linkedFrom?: Maybe<SeoLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


export type SeoDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type SeoKeywordArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type SeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SeoTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SeoCollection = {
  __typename?: 'SeoCollection';
  items: Array<Maybe<Seo>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keyword_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keyword_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keyword_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keyword_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SeoLinkingCollections = {
  __typename?: 'SeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  globalCollection?: Maybe<GlobalCollection>;
};


export type SeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SeoLinkingCollectionsGlobalCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SeoOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Shared = Entry & {
  __typename?: 'Shared';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SharedLinkingCollections>;
  note?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  when?: Maybe<Scalars['DateTime']>;
};


export type SharedLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SharedNoteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type SharedPriceArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type SharedTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type SharedWhenArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SharedCollection = {
  __typename?: 'SharedCollection';
  items: Array<Maybe<Shared>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SharedFilter = {
  AND?: InputMaybe<Array<InputMaybe<SharedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SharedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  note?: InputMaybe<Scalars['String']>;
  note_contains?: InputMaybe<Scalars['String']>;
  note_exists?: InputMaybe<Scalars['Boolean']>;
  note_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  note_not?: InputMaybe<Scalars['String']>;
  note_not_contains?: InputMaybe<Scalars['String']>;
  note_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price?: InputMaybe<Scalars['Float']>;
  price_exists?: InputMaybe<Scalars['Boolean']>;
  price_gt?: InputMaybe<Scalars['Float']>;
  price_gte?: InputMaybe<Scalars['Float']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  price_lt?: InputMaybe<Scalars['Float']>;
  price_lte?: InputMaybe<Scalars['Float']>;
  price_not?: InputMaybe<Scalars['Float']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  when?: InputMaybe<Scalars['DateTime']>;
  when_exists?: InputMaybe<Scalars['Boolean']>;
  when_gt?: InputMaybe<Scalars['DateTime']>;
  when_gte?: InputMaybe<Scalars['DateTime']>;
  when_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  when_lt?: InputMaybe<Scalars['DateTime']>;
  when_lte?: InputMaybe<Scalars['DateTime']>;
  when_not?: InputMaybe<Scalars['DateTime']>;
  when_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type SharedLinkingCollections = {
  __typename?: 'SharedLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  mediaCollection?: Maybe<MediaCollection>;
};


export type SharedLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SharedLinkingCollectionsMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SharedOrder {
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  WhenAsc = 'when_ASC',
  WhenDesc = 'when_DESC'
}

export type Social = Entry & {
  __typename?: 'Social';
  contentfulMetadata: ContentfulMetadata;
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<SocialLinkingCollections>;
  people?: Maybe<People>;
  sys: Sys;
  type?: Maybe<Scalars['String']>;
};


export type SocialLabelArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type SocialLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type SocialLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SocialPeopleArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type SocialTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SocialCollection = {
  __typename?: 'SocialCollection';
  items: Array<Maybe<Social>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SocialFilter = {
  AND?: InputMaybe<Array<InputMaybe<SocialFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SocialFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  label?: InputMaybe<Scalars['String']>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_exists?: InputMaybe<Scalars['Boolean']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_not?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<Scalars['String']>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_not?: InputMaybe<Scalars['String']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  people?: InputMaybe<CfPeopleNestedFilter>;
  people_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  type?: InputMaybe<Scalars['String']>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_not?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SocialLinkingCollections = {
  __typename?: 'SocialLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  peopleCollection?: Maybe<PeopleCollection>;
};


export type SocialLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SocialLinkingCollectionsPeopleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SocialOrder {
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type CfPeopleNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPeopleNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPeopleNestedFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  job?: InputMaybe<Scalars['String']>;
  job_contains?: InputMaybe<Scalars['String']>;
  job_exists?: InputMaybe<Scalars['Boolean']>;
  job_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  job_not?: InputMaybe<Scalars['String']>;
  job_not_contains?: InputMaybe<Scalars['String']>;
  job_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sliceSpacing?: InputMaybe<Scalars['String']>;
  sliceSpacing_contains?: InputMaybe<Scalars['String']>;
  sliceSpacing_exists?: InputMaybe<Scalars['Boolean']>;
  sliceSpacing_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sliceSpacing_not?: InputMaybe<Scalars['String']>;
  sliceSpacing_not_contains?: InputMaybe<Scalars['String']>;
  sliceSpacing_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  socialCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keyword_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keyword_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keyword_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keyword_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type GlobalFragment = { __typename?: 'Global', headerMenuCollection?: { __typename?: 'GlobalHeaderMenuCollection', items: Array<{ __typename?: 'Page', title?: string | null, slug?: string | null, sliceCollection?: { __typename?: 'PageSliceCollection', items: Array<{ __typename: 'People', name?: string | null, title?: string | null, job?: string | null, sliceSpacing?: string | null, avatar?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null, description?: { __typename?: 'PeopleDescription', json: any } | null, socialCollection?: { __typename?: 'PeopleSocialCollection', items: Array<{ __typename: 'Social', link?: string | null, type?: string | null, label?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null, footerMenuCollection?: { __typename?: 'GlobalFooterMenuCollection', items: Array<{ __typename?: 'Page', title?: string | null, slug?: string | null, sliceCollection?: { __typename?: 'PageSliceCollection', items: Array<{ __typename: 'People', name?: string | null, title?: string | null, job?: string | null, sliceSpacing?: string | null, avatar?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null, description?: { __typename?: 'PeopleDescription', json: any } | null, socialCollection?: { __typename?: 'PeopleSocialCollection', items: Array<{ __typename: 'Social', link?: string | null, type?: string | null, label?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null, icon?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, keyword?: Array<string | null> | null } | null, serverPolicy?: { __typename?: 'GlobalServerPolicy', json: any } | null };

type Sys_Global_Fragment = { __typename: 'Global', sys: { __typename?: 'Sys', id: string } };

type Sys_Media_Fragment = { __typename: 'Media', sys: { __typename?: 'Sys', id: string } };

type Sys_Page_Fragment = { __typename: 'Page', sys: { __typename?: 'Sys', id: string } };

type Sys_People_Fragment = { __typename: 'People', sys: { __typename?: 'Sys', id: string } };

type Sys_Seo_Fragment = { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } };

type Sys_Shared_Fragment = { __typename: 'Shared', sys: { __typename?: 'Sys', id: string } };

type Sys_Social_Fragment = { __typename: 'Social', sys: { __typename?: 'Sys', id: string } };

export type SysFragment = Sys_Global_Fragment | Sys_Media_Fragment | Sys_Page_Fragment | Sys_People_Fragment | Sys_Seo_Fragment | Sys_Shared_Fragment | Sys_Social_Fragment;

export type PeopleFragment = { __typename: 'People', name?: string | null, title?: string | null, job?: string | null, sliceSpacing?: string | null, avatar?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null, description?: { __typename?: 'PeopleDescription', json: any } | null, socialCollection?: { __typename?: 'PeopleSocialCollection', items: Array<{ __typename: 'Social', link?: string | null, type?: string | null, label?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, sys: { __typename?: 'Sys', id: string } };

export type SocialFragment = { __typename: 'Social', link?: string | null, type?: string | null, label?: string | null, sys: { __typename?: 'Sys', id: string } };

export type PageFragment = { __typename?: 'Page', title?: string | null, slug?: string | null, sliceCollection?: { __typename?: 'PageSliceCollection', items: Array<{ __typename: 'People', name?: string | null, title?: string | null, job?: string | null, sliceSpacing?: string | null, avatar?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null, description?: { __typename?: 'PeopleDescription', json: any } | null, socialCollection?: { __typename?: 'PeopleSocialCollection', items: Array<{ __typename: 'Social', link?: string | null, type?: string | null, label?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type SeoFragment = { __typename?: 'Seo', title?: string | null, description?: string | null, keyword?: Array<string | null> | null };

export type GlobalCollectionQueryVariables = Exact<{ [key: string]: never; }>;


export type GlobalCollectionQuery = { __typename?: 'Query', globalCollection?: { __typename?: 'GlobalCollection', items: Array<{ __typename?: 'Global', headerMenuCollection?: { __typename?: 'GlobalHeaderMenuCollection', items: Array<{ __typename?: 'Page', title?: string | null, slug?: string | null, sliceCollection?: { __typename?: 'PageSliceCollection', items: Array<{ __typename: 'People', name?: string | null, title?: string | null, job?: string | null, sliceSpacing?: string | null, avatar?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null, description?: { __typename?: 'PeopleDescription', json: any } | null, socialCollection?: { __typename?: 'PeopleSocialCollection', items: Array<{ __typename: 'Social', link?: string | null, type?: string | null, label?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null, footerMenuCollection?: { __typename?: 'GlobalFooterMenuCollection', items: Array<{ __typename?: 'Page', title?: string | null, slug?: string | null, sliceCollection?: { __typename?: 'PageSliceCollection', items: Array<{ __typename: 'People', name?: string | null, title?: string | null, job?: string | null, sliceSpacing?: string | null, avatar?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null, description?: { __typename?: 'PeopleDescription', json: any } | null, socialCollection?: { __typename?: 'PeopleSocialCollection', items: Array<{ __typename: 'Social', link?: string | null, type?: string | null, label?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null, icon?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, keyword?: Array<string | null> | null } | null, serverPolicy?: { __typename?: 'GlobalServerPolicy', json: any } | null } | null> } | null };

export type PageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type PageQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', title?: string | null, slug?: string | null, sliceCollection?: { __typename?: 'PageSliceCollection', items: Array<{ __typename: 'People', name?: string | null, title?: string | null, job?: string | null, sliceSpacing?: string | null, avatar?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null, description?: { __typename?: 'PeopleDescription', json: any } | null, socialCollection?: { __typename?: 'PeopleSocialCollection', items: Array<{ __typename: 'Social', link?: string | null, type?: string | null, label?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null };


/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGlobalCollectionQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ globalCollection })
 *   )
 * })
 */
export const mockGlobalCollectionQuery = (resolver: ResponseResolver<GraphQLRequest<GlobalCollectionQueryVariables>, GraphQLContext<GlobalCollectionQuery>, any>) =>
  graphql.query<GlobalCollectionQuery, GlobalCollectionQueryVariables>(
    'GlobalCollection',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockPageQuery((req, res, ctx) => {
 *   const { slug } = req.variables;
 *   return res(
 *     ctx.data({ pageCollection })
 *   )
 * })
 */
export const mockPageQuery = (resolver: ResponseResolver<GraphQLRequest<PageQueryVariables>, GraphQLContext<PageQuery>, any>) =>
  graphql.query<PageQuery, PageQueryVariables>(
    'page',
    resolver
  )

export const SysFragmentDoc = gql`
    fragment sys on Entry {
  sys {
    id
  }
  __typename
}
    `;
export const SocialFragmentDoc = gql`
    fragment social on Social {
  ...sys
  link
  type
  label
}
    ${SysFragmentDoc}`;
export const PeopleFragmentDoc = gql`
    fragment people on People {
  ...sys
  name
  title
  job
  avatar {
    url
    title
  }
  description {
    json
  }
  socialCollection(limit: 10) {
    items {
      ...social
    }
  }
  sliceSpacing
}
    ${SysFragmentDoc}
${SocialFragmentDoc}`;
export const PageFragmentDoc = gql`
    fragment page on Page {
  title
  slug
  sliceCollection(limit: 10) {
    items {
      ...people
    }
  }
}
    ${PeopleFragmentDoc}`;
export const SeoFragmentDoc = gql`
    fragment seo on Seo {
  title
  description
  keyword
}
    `;
export const GlobalFragmentDoc = gql`
    fragment global on Global {
  headerMenuCollection(limit: 10) {
    items {
      ...page
    }
  }
  footerMenuCollection(limit: 10) {
    items {
      ...page
    }
  }
  icon {
    url
    title
  }
  seo {
    ...seo
  }
  serverPolicy {
    json
  }
}
    ${PageFragmentDoc}
${SeoFragmentDoc}`;
export const GlobalCollectionDocument = gql`
    query GlobalCollection {
  globalCollection(limit: 1) {
    items {
      ...global
    }
  }
}
    ${GlobalFragmentDoc}`;
export const PageDocument = gql`
    query page($slug: String) {
  pageCollection(limit: 1, where: {slug: $slug}) {
    items {
      ...page
    }
  }
}
    ${PageFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GlobalCollection(variables?: GlobalCollectionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GlobalCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GlobalCollectionQuery>(GlobalCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GlobalCollection', 'query');
    },
    page(variables?: PageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageQuery>(PageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'page', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;