import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type Page2DBQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type Page2DBQuery = { __typename?: 'RootQuery', page?: { __typename?: 'Page', databaseId: number, title?: string | null, seo?: { __typename?: 'RankMathCategoryTermSeo', title?: string | null, description?: string | null } | { __typename?: 'RankMathGalleryCategoryTermSeo', title?: string | null, description?: string | null } | { __typename?: 'RankMathGalleryObjectSeo', title?: string | null, description?: string | null } | { __typename?: 'RankMathGalleryTypeSeo', title?: string | null, description?: string | null } | { __typename?: 'RankMathMediaItemObjectSeo', title?: string | null, description?: string | null } | { __typename?: 'RankMathMediaItemTypeSeo', title?: string | null, description?: string | null } | { __typename?: 'RankMathPaYookassaPaymentModeTermSeo', title?: string | null, description?: string | null } | { __typename?: 'RankMathPaYookassaPaymentSubjectTermSeo', title?: string | null, description?: string | null } | { __typename?: 'RankMathPageObjectSeo', title?: string | null, description?: string | null } | { __typename?: 'RankMathPageTypeSeo', title?: string | null, description?: string | null } | { __typename?: 'RankMathPostFormatTermSeo', title?: string | null, description?: string | null } | { __typename?: 'RankMathPostObjectSeo', title?: string | null, description?: string | null } | { __typename?: 'RankMathPostTypeSeo', title?: string | null, description?: string | null } | { __typename?: 'RankMathProductCategoryTermSeo', title?: string | null, description?: string | null } | { __typename?: 'RankMathProductObjectSeo', title?: string | null, description?: string | null } | { __typename?: 'RankMathProductTagTermSeo', title?: string | null, description?: string | null } | { __typename?: 'RankMathProductTypeSeo', title?: string | null, description?: string | null } | { __typename?: 'RankMathProductTypeTermSeo', title?: string | null, description?: string | null } | { __typename?: 'RankMathShippingClassTermSeo', title?: string | null, description?: string | null } | { __typename?: 'RankMathTagTermSeo', title?: string | null, description?: string | null } | { __typename?: 'RankMathUserSeo', title?: string | null, description?: string | null } | { __typename?: 'RankMathVisibleProductTermSeo', title?: string | null, description?: string | null } | null, page2db?: { __typename?: 'Page_Page2db', intro?: { __typename?: 'Page_Page2db_Intro', title?: string | null, text?: string | null, author?: string | null, image?: { __typename?: 'MediaItem', sourceUrl?: string | null } | null, buttons?: Array<{ __typename?: 'Page_Page2db_Intro_buttons', title?: string | null, link?: string | null, type?: string | null } | null> | null } | null, info?: { __typename?: 'Page_Page2db_Info', list?: Array<{ __typename?: 'Page_Page2db_Info_list', title?: string | null, value?: string | null } | null> | null } | null, levels?: { __typename?: 'Page_Page2db_Levels', title?: string | null, level?: { __typename?: 'Page_Page2db_Levels_Level', title?: string | null, value?: string | null } | null, list?: Array<{ __typename?: 'Page_Page2db_Levels_list', title?: string | null, description?: string | null, image?: { __typename?: 'MediaItem', sourceUrl?: string | null } | null } | null> | null, button?: { __typename?: 'Page_Page2db_Levels_Button', title?: string | null, link?: string | null } | null } | null, background?: { __typename?: 'Page_Page2db_Background', title1?: string | null, title2?: string | null, image1?: { __typename?: 'MediaItem', sourceUrl?: string | null } | null, image2?: { __typename?: 'MediaItem', sourceUrl?: string | null } | null } | null, learning?: { __typename?: 'Page_Page2db_Learning', title?: string | null, list?: Array<{ __typename?: 'Page_Page2db_Learning_list', title?: string | null, description?: string | null, image?: { __typename?: 'MediaItem', sourceUrl?: string | null } | null } | null> | null } | null, training?: { __typename?: 'Page_Page2db_Training', title?: string | null, list?: Array<{ __typename?: 'Page_Page2db_Training_list', title?: string | null, description?: string | null, image?: { __typename?: 'MediaItem', sourceUrl?: string | null } | null } | null> | null } | null, road?: { __typename?: 'Page_Page2db_Road', title?: string | null, description?: string | null, info?: string | null, list?: Array<{ __typename?: 'Page_Page2db_Road_list', title?: string | null, salary?: string | null, years?: string | null } | null> | null, image?: { __typename?: 'MediaItem', sourceUrl?: string | null } | null } | null, result?: { __typename?: 'Page_Page2db_Result', title?: string | null, list?: Array<{ __typename?: 'Page_Page2db_Result_list', title?: string | null, description?: string | null } | null> | null, button?: { __typename?: 'Page_Page2db_Result_Button', title?: string | null, link?: string | null } | null } | null, worksStudents?: { __typename?: 'Page_Page2db_WorksStudents', title?: string | null, list?: Array<{ __typename?: 'Page_Page2db_WorksStudents_list', name?: string | null, image?: { __typename?: 'MediaItem', sourceUrl?: string | null } | null } | null> | null } | null, program?: { __typename?: 'Page_Page2db_Program', title?: string | null, list?: Array<{ __typename?: 'Page_Page2db_Program_list', title?: string | null, caption?: string | null, description?: string | null, image?: { __typename?: 'MediaItem', sourceUrl?: string | null } | null } | null> | null } | null, worksTeachers?: { __typename?: 'Page_Page2db_WorksTeachers', title?: string | null, list?: Array<{ __typename?: 'Page_Page2db_WorksTeachers_list', name?: string | null, image?: { __typename?: 'MediaItem', sourceUrl?: string | null } | null } | null> | null } | null, teachers?: { __typename?: 'Page_Page2db_Teachers', title?: string | null, list?: Array<{ __typename?: 'Page_Page2db_Teachers_list', title?: string | null, description?: string | null, portfolio?: string | null, image?: { __typename?: 'MediaItem', sourceUrl?: string | null } | null, background?: { __typename?: 'MediaItem', sourceUrl?: string | null } | null } | null> | null } | null, reviews?: { __typename?: 'Page_Page2db_Reviews', title?: string | null, list?: Array<{ __typename?: 'Page_Page2db_Reviews_list', name?: string | null, text?: string | null, image?: { __typename?: 'MediaItem', sourceUrl?: string | null } | null } | null> | null } | null, buy?: { __typename?: 'Page_Page2db_Buy', title?: string | null, price?: string | null, installment?: string | null, privacy?: string | null, agreement?: string | null, conditions?: Array<{ __typename?: 'Page_Page2db_Buy_conditions', condition?: string | null, mentorName?: string | null, productId?: string | null, mentorImage?: { __typename?: 'MediaItem', sourceUrl?: string | null } | null } | null> | null, buttons?: Array<{ __typename?: 'Page_Page2db_Buy_buttons', title?: string | null, type?: string | null } | null> | null } | null, payment?: { __typename?: 'Page_Page2db_Payment', corporate?: { __typename?: 'Page_Page2db_Payment_Corporate', title?: string | null, description?: string | null, benefit?: string | null, buttons?: Array<{ __typename?: 'Page_Page2db_Payment_Corporate_buttons', title?: string | null, link?: string | null, type?: string | null } | null> | null } | null, installment?: { __typename?: 'Page_Page2db_Payment_Installment', title?: string | null, description?: string | null, button?: { __typename?: 'Page_Page2db_Payment_Installment_Button', title?: string | null, link?: string | null } | null } | null, tax?: { __typename?: 'Page_Page2db_Payment_Tax', title?: string | null, description?: string | null } | null } | null, feedback?: { __typename?: 'Page_Page2db_Feedback', title?: string | null, text?: string | null, image?: { __typename?: 'MediaItem', sourceUrl?: string | null } | null, button?: { __typename?: 'Page_Page2db_Feedback_Button', title?: string | null } | null, emails?: Array<{ __typename?: 'Page_Page2db_Feedback_emails', email?: string | null } | null> | null } | null, faq?: { __typename?: 'Page_Page2db_Faq', title?: string | null, list?: Array<{ __typename?: 'Page_Page2db_Faq_list', title?: string | null, description?: string | null } | null> | null } | null } | null } | null };


export const Page2DBQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Page2DBQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"102637","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"idType"},"value":{"kind":"EnumValue","value":"DATABASE_ID"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page2db"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"intro"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"buttons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"levels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"level"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title1"}},{"kind":"Field","name":{"kind":"Name","value":"image1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title2"}},{"kind":"Field","name":{"kind":"Name","value":"image2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"learning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"training"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"road"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"salary"}},{"kind":"Field","name":{"kind":"Name","value":"years"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"info"}}]}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"worksStudents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"worksTeachers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"teachers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"portfolio"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"buy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"installment"}},{"kind":"Field","name":{"kind":"Name","value":"conditions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"condition"}},{"kind":"Field","name":{"kind":"Name","value":"mentorName"}},{"kind":"Field","name":{"kind":"Name","value":"mentorImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"privacy"}},{"kind":"Field","name":{"kind":"Name","value":"agreement"}},{"kind":"Field","name":{"kind":"Name","value":"buttons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"payment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"corporate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"benefit"}},{"kind":"Field","name":{"kind":"Name","value":"buttons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"installment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tax"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"feedback"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"emails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"faq"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __usePage2DBQuery__
 *
 * To run a query within a React component, call `usePage2DBQuery` and pass it any options that fit your needs.
 * When your component renders, `usePage2DBQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePage2DBQuery({
 *   variables: {
 *   },
 * });
 */
export function usePage2DBQuery(baseOptions?: Apollo.QueryHookOptions<Page2DBQuery, Page2DBQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Page2DBQuery, Page2DBQueryVariables>(Page2DBQueryDocument, options);
      }
export function usePage2DBQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Page2DBQuery, Page2DBQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Page2DBQuery, Page2DBQueryVariables>(Page2DBQueryDocument, options);
        }
export type Page2DBQueryHookResult = ReturnType<typeof usePage2DBQuery>;
export type Page2DBQueryLazyQueryHookResult = ReturnType<typeof usePage2DBQueryLazyQuery>;
export type Page2DBQueryQueryResult = Apollo.QueryResult<Page2DBQuery, Page2DBQueryVariables>;