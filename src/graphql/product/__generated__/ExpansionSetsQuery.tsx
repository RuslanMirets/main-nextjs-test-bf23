import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ExpansionSetsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ExpansionSetsQuery = { __typename?: 'RootQuery', products?: { __typename?: 'RootQueryToProductUnionConnection', edges: Array<{ __typename?: 'RootQueryToProductUnionConnectionEdge', node: { __typename?: 'ExternalProduct', databaseId: number, name?: string | null } | { __typename?: 'GroupProduct', databaseId: number, name?: string | null } | { __typename?: 'SimpleProduct', databaseId: number, name?: string | null } | { __typename?: 'SimpleProductVariation', databaseId: number, name?: string | null } | { __typename?: 'UnsupportedProduct', databaseId: number, name?: string | null } | { __typename?: 'VariableProduct', databaseId: number, name?: string | null } }> } | null };


export const ExpansionSetsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExpansionSetsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"IntValue","value":"409"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useExpansionSetsQuery__
 *
 * To run a query within a React component, call `useExpansionSetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useExpansionSetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExpansionSetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useExpansionSetsQuery(baseOptions?: Apollo.QueryHookOptions<ExpansionSetsQuery, ExpansionSetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExpansionSetsQuery, ExpansionSetsQueryVariables>(ExpansionSetsQueryDocument, options);
      }
export function useExpansionSetsQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExpansionSetsQuery, ExpansionSetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExpansionSetsQuery, ExpansionSetsQueryVariables>(ExpansionSetsQueryDocument, options);
        }
export type ExpansionSetsQueryHookResult = ReturnType<typeof useExpansionSetsQuery>;
export type ExpansionSetsQueryLazyQueryHookResult = ReturnType<typeof useExpansionSetsQueryLazyQuery>;
export type ExpansionSetsQueryQueryResult = Apollo.QueryResult<ExpansionSetsQuery, ExpansionSetsQueryVariables>;