import { baseApi } from "../../app/baseApi";
import { tablesDB } from "../../lib/appwrite";

import type { Models } from "appwrite";


/* ─────────────────────────────────────
   TYPES
───────────────────────────────────── */

export interface Achievement
    extends Models.Row {
    title: string;
    studentName: string;
    achievement: string;
    category: string;
    description?: string | null;
    imageFileId?: string | null;
    achievementDate?: string | null;
    status: string;
    createdBy: string;
}


/* ─────────────────────────────────────
   APPWRITE
───────────────────────────────────── */

const DATABASE_ID = "newsletter_db";
const TABLE_ID = "achievements";


/* ─────────────────────────────────────
   API
───────────────────────────────────── */

export const achievementApi =
    baseApi.injectEndpoints({
        endpoints: (builder) => ({

            /* ─────────────────────────
               GET ACHIEVEMENTS
            ───────────────────────── */

            getAchievements:
                builder.query<
                    Achievement[],
                    void
                >({
                    async queryFn() {
                        try {
                            const response =
                                await tablesDB.listRows<Achievement>({
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
                                        achievement,
                                    ) => ({
                                        type:
                                            "Achievement" as const,

                                        id:
                                            achievement.$id,
                                    }),
                                ),

                                {
                                    type:
                                        "Achievement" as const,

                                    id: "LIST",
                                },
                            ]
                            : [
                                {
                                    type:
                                        "Achievement" as const,

                                    id: "LIST",
                                },
                            ],
                }),


            /* ─────────────────────────
               GET SINGLE ACHIEVEMENT
            ───────────────────────── */

            getAchievement:
                builder.query<
                    Achievement,
                    string
                >({
                    async queryFn(id) {
                        try {
                            const response =
                                await tablesDB.getRow<Achievement>({
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
                                    "Achievement" as const,

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
    useGetAchievementsQuery,
    useGetAchievementQuery,
} = achievementApi;


/* ─────────────────────────────────────
   ERROR
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
            "Unable to load achievements.",
    };
}