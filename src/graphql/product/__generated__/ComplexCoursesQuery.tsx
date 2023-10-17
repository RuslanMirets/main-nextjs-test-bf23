import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ComplexCoursesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ComplexCoursesQuery = { __typename?: 'RootQuery', products?: { __typename?: 'RootQueryToProductUnionConnection', edges: Array<{ __typename?: 'RootQueryToProductUnionConnectionEdge', node: { __typename?: 'ExternalProduct', databaseId: number, name?: string | null } | { __typename?: 'GroupProduct', databaseId: number, name?: string | null } | { __typename?: 'SimpleProduct', databaseId: number, name?: string | null } | { __typename?: 'SimpleProductVariation', databaseId: number, name?: string | null } | { __typename?: 'UnsupportedProduct', databaseId: number, name?: string | null } | { __typename?: 'VariableProduct', databaseId: number, name?: string | null } }> } | null };


export const ComplexCoursesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ComplexCoursesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"IntValue","value":"421"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useComplexCoursesQuery__
 *
 * To run a query within a React component, call `useComplexCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useComplexCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useComplexCoursesQuery({
 *   variables: {
 *   },
 * });
 */
export function useComplexCoursesQuery(baseOptions?: Apollo.QueryHookOptions<ComplexCoursesQuery, ComplexCoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ComplexCoursesQuery, ComplexCoursesQueryVariables>(ComplexCoursesQueryDocument, options);
      }
export function useComplexCoursesQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ComplexCoursesQuery, ComplexCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ComplexCoursesQuery, ComplexCoursesQueryVariables>(ComplexCoursesQueryDocument, options);
        }
export type ComplexCoursesQueryHookResult = ReturnType<typeof useComplexCoursesQuery>;
export type ComplexCoursesQueryLazyQueryHookResult = ReturnType<typeof useComplexCoursesQueryLazyQuery>;
export type ComplexCoursesQueryQueryResult = Apollo.QueryResult<ComplexCoursesQuery, ComplexCoursesQueryVariables>;