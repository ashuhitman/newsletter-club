import {
    ArrowLeft,
    CalendarDays,
    Newspaper,
} from "lucide-react";

import {
    Link,
    useParams,
} from "react-router";
import { useGetArticleQuery } from "../../../features/article/articleApi";
import { getImageUrl } from "../../../services/storageService";




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
                <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">

                    {/* Back */}

                    <div className="h-5 w-32 animate-pulse rounded bg-slate-200" />


                    {/* Article */}

                    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">

                        <div className="aspect-[16/9] animate-pulse bg-slate-200" />

                        <div className="space-y-4 p-6 sm:p-8 lg:p-10">

                            <div className="h-5 w-28 animate-pulse rounded bg-slate-200" />

                            <div className="h-9 w-4/5 animate-pulse rounded bg-slate-200" />

                            <div className="h-4 w-48 animate-pulse rounded bg-slate-100" />

                            <div className="space-y-2 pt-4">
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

                <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">

                    <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-white text-slate-300 shadow-sm ring-1 ring-slate-200">
                        <Newspaper className="size-7" />
                    </div>

                    <h1 className="mt-5 text-xl font-bold tracking-tight text-slate-900">
                        Article not found
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                        The article you're looking for could not be found.
                    </p>

                    <Link
                        to="/articles"
                        className="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-blue-950 transition-colors hover:text-blue-700"
                    >
                        <span className="flex size-8 items-center justify-center rounded-lg border border-slate-200 bg-white transition-colors hover:bg-slate-100">
                            <ArrowLeft className="size-4" />
                        </span>

                        All stories
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

            <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">

                {/* ─────────────────────
                    BACK
                ───────────────────── */}

                <Link
                    to="/articles"
                    className="group inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-950"
                >
                    <span className="flex size-8 items-center justify-center rounded-lg border border-slate-200 bg-white transition-colors group-hover:border-slate-300 group-hover:bg-slate-100">
                        <ArrowLeft className="size-4" />
                    </span>

                    All stories
                </Link>


                {/* ─────────────────────
                    ARTICLE CARD
                ───────────────────── */}

                <article className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                    {/* ─────────────────
                        COVER IMAGE
                    ───────────────── */}

                    {article.coverFileId ? (
                        <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 sm:aspect-[16/8]">

                            <img
                                src={getImageUrl(
                                    article.coverFileId,
                                )}
                                alt={article.title}
                                className="h-full w-full object-cover"
                            />

                            {/* Category */}

                            <div className="absolute right-0 top-5">
                                <div className="rounded-l-md bg-amber-400 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-950 shadow-sm">
                                    {article.category}
                                </div>
                            </div>

                        </div>
                    ) : (
                        <div className="relative flex aspect-[16/9] items-center justify-center bg-slate-100 sm:aspect-[16/8]">

                            <Newspaper className="size-12 text-slate-300" />

                            <div className="absolute right-0 top-5">
                                <div className="rounded-l-md bg-amber-400 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-950 shadow-sm">
                                    {article.category}
                                </div>
                            </div>

                        </div>
                    )}


                    {/* ─────────────────
                        ARTICLE CONTENT
                    ───────────────── */}

                    <div className="p-6 sm:p-8 lg:p-10">

                        {/* Date */}

                        {article.publishedAt && (
                            <div className="flex items-center gap-2 text-sm text-slate-500">

                                <CalendarDays className="size-4" />

                                <time>
                                    {formatDate(
                                        article.publishedAt,
                                    )}
                                </time>

                            </div>
                        )}


                        {/* Title */}

                        <h1 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
                            {article.title}
                        </h1>


                        {/* Author */}

                        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">

                            <span className="text-sm font-semibold text-amber-600">
                                {article.authorName}
                            </span>

                            <span className="text-slate-300">
                                •
                            </span>

                            <span className="text-sm text-slate-500">
                                {article.authorType}
                            </span>

                        </div>


                        {/* Excerpt */}

                        {article.excerpt && (
                            <p className="mt-6 border-b border-slate-100 pb-6 text-base font-medium leading-7 text-slate-600 sm:text-lg">
                                {article.excerpt}
                            </p>
                        )}


                        {/* Content */}

                        <div className="mt-7">

                            <div className="whitespace-pre-line text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                                {article.content}
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