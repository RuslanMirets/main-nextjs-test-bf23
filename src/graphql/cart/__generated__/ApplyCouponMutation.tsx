import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import { Cart } from './Cart.fragment';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ApplyCouponMutationVariables = Types.Exact<{
  code: Types.Scalars['String']['input'];
}>;


export type ApplyCouponMutation = { __typename?: 'RootMutation', applyCoupon?: { __typename?: 'ApplyCouponPayload', applied?: { __typename?: 'AppliedCoupon', code: string, discountAmount: string } | null, cart?: { __typename?: 'Cart', total?: string | null, isEmpty?: boolean | null, appliedCoupons?: Array<{ __typename?: 'AppliedCoupon', code: string, discountAmount: string } | null> | null, contents?: { __typename?: 'CartToCartItemConnection', itemCount?: number | null, productCount?: number | null, edges: Array<{ __typename?: 'CartToCartItemConnectionEdge', node: { __typename?: 'SimpleCartItem', key: string, quantity?: number | null, total?: string | null, product?: { __typename?: 'CartItemToProductConnectionEdge', node: { __typename?: 'ExternalProduct', databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | { __typename?: 'GroupProduct', databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | { __typename?: 'SimpleProduct', price?: string | null, databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | { __typename?: 'UnsupportedProduct', databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | { __typename?: 'VariableProduct', databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } } | null } }> } | null } | null } | null };


export const ApplyCouponMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ApplyCouponMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"applyCoupon"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"applied"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"discountAmount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"RAW"}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"cart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Cart"}}]}}]}}]}},...Cart.definitions]} as unknown as DocumentNode;
export type ApplyCouponMutationMutationFn = Apollo.MutationFunction<ApplyCouponMutation, ApplyCouponMutationVariables>;

/**
 * __useApplyCouponMutation__
 *
 * To run a mutation, you first call `useApplyCouponMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApplyCouponMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [applyCouponMutation, { data, loading, error }] = useApplyCouponMutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useApplyCouponMutation(baseOptions?: Apollo.MutationHookOptions<ApplyCouponMutation, ApplyCouponMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ApplyCouponMutation, ApplyCouponMutationVariables>(ApplyCouponMutationDocument, options);
      }
export type ApplyCouponMutationHookResult = ReturnType<typeof useApplyCouponMutation>;
export type ApplyCouponMutationMutationResult = Apollo.MutationResult<ApplyCouponMutation>;
export type ApplyCouponMutationMutationOptions = Apollo.BaseMutationOptions<ApplyCouponMutation, ApplyCouponMutationVariables>;