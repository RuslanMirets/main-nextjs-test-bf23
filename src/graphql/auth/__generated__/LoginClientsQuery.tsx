import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type LoginClientsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type LoginClientsQuery = { __typename?: 'RootQuery', loginClients?: Array<{ __typename?: 'LoginClient', provider?: Types.LoginProviderEnum | null, authorizationUrl?: string | null } | null> | null };


export const LoginClientsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LoginClientsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginClients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"authorizationUrl"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useLoginClientsQuery__
 *
 * To run a query within a React component, call `useLoginClientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginClientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginClientsQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoginClientsQuery(baseOptions?: Apollo.QueryHookOptions<LoginClientsQuery, LoginClientsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginClientsQuery, LoginClientsQueryVariables>(LoginClientsQueryDocument, options);
      }
export function useLoginClientsQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginClientsQuery, LoginClientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginClientsQuery, LoginClientsQueryVariables>(LoginClientsQueryDocument, options);
        }
export type LoginClientsQueryHookResult = ReturnType<typeof useLoginClientsQuery>;
export type LoginClientsQueryLazyQueryHookResult = ReturnType<typeof useLoginClientsQueryLazyQuery>;
export type LoginClientsQueryQueryResult = Apollo.QueryResult<LoginClientsQuery, LoginClientsQueryVariables>;