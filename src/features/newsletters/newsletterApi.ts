import { baseApi } from "../../app/baseApi";

import {
    ID,
    tablesDB,
} from "../../lib/appwrite";

import type { Models } from "appwrite";


/* ─────────────────────────────────────
   TYPES
───────────────────────────────────── */

export type NewsletterStatus =
    | "draft"
    | "published";


export interface Newsletter
    extends Models.Row {
    title: string;
    slug: string;
    issue: string;

    description?: string | null;

    coverFileId?: string | null;

    status: NewsletterStatus;

    publishedAt?: string | null;

    createdBy: string;
}


export interface CreateNewsletterRequest {
    title: string;
    slug: string;
    issue: string;

    description?: string;

    coverFileId?: string;

    status: NewsletterStatus;

    publishedAt?: string | null;

    createdBy: string;
}


export interface UpdateNewsletterRequest {
    id: string;

    data: Partial<CreateNewsletterRequest>;
}


/* ─────────────────────────────────────
   APPWRITE CONFIG
───────────────────────────────────── */

const DATABASE_ID = "newsletter_db";

const TABLE_ID = "newsletters";


/* ─────────────────────────────────────
   NEWSLETTER API
───────────────────────────────────── */

export const newsletterApi =
    baseApi.injectEndpoints({
        endpoints: (builder) => ({

            /* ─────────────────────────────
               GET ALL NEWSLETTERS
            ───────────────────────────── */

            getNewsletters:
                builder.query<
                    Newsletter[],
                    void
                >({
                    async queryFn() {
                        try {
                            const response =
                                await tablesDB.listRows<Newsletter>({
                                    databaseId:
                                        DATABASE_ID,

                                    tableId:
                                        TABLE_ID,
                                });

                            return {
                                data: response.rows,
                            };

                        } catch (error) {
                            return {
                                error:
                                    normalizeError(
                                        error,
                                    ),
                            };
                        }
                    },

                    providesTags: (
                        result,
                    ) =>
                        result
                            ? [
                                ...result.map(
                                    (
                                        newsletter,
                                    ) => ({
                                        type:
                                            "Newsletter" as const,

                                        id:
                                            newsletter.$id,
                                    }),
                                ),

                                {
                                    type:
                                        "Newsletter" as const,

                                    id: "LIST",
                                },
                            ]
                            : [
                                {
                                    type:
                                        "Newsletter" as const,

                                    id: "LIST",
                                },
                            ],
                }),


            /* ─────────────────────────────
               GET SINGLE NEWSLETTER
            ───────────────────────────── */

            getNewsletter:
                builder.query<
                    Newsletter,
                    string
                >({
                    async queryFn(id) {
                        try {
                            const response =
                                await tablesDB.getRow<Newsletter>({
                                    databaseId:
                                        DATABASE_ID,

                                    tableId:
                                        TABLE_ID,

                                    rowId: id,
                                });

                            return {
                                data: response,
                            };

                        } catch (error) {
                            return {
                                error:
                                    normalizeError(
                                        error,
                                    ),
                            };
                        }
                    },

                    providesTags: (
                        _result,
                        _error,
                        id,
                    ) => [
                            {
                                type:
                                    "Newsletter" as const,

                                id,
                            },
                        ],
                }),


            /* ─────────────────────────────
               CREATE NEWSLETTER
            ───────────────────────────── */

            createNewsletter:
                builder.mutation<
                    Newsletter,
                    CreateNewsletterRequest
                >({
                    async queryFn(data) {
                        try {
                            const response =
                                await tablesDB.createRow<Newsletter>({
                                    databaseId:
                                        DATABASE_ID,

                                    tableId:
                                        TABLE_ID,

                                    rowId:
                                        ID.unique(),

                                    data,
                                });

                            return {
                                data: response,
                            };

                        } catch (error) {
                            return {
                                error:
                                    normalizeError(
                                        error,
                                    ),
                            };
                        }
                    },

                    invalidatesTags: [
                        {
                            type:
                                "Newsletter" as const,

                            id: "LIST",
                        },
                    ],
                }),


            /* ─────────────────────────────
               UPDATE NEWSLETTER
            ───────────────────────────── */

            updateNewsletter:
                builder.mutation<
                    Newsletter,
                    UpdateNewsletterRequest
                >({
                    async queryFn({
                        id,
                        data,
                    }) {
                        try {
                            const response =
                                await tablesDB.updateRow<Newsletter>({
                                    databaseId:
                                        DATABASE_ID,

                                    tableId:
                                        TABLE_ID,

                                    rowId: id,

                                    data,
                                });

                            return {
                                data: response,
                            };

                        } catch (error) {
                            return {
                                error:
                                    normalizeError(
                                        error,
                                    ),
                            };
                        }
                    },

                    invalidatesTags: (
                        _result,
                        _error,
                        { id },
                    ) => [
                            {
                                type:
                                    "Newsletter" as const,

                                id: "LIST",
                            },

                            {
                                type:
                                    "Newsletter" as const,

                                id,
                            },
                        ],
                }),


            /* ─────────────────────────────
               PUBLISH NEWSLETTER
            ───────────────────────────── */

            publishNewsletter:
                builder.mutation<
                    Newsletter,
                    string
                >({
                    async queryFn(id) {
                        try {
                            const response =
                                await tablesDB.updateRow<Newsletter>({
                                    databaseId:
                                        DATABASE_ID,

                                    tableId:
                                        TABLE_ID,

                                    rowId: id,

                                    data: {
                                        status:
                                            "published",

                                        publishedAt:
                                            new Date().toISOString(),
                                    },
                                });

                            return {
                                data: response,
                            };

                        } catch (error) {
                            return {
                                error:
                                    normalizeError(
                                        error,
                                    ),
                            };
                        }
                    },

                    invalidatesTags: (
                        _result,
                        _error,
                        id,
                    ) => [
                            {
                                type:
                                    "Newsletter" as const,

                                id: "LIST",
                            },

                            {
                                type:
                                    "Newsletter" as const,

                                id,
                            },
                        ],
                }),


            /* ─────────────────────────────
               DELETE NEWSLETTER
            ───────────────────────────── */

            deleteNewsletter:
                builder.mutation<
                    string,
                    string
                >({
                    async queryFn(id) {
                        try {
                            await tablesDB.deleteRow({
                                databaseId:
                                    DATABASE_ID,

                                tableId:
                                    TABLE_ID,

                                rowId: id,
                            });

                            return {
                                data: id,
                            };

                        } catch (error) {
                            return {
                                error:
                                    normalizeError(
                                        error,
                                    ),
                            };
                        }
                    },

                    invalidatesTags: (
                        _result,
                        _error,
                        id,
                    ) => [
                            {
                                type:
                                    "Newsletter" as const,

                                id: "LIST",
                            },

                            {
                                type:
                                    "Newsletter" as const,

                                id,
                            },
                        ],
                }),
        }),
    });


/* ─────────────────────────────────────
   HOOKS
───────────────────────────────────── */

export const {
    useGetNewslettersQuery,
    useGetNewsletterQuery,

    useCreateNewsletterMutation,
    useUpdateNewsletterMutation,

    usePublishNewsletterMutation,

    useDeleteNewsletterMutation,
} = newsletterApi;


/* ─────────────────────────────────────
   ERROR NORMALIZER
───────────────────────────────────── */

function normalizeError(
    error: unknown,
) {
    if (
        error &&
        typeof error === "object" &&
        "message" in error
    ) {
        return {
            status:
                "CUSTOM_ERROR" as const,

            error: String(
                (
                    error as {
                        message: unknown;
                    }
                ).message,
            ),
        };
    }

    return {
        status:
            "CUSTOM_ERROR" as const,

        error:
            "Something went wrong.",
    };
}