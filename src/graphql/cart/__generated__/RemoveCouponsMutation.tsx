import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import { Cart } from './Cart.fragment';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RemoveCouponsMutationVariables = Types.Exact<{
  codes?: Types.InputMaybe<Array<Types.InputMaybe<Types.Scalars['String']['input']>> | Types.InputMaybe<Types.Scalars['String']['input']>>;
}>;


export type RemoveCouponsMutation = { __typename?: 'RootMutation', removeCoupons?: { __typename?: 'RemoveCouponsPayload', cart?: { __typename?: 'Cart', total?: string | null, isEmpty?: boolean | null, appliedCoupons?: Array<{ __typename?: 'AppliedCoupon', code: string, discountAmount: string } | null> | null, contents?: { __typename?: 'CartToCartItemConnection', itemCount?: number | null, productCount?: number | null, edges: Array<{ __typename?: 'CartToCartItemConnectionEdge', node: { __typename?: 'SimpleCartItem', key: string, quantity?: number | null, total?: string | null, product?: { __typename?: 'CartItemToProductConnectionEdge', node: { __typename?: 'ExternalProduct', databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | { __typename?: 'GroupProduct', databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | { __typename?: 'SimpleProduct', price?: string | null, databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | { __typename?: 'UnsupportedProduct', databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | { __typename?: 'VariableProduct', databaseId: number, title?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } } | null } }> } | null } | null } | null };


export const RemoveCouponsMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveCouponsMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"codes"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeCoupons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"codes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"codes"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Cart"}}]}}]}}]}},...Cart.definitions]} as unknown as DocumentNode;
export type RemoveCouponsMutationMutationFn = Apollo.MutationFunction<RemoveCouponsMutation, RemoveCouponsMutationVariables>;

/**
 * __useRemoveCouponsMutation__
 *
 * To run a mutation, you first call `useRemoveCouponsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCouponsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCouponsMutation, { data, loading, error }] = useRemoveCouponsMutation({
 *   variables: {
 *      codes: // value for 'codes'
 *   },
 * });
 */
export function useRemoveCouponsMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCouponsMutation, RemoveCouponsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCouponsMutation, RemoveCouponsMutationVariables>(RemoveCouponsMutationDocument, options);
      }
export type RemoveCouponsMutationHookResult = ReturnType<typeof useRemoveCouponsMutation>;
export type RemoveCouponsMutationMutationResult = Apollo.MutationResult<RemoveCouponsMutation>;
export type RemoveCouponsMutationMutationOptions = Apollo.BaseMutationOptions<RemoveCouponsMutation, RemoveCouponsMutationVariables>;