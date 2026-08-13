import {
    ArrowUpRight,
    CalendarDays,
} from "lucide-react";

import { Link } from "react-router";

import { getImageUrl } from "../../services/storageService";
import type { Article } from "../../features/article/articleApi";




interface ArticleCardProps {
    article: Article;
}


export function ArticleCard({
    article,
}: ArticleCardProps) {
    return (
        <article
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >

            {/* ─────────────────────────
                IMAGE
            ───────────────────────── */}

            <Link
                to={`/articles/${article.$id}`}
                className="relative block aspect-[16/10] overflow-hidden bg-slate-100"
            >

                {article.coverFileId ? (
                    <img
                        src={getImageUrl(
                            article.coverFileId,
                        )}
                        alt={article.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center bg-slate-100">
                        <span className="text-sm text-slate-400">
                            No image
                        </span>
                    </div>
                )}


                {/* Image overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />


                {/* Category */}

                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-950 shadow-sm">
                    {article.category}
                </span>

            </Link>


            {/* ─────────────────────────
                CONTENT
            ───────────────────────── */}

            <div className="p-5">

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

                <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-6 tracking-tight text-slate-950">

                    <Link
                        to={`/articles/${article.$id}`}
                        className="transition-colors hover:text-blue-800"
                    >
                        {article.title}
                    </Link>

                </h3>


                {/* Excerpt */}

                {article.excerpt && (
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
                        {article.excerpt}
                    </p>
                )}


                {/* Read Story */}

                <Link
                    to={`/articles/${article.$id}`}
                    className="mt-5 inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-blue-950 transition-colors hover:text-blue-700"
                >
                    Read story

                    <ArrowUpRight className="size-4" />
                </Link>

            </div>

        </article>
    );
}


/* ─────────────────────────────────────
   DATE FORMAT
───────────────────────────────────── */

function formatDate(
    date: string,
) {
    return new Intl.DateTimeFormat(
        "en-IN",
        {
            day: "numeric",
            month: "long",
            year: "numeric",
        },
    ).format(new Date(date));
}