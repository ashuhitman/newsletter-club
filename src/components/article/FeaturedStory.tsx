import {
    ArrowUpRight,
    CalendarDays,
    Newspaper,
} from "lucide-react";

import { Link } from "react-router";

import { getImageUrl } from "../../services/storageService";
import { useGetArticlesQuery } from "../../features/article/articleApi";



export function FeaturedStory() {
    const {
        data: articles = [],
        isLoading,
        isError,
    } = useGetArticlesQuery();


    /* ─────────────────────────────
       LOADING
    ───────────────────────────── */

    if (isLoading) {
        return (
            <section className="bg-slate-50 py-14 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <div className="h-3 w-32 animate-pulse rounded bg-slate-200" />

                    <div className="mt-3 h-8 w-64 animate-pulse rounded bg-slate-200" />

                    <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                        <div className="grid lg:grid-cols-2">

                            <div className="aspect-[16/10] animate-pulse bg-slate-200 lg:aspect-auto" />

                            <div className="space-y-4 p-6 sm:p-8 lg:p-10">
                                <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
                                <div className="h-8 w-4/5 animate-pulse rounded bg-slate-200" />
                                <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
                                <div className="h-4 w-5/6 animate-pulse rounded bg-slate-100" />
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        );
    }


    /* ─────────────────────────────
       ERROR
    ───────────────────────────── */

    if (isError) {
        return null;
    }


    /* ─────────────────────────────
       EMPTY
    ───────────────────────────── */

    if (articles.length === 0) {
        return null;
    }


    /*
     * For now the newest article is featured.
     *
     * Later we can add a "featured" column
     * to Appwrite and select it explicitly.
     */

    const article = [...articles]
        .sort((a, b) => {
            const dateA = a.publishedAt
                ? new Date(a.publishedAt).getTime()
                : 0;

            const dateB = b.publishedAt
                ? new Date(b.publishedAt).getTime()
                : 0;

            return dateB - dateA;
        })[0];


    return (
        <section className="bg-slate-50 py-14 sm:py-16 lg:py-20">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* ─────────────────────
                    HEADING
                ───────────────────── */}

                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                        Featured
                    </p>

                    <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                        Featured Story
                    </h2>
                </div>


                {/* ─────────────────────
                    STORY
                ───────────────────── */}

                <article className="group mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                    <div className="grid lg:grid-cols-2">

                        {/* ─────────────────
                            IMAGE
                        ───────────────── */}

                        <Link
                            to={`/articles/${article.$id}`}
                            className="relative block aspect-[16/10] overflow-hidden bg-slate-100 lg:aspect-auto lg:min-h-[390px]"
                        >

                            {article.coverFileId ? (
                                <img
                                    src={getImageUrl(
                                        article.coverFileId,
                                    )}
                                    alt={article.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <div className="flex h-full min-h-[260px] items-center justify-center bg-slate-100 lg:min-h-0">
                                    <Newspaper className="size-12 text-slate-300" />
                                </div>
                            )}


                            {/* Overlay */}

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />


                            {/* Category */}

                            <div className="absolute right-0 top-5">
                                <div className="rounded-l-md bg-amber-400 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-950 shadow-sm">
                                    {article.category}
                                </div>
                            </div>

                        </Link>


                        {/* ─────────────────
                            CONTENT
                        ───────────────── */}

                        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">

                            {/* Date */}

                            {article.publishedAt && (
                                <div className="flex items-center gap-2 text-xs text-slate-500">

                                    <CalendarDays className="size-3.5" />

                                    <time>
                                        {formatDate(
                                            article.publishedAt,
                                        )}
                                    </time>

                                </div>
                            )}


                            {/* Title */}

                            <h3 className="mt-4 text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-3xl">

                                <Link
                                    to={`/articles/${article.$id}`}
                                    className="transition-colors hover:text-blue-800"
                                >
                                    {article.title}
                                </Link>

                            </h3>


                            {/* Excerpt */}

                            {article.excerpt && (
                                <p className="mt-4 line-clamp-4 text-sm leading-7 text-slate-600 sm:text-base">
                                    {article.excerpt}
                                </p>
                            )}


                            {/* Author */}

                            <div className="mt-6">

                                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                                    {article.authorName}
                                </p>

                                <p className="mt-1 text-xs text-slate-500">
                                    {article.authorType}
                                </p>

                            </div>


                            {/* Read */}

                            <Link
                                to={`/articles/${article.$id}`}
                                className="mt-7 inline-flex w-fit cursor-pointer items-center gap-1.5 text-sm font-semibold text-blue-950 transition-colors hover:text-blue-700"
                            >
                                Read story

                                <ArrowUpRight className="size-4" />
                            </Link>

                        </div>

                    </div>

                </article>

            </div>

        </section>
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