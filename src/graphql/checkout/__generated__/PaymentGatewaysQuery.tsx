import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PaymentGatewaysQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type PaymentGatewaysQuery = { __typename?: 'RootQuery', paymentGateways?: { __typename?: 'RootQueryToPaymentGatewayConnection', edges: Array<{ __typename?: 'RootQueryToPaymentGatewayConnectionEdge', node: { __typename?: 'PaymentGateway', id: string, title?: string | null, description?: string | null, icon?: string | null } }> } | null };


export const PaymentGatewaysQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaymentGatewaysQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentGateways"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __usePaymentGatewaysQuery__
 *
 * To run a query within a React component, call `usePaymentGatewaysQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentGatewaysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentGatewaysQuery({
 *   variables: {
 *   },
 * });
 */
export function usePaymentGatewaysQuery(baseOptions?: Apollo.QueryHookOptions<PaymentGatewaysQuery, PaymentGatewaysQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaymentGatewaysQuery, PaymentGatewaysQueryVariables>(PaymentGatewaysQueryDocument, options);
      }
export function usePaymentGatewaysQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaymentGatewaysQuery, PaymentGatewaysQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaymentGatewaysQuery, PaymentGatewaysQueryVariables>(PaymentGatewaysQueryDocument, options);
        }
export type PaymentGatewaysQueryHookResult = ReturnType<typeof usePaymentGatewaysQuery>;
export type PaymentGatewaysQueryLazyQueryHookResult = ReturnType<typeof usePaymentGatewaysQueryLazyQuery>;
export type PaymentGatewaysQueryQueryResult = Apollo.QueryResult<PaymentGatewaysQuery, PaymentGatewaysQueryVariables>;