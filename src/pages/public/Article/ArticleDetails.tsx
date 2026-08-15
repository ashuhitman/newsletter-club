import {
    ArrowLeft,
    CalendarDays,
    UserRound,
    Newspaper,
} from "lucide-react";

import {
    Link,
    useParams,
} from "react-router";

import { getImageUrl } from "../../../services/storageService";
import { useGetArticleQuery } from "../../../features/article/articleApi";


export default function ArticleDetails() {
    const { articleId } = useParams();

    const {
        data: article,
        isLoading,
        isError,
    } = useGetArticleQuery(
        articleId ?? "",
        {
            skip: !articleId,
        },
    );

    /* ─────────────────────────────
       LOADING
    ───────────────────────────── */

    if (isLoading) {
        return (
            <main className="min-h-screen bg-slate-50">
                <div className="mx-auto max-w-4xl px-4 py-7 sm:px-6 lg:px-8">

                    {/* Back */}

                    <div className="h-4 w-32 animate-pulse rounded bg-slate-200" />

                    {/* Article Card */}

                    <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

                        {/* Cover */}

                        <div className="aspect-[16/9] animate-pulse bg-slate-200" />

                        {/* Content */}

                        <div className="space-y-4 p-5 sm:p-7">

                            <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />

                            <div className="h-7 w-4/5 animate-pulse rounded bg-slate-200" />

                            <div className="h-4 w-48 animate-pulse rounded bg-slate-100" />

                            <div className="space-y-2 pt-3">
                                <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
                                <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
                                <div className="h-4 w-5/6 animate-pulse rounded bg-slate-100" />
                            </div>

                        </div>

                    </div>

                </div>
            </main>
        );
    }

    /* ─────────────────────────────
       ERROR / NOT FOUND
    ───────────────────────────── */

    if (isError || !article) {
        return (
            <main className="min-h-screen bg-slate-50">

                <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 lg:px-8">

                    <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-white text-slate-300 shadow-sm ring-1 ring-slate-200">
                        <Newspaper className="size-6" />
                    </div>

                    <h1 className="mt-4 text-lg font-bold text-slate-900">
                        Article not found
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        The article you're looking for could not be found.
                    </p>

                    <Link
                        to="/articles"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-950 transition-colors hover:text-blue-700"
                    >
                        <span className="flex size-7 items-center justify-center rounded-lg border border-slate-200 bg-white hover:bg-slate-100">
                            <ArrowLeft className="size-3.5" />
                        </span>

                        All articles
                    </Link>

                </div>

            </main>
        );
    }

    /* ─────────────────────────────
       ARTICLE
    ───────────────────────────── */

    return (
        <main className="min-h-screen bg-slate-50">

            <div className="mx-auto max-w-4xl px-4 py-7 sm:px-6 sm:py-9 lg:px-8">

                {/* ─────────────────────
                    BACK
                ───────────────────── */}

                <Link
                    to="/articles"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-950"
                >
                    <span className="flex size-7 items-center justify-center rounded-lg border border-slate-200 bg-white transition-colors group-hover:bg-slate-100">
                        <ArrowLeft className="size-3.5" />
                    </span>

                    All articles
                </Link>

                {/* ─────────────────────
                    ARTICLE CARD
                ───────────────────── */}

                <article className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

                    {/* ─────────────────
                        COVER IMAGE
                    ───────────────── */}

                    {article.coverFileId ? (
                        <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">

                            <img
                                src={getImageUrl(
                                    article.coverFileId,
                                )}
                                alt={article.title}
                                className="h-full w-full object-cover"
                            />

                            {/* Category */}

                            <div className="absolute right-0 top-4">
                                <div className="rounded-l-md bg-amber-400 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-950 shadow-sm">
                                    {article.category}
                                </div>
                            </div>

                        </div>
                    ) : (
                        <div className="relative flex aspect-[16/9] items-center justify-center bg-slate-100">

                            <Newspaper className="size-12 text-slate-300" />

                            <div className="absolute right-0 top-4">
                                <div className="rounded-l-md bg-amber-400 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-950">
                                    {article.category}
                                </div>
                            </div>

                        </div>
                    )}

                    {/* ─────────────────
                        ARTICLE CONTENT
                    ───────────────── */}

                    <div className="p-5 sm:p-7">

                        {/* Category */}

                        <div className="flex items-center gap-2">

                            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                                {article.category}
                            </span>

                            {article.status && (
                                <>
                                    <span className="text-slate-300">
                                        •
                                    </span>

                                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold capitalize text-emerald-700">
                                        {article.status}
                                    </span>
                                </>
                            )}

                        </div>

                        {/* Title */}

                        <h1 className="mt-2.5 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl lg:text-3xl">
                            {article.title}
                        </h1>

                        {/* Author */}

                        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">

                            <div className="flex items-center gap-1.5 text-xs text-slate-600">

                                <UserRound className="size-3.5 text-slate-400" />

                                <span className="font-semibold">
                                    {article.authorName}
                                </span>

                            </div>

                            {article.authorType && (
                                <>
                                    <span className="text-slate-300">
                                        •
                                    </span>

                                    <span className="text-xs capitalize text-slate-500">
                                        {article.authorType}
                                    </span>
                                </>
                            )}

                        </div>

                        {/* Excerpt */}

                        {article.excerpt && (
                            <div className="mt-5 border-b border-slate-100 pb-5">

                                <p className="text-sm font-medium leading-6 text-slate-600 sm:text-base sm:leading-7">
                                    {article.excerpt}
                                </p>

                            </div>
                        )}

                        {/* ─────────────────
                            ARTICLE BODY
                        ───────────────── */}

                        <div className="mt-6">

                            <div className="whitespace-pre-line text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                                {article.content}
                            </div>

                        </div>

                        {/* ─────────────────
                            BOTTOM METADATA
                        ───────────────── */}

                        <div className="mt-8 border-t border-slate-100 pt-5">

                            <div className="flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">

                                {/* Published On */}

                                <div className="flex items-center gap-2">

                                    <CalendarDays className="size-3.5 text-slate-400" />

                                    <span>
                                        Published on{" "}
                                        <span className="font-medium text-slate-700">
                                            {article.publishedAt
                                                ? formatDate(
                                                    article.publishedAt,
                                                )
                                                : formatDate(
                                                    article.$createdAt,
                                                )}
                                        </span>
                                    </span>

                                </div>

                                {/* Published By */}

                                <div>
                                    Published by{" "}
                                    <span className="font-semibold text-slate-700">
                                        {article.createdBy}
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

                </article>

            </div>

        </main>
    );
}

/* ─────────────────────────────
   DATE FORMAT
───────────────────────────── */

function formatDate(date: string) {
    return new Intl.DateTimeFormat(
        "en-IN",
        {
            day: "numeric",
            month: "long",
            year: "numeric",
        },
    ).format(new Date(date));
}