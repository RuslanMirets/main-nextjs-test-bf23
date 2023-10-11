import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GalleryCategoriesVariables = Types.Exact<{ [key: string]: never; }>;


export type GalleryCategories = { __typename?: 'RootQuery', galleryCategories?: { __typename?: 'RootQueryToGalleryCategoryConnection', edges: Array<{ __typename?: 'RootQueryToGalleryCategoryConnectionEdge', node: { __typename?: 'GalleryCategory', databaseId: number, name?: string | null, children?: { __typename?: 'GalleryCategoryToGalleryCategoryConnection', edges: Array<{ __typename?: 'GalleryCategoryToGalleryCategoryConnectionEdge', node: { __typename?: 'GalleryCategory', databaseId: number, name?: string | null } }> } | null } }> } | null };


export const GalleryCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GalleryCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"galleryCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"parent"},"value":{"kind":"IntValue","value":"0"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useGalleryCategories__
 *
 * To run a query within a React component, call `useGalleryCategories` and pass it any options that fit your needs.
 * When your component renders, `useGalleryCategories` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGalleryCategories({
 *   variables: {
 *   },
 * });
 */
export function useGalleryCategories(baseOptions?: Apollo.QueryHookOptions<GalleryCategories, GalleryCategoriesVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GalleryCategories, GalleryCategoriesVariables>(GalleryCategoriesDocument, options);
      }
export function useGalleryCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GalleryCategories, GalleryCategoriesVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GalleryCategories, GalleryCategoriesVariables>(GalleryCategoriesDocument, options);
        }
export type GalleryCategoriesHookResult = ReturnType<typeof useGalleryCategories>;
export type GalleryCategoriesLazyQueryHookResult = ReturnType<typeof useGalleryCategoriesLazyQuery>;
export type GalleryCategoriesQueryResult = Apollo.QueryResult<GalleryCategories, GalleryCategoriesVariables>;