import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GalleryQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GalleryQuery = { __typename?: 'RootQuery', galleries?: { __typename?: 'RootQueryToGalleryConnection', edges: Array<{ __typename?: 'RootQueryToGalleryConnectionEdge', node: { __typename?: 'Gallery', databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null, gallery?: { __typename?: 'Gallery_Gallery', list?: Array<{ __typename?: 'Gallery_Gallery_list', image?: { __typename?: 'MediaItem', sourceUrl?: string | null } | null } | null> | null } | null, galleryCategories?: { __typename?: 'GalleryToGalleryCategoryConnection', edges: Array<{ __typename?: 'GalleryToGalleryCategoryConnectionEdge', node: { __typename?: 'GalleryCategory', databaseId: number, name?: string | null } }> } | null } }> } | null };


export const GalleryQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GalleryQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"galleries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"galleryCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useGalleryQuery__
 *
 * To run a query within a React component, call `useGalleryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGalleryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGalleryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGalleryQuery(baseOptions?: Apollo.QueryHookOptions<GalleryQuery, GalleryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GalleryQuery, GalleryQueryVariables>(GalleryQueryDocument, options);
      }
export function useGalleryQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GalleryQuery, GalleryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GalleryQuery, GalleryQueryVariables>(GalleryQueryDocument, options);
        }
export type GalleryQueryHookResult = ReturnType<typeof useGalleryQuery>;
export type GalleryQueryLazyQueryHookResult = ReturnType<typeof useGalleryQueryLazyQuery>;
export type GalleryQueryQueryResult = Apollo.QueryResult<GalleryQuery, GalleryQueryVariables>;