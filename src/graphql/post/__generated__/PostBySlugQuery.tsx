import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PostBySlugQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type PostBySlugQuery = { __typename?: 'RootQuery', post?: { __typename?: 'Post', databaseId: number, title?: string | null, slug?: string | null, content?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | null };


export const PostBySlugQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostBySlugQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"idType"},"value":{"kind":"EnumValue","value":"SLUG"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __usePostBySlugQuery__
 *
 * To run a query within a React component, call `usePostBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostBySlugQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostBySlugQuery(baseOptions: Apollo.QueryHookOptions<PostBySlugQuery, PostBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostBySlugQuery, PostBySlugQueryVariables>(PostBySlugQueryDocument, options);
      }
export function usePostBySlugQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostBySlugQuery, PostBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostBySlugQuery, PostBySlugQueryVariables>(PostBySlugQueryDocument, options);
        }
export type PostBySlugQueryHookResult = ReturnType<typeof usePostBySlugQuery>;
export type PostBySlugQueryLazyQueryHookResult = ReturnType<typeof usePostBySlugQueryLazyQuery>;
export type PostBySlugQueryQueryResult = Apollo.QueryResult<PostBySlugQuery, PostBySlugQueryVariables>;