import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CheckoutMutationVariables = Types.Exact<{
  paymentMethod?: Types.InputMaybe<Types.Scalars['String']['input']>;
  firstName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  lastName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  email?: Types.InputMaybe<Types.Scalars['String']['input']>;
  phone?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type CheckoutMutation = { __typename?: 'RootMutation', checkout?: { __typename?: 'CheckoutPayload', clientMutationId?: string | null, result?: string | null, redirect?: string | null, order?: { __typename?: 'Order', id: string, orderKey?: string | null, orderNumber?: string | null, status?: Types.OrderStatusEnum | null, refunds?: { __typename?: 'OrderToRefundConnection', nodes: Array<{ __typename?: 'Refund', amount?: number | null }> } | null } | null } | null };


export const CheckoutMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CheckoutMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethod"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"paymentMethod"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethod"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"billing"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"orderKey"}},{"kind":"Field","name":{"kind":"Name","value":"orderNumber"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"refunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"redirect"}}]}}]}}]} as unknown as DocumentNode;
export type CheckoutMutationMutationFn = Apollo.MutationFunction<CheckoutMutation, CheckoutMutationVariables>;

/**
 * __useCheckoutMutation__
 *
 * To run a mutation, you first call `useCheckoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkoutMutation, { data, loading, error }] = useCheckoutMutation({
 *   variables: {
 *      paymentMethod: // value for 'paymentMethod'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useCheckoutMutation(baseOptions?: Apollo.MutationHookOptions<CheckoutMutation, CheckoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CheckoutMutation, CheckoutMutationVariables>(CheckoutMutationDocument, options);
      }
export type CheckoutMutationHookResult = ReturnType<typeof useCheckoutMutation>;
export type CheckoutMutationMutationResult = Apollo.MutationResult<CheckoutMutation>;
export type CheckoutMutationMutationOptions = Apollo.BaseMutationOptions<CheckoutMutation, CheckoutMutationVariables>;