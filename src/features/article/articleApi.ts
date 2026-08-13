import { baseApi } from "../../app/baseApi";
import { tablesDB } from "../../lib/appwrite";

import type { Models } from "appwrite";


const DATABASE_ID = "newsletter_db";
const TABLE_ID = "articles";


export interface Article extends Models.Row {
    title: string;
    slug: string;
    excerpt?: string;
    content: string;
    category: string;
    coverFileId?: string;
    authorName: string;
    authorType: string;
    newsletterId?: string;
    status: string;
    createdBy: string;
    publishedAt?: string;
}


export const articleApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        /* ─────────────────────────────
           GET ALL ARTICLES
        ───────────────────────────── */

        getArticles: builder.query<Article[], void>({
            queryFn: async () => {
                try {
                    const response = await tablesDB.listRows<Article>({
                        databaseId: DATABASE_ID,
                        tableId: TABLE_ID,
                    });

                    return {
                        data: response.rows,
                    };
                } catch (error) {
                    return {
                        error,
                    };
                }
            },

            providesTags: ["Article"],
        }),


        /* ─────────────────────────────
           GET SINGLE ARTICLE
        ───────────────────────────── */

        getArticle: builder.query<Article, string>({
            queryFn: async (id) => {
                try {
                    const response = await tablesDB.getRow<Article>({
                        databaseId: DATABASE_ID,
                        tableId: TABLE_ID,
                        rowId: id,
                    });

                    return {
                        data: response,
                    };
                } catch (error) {
                    return {
                        error,
                    };
                }
            },

            providesTags: (_result, _error, id) => [
                {
                    type: "Article",
                    id,
                },
            ],
        }),

    }),
});


export const {
    useGetArticlesQuery,
    useGetArticleQuery,
} = articleApi;