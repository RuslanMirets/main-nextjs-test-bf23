import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import { Cart } from './Cart.fragment';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CartQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CartQuery = { __typename?: 'RootQuery', cart?: { __typename?: 'Cart', total?: string | null, isEmpty?: boolean | null, appliedCoupons?: Array<{ __typename?: 'AppliedCoupon', code: string, discountAmount: string } | null> | null, contents?: { __typename?: 'CartToCartItemConnection', itemCount?: number | null, productCount?: number | null, edges: Array<{ __typename?: 'CartToCartItemConnectionEdge', node: { __typename?: 'SimpleCartItem', key: string, quantity?: number | null, total?: string | null, product?: { __typename?: 'CartItemToProductConnectionEdge', node: { __typename?: 'ExternalProduct', databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | { __typename?: 'GroupProduct', databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | { __typename?: 'SimpleProduct', price?: string | null, databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | { __typename?: 'UnsupportedProduct', databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | { __typename?: 'VariableProduct', databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } } | null } }> } | null } | null };


export const CartQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CartQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Cart"}}]}}]}},...Cart.definitions]} as unknown as DocumentNode;

/**
 * __useCartQuery__
 *
 * To run a query within a React component, call `useCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCartQuery({
 *   variables: {
 *   },
 * });
 */
export function useCartQuery(baseOptions?: Apollo.QueryHookOptions<CartQuery, CartQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CartQuery, CartQueryVariables>(CartQueryDocument, options);
      }
export function useCartQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CartQuery, CartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CartQuery, CartQueryVariables>(CartQueryDocument, options);
        }
export type CartQueryHookResult = ReturnType<typeof useCartQuery>;
export type CartQueryLazyQueryHookResult = ReturnType<typeof useCartQueryLazyQuery>;
export type CartQueryQueryResult = Apollo.QueryResult<CartQuery, CartQueryVariables>;