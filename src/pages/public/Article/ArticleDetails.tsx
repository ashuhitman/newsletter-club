import {
    ArrowLeft,
    Newspaper,
} from "lucide-react";

import {
    Link,
    useParams,
} from "react-router";


import { useGetArticleQuery } from "../../../features/article/articleApi";
import { NewsletterArticlePage } from "../../../components/newsletter/NewsletterCard/NewsletterArticlePage";
import { NewsletterPage } from "../Issues/NewsletterPage";


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
                    <NewsletterPage>
                        <NewsletterArticlePage article={article} />
                    </NewsletterPage>


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