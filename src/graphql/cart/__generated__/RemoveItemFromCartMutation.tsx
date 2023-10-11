import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import { Cart } from './Cart.fragment';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RemoveItemFromCartMutationVariables = Types.Exact<{
  keys?: Types.InputMaybe<Array<Types.InputMaybe<Types.Scalars['ID']['input']>> | Types.InputMaybe<Types.Scalars['ID']['input']>>;
}>;


export type RemoveItemFromCartMutation = { __typename?: 'RootMutation', removeItemsFromCart?: { __typename?: 'RemoveItemsFromCartPayload', cart?: { __typename?: 'Cart', total?: string | null, isEmpty?: boolean | null, appliedCoupons?: Array<{ __typename?: 'AppliedCoupon', code: string, discountAmount: string } | null> | null, contents?: { __typename?: 'CartToCartItemConnection', itemCount?: number | null, productCount?: number | null, edges: Array<{ __typename?: 'CartToCartItemConnectionEdge', node: { __typename?: 'SimpleCartItem', key: string, quantity?: number | null, total?: string | null, product?: { __typename?: 'CartItemToProductConnectionEdge', node: { __typename?: 'ExternalProduct', databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | { __typename?: 'GroupProduct', databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | { __typename?: 'SimpleProduct', price?: string | null, databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | { __typename?: 'UnsupportedProduct', databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | { __typename?: 'VariableProduct', databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } } | null } }> } | null } | null } | null };


export const RemoveItemFromCartMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveItemFromCartMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keys"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeItemsFromCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"keys"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keys"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Cart"}}]}}]}}]}},...Cart.definitions]} as unknown as DocumentNode;
export type RemoveItemFromCartMutationMutationFn = Apollo.MutationFunction<RemoveItemFromCartMutation, RemoveItemFromCartMutationVariables>;

/**
 * __useRemoveItemFromCartMutation__
 *
 * To run a mutation, you first call `useRemoveItemFromCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveItemFromCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeItemFromCartMutation, { data, loading, error }] = useRemoveItemFromCartMutation({
 *   variables: {
 *      keys: // value for 'keys'
 *   },
 * });
 */
export function useRemoveItemFromCartMutation(baseOptions?: Apollo.MutationHookOptions<RemoveItemFromCartMutation, RemoveItemFromCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveItemFromCartMutation, RemoveItemFromCartMutationVariables>(RemoveItemFromCartMutationDocument, options);
      }
export type RemoveItemFromCartMutationHookResult = ReturnType<typeof useRemoveItemFromCartMutation>;
export type RemoveItemFromCartMutationMutationResult = Apollo.MutationResult<RemoveItemFromCartMutation>;
export type RemoveItemFromCartMutationMutationOptions = Apollo.BaseMutationOptions<RemoveItemFromCartMutation, RemoveItemFromCartMutationVariables>;