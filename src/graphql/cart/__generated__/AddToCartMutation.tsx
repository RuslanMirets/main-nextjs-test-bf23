import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import { Cart } from './Cart.fragment';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AddToCartMutationVariables = Types.Exact<{
  productId: Types.Scalars['Int']['input'];
  quantity?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type AddToCartMutation = { __typename?: 'RootMutation', addToCart?: { __typename?: 'AddToCartPayload', cart?: { __typename?: 'Cart', total?: string | null, isEmpty?: boolean | null, appliedCoupons?: Array<{ __typename?: 'AppliedCoupon', code: string, discountAmount: string } | null> | null, contents?: { __typename?: 'CartToCartItemConnection', itemCount?: number | null, productCount?: number | null, edges: Array<{ __typename?: 'CartToCartItemConnectionEdge', node: { __typename?: 'SimpleCartItem', key: string, quantity?: number | null, total?: string | null, product?: { __typename?: 'CartItemToProductConnectionEdge', node: { __typename?: 'ExternalProduct', databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | { __typename?: 'GroupProduct', databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | { __typename?: 'SimpleProduct', price?: string | null, databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | { __typename?: 'UnsupportedProduct', databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | { __typename?: 'VariableProduct', databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } } | null } }> } | null } | null } | null };


export const AddToCartMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddToCartMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addToCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Cart"}}]}}]}}]}},...Cart.definitions]} as unknown as DocumentNode;
export type AddToCartMutationMutationFn = Apollo.MutationFunction<AddToCartMutation, AddToCartMutationVariables>;

/**
 * __useAddToCartMutation__
 *
 * To run a mutation, you first call `useAddToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToCartMutation, { data, loading, error }] = useAddToCartMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *      quantity: // value for 'quantity'
 *   },
 * });
 */
export function useAddToCartMutation(baseOptions?: Apollo.MutationHookOptions<AddToCartMutation, AddToCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddToCartMutation, AddToCartMutationVariables>(AddToCartMutationDocument, options);
      }
export type AddToCartMutationHookResult = ReturnType<typeof useAddToCartMutation>;
export type AddToCartMutationMutationResult = Apollo.MutationResult<AddToCartMutation>;
export type AddToCartMutationMutationOptions = Apollo.BaseMutationOptions<AddToCartMutation, AddToCartMutationVariables>;