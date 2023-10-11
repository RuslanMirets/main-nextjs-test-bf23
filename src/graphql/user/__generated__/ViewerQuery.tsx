import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ViewerQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ViewerQuery = { __typename?: 'RootQuery', viewer?: { __typename?: 'User', databaseId: number, email?: string | null, name?: string | null, username?: string | null } | null };


export const ViewerQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ViewerQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useViewerQuery__
 *
 * To run a query within a React component, call `useViewerQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewerQuery({
 *   variables: {
 *   },
 * });
 */
export function useViewerQuery(baseOptions?: Apollo.QueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ViewerQuery, ViewerQueryVariables>(ViewerQueryDocument, options);
      }
export function useViewerQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ViewerQuery, ViewerQueryVariables>(ViewerQueryDocument, options);
        }
export type ViewerQueryHookResult = ReturnType<typeof useViewerQuery>;
export type ViewerQueryLazyQueryHookResult = ReturnType<typeof useViewerQueryLazyQuery>;
export type ViewerQueryQueryResult = Apollo.QueryResult<ViewerQuery, ViewerQueryVariables>;