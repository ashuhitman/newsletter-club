import {
    CalendarDays,
    BookOpen,
    Sparkles,
} from "lucide-react";

import type { Article } from "../../../features/article/articleApi";
import { getImageUrl } from "../../../services/storageService";


interface NewsletterArticlePageProps {
    article: Article;
    compact?: boolean;
}


export function NewsletterArticlePage({
    article,
    compact = false,
}: NewsletterArticlePageProps) {

    return (
        <article
            className="
                relative
                h-full
                w-full
                overflow-hidden
                bg-[#eaf4ff]
            "
        >

            {/* ═════════════════════════════
                DECORATIVE BACKGROUND
            ═════════════════════════════ */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    size-40
                    rounded-full
                    border
                    border-blue-200/60
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-20
                    -left-20
                    size-44
                    rounded-full
                    bg-blue-200/30
                    blur-3xl
                "
            />


            <div
                className={`
                    relative
                    z-10
                    flex
                    h-full
                    flex-col
                    overflow-hidden

                    ${compact
                        ? "px-5 py-6"
                        : "px-8 py-10 sm:px-14 sm:py-12"
                    }
                `}
            >

                {/* ═════════════════════════
                    ARTICLE TYPE
                ═════════════════════════ */}

                <div
                    className="
                        flex
                        shrink-0
                        items-center
                        justify-between
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                        "
                    >

                        <div
                            className={`
                                flex
                                items-center
                                justify-center
                                rounded-full
                                bg-blue-950
                                text-white
                                shadow-sm

                                ${compact
                                    ? "size-5"
                                    : "size-8"
                                }
                            `}
                        >

                            <BookOpen
                                className={
                                    compact
                                        ? "size-2.5"
                                        : "size-4"
                                }
                            />

                        </div>


                        <p
                            className={`
                                font-black
                                uppercase
                                tracking-[0.2em]
                                text-amber-600

                                ${compact
                                    ? "text-[6px]"
                                    : "text-[9px]"
                                }
                            `}
                        >
                            Article
                        </p>

                    </div>


                    <Sparkles
                        className={`
                            text-amber-400

                            ${compact
                                ? "size-3"
                                : "size-5"
                            }
                        `}
                    />

                </div>


                {/* ═════════════════════════
                    TITLE
                ═════════════════════════ */}

                <h2
                    className={`
                        shrink-0
                        font-black
                        leading-[1.05]
                        tracking-tight
                        text-slate-950

                        ${compact
                            ? "mt-3 line-clamp-3 text-lg"
                            : "mt-4 text-3xl sm:text-4xl"
                        }
                    `}
                >
                    {article.title}
                </h2>


                {/* ═════════════════════════
                    COVER IMAGE
                ═════════════════════════ */}

                {article.coverFileId && (

                    <div
                        className={`
                            relative
                            w-full
                            shrink-0
                            overflow-hidden
                            rounded-xl
                            bg-slate-200
                            shadow-md

                            ${compact
                                ? "mt-4 h-[28%]"
                                : "mt-6 h-[34%]"
                            }
                        `}
                    >

                        <img
                            src={getImageUrl(
                                article.coverFileId,
                            )}
                            alt={article.title}
                            className="
                                h-full
                                w-full
                                object-cover
                                transition-transform
                                duration-500
                                hover:scale-105
                            "
                        />


                        {/* IMAGE OVERLAY */}

                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-blue-950/50
                                via-transparent
                                to-transparent
                            "
                        />


                        {/* IMAGE LABEL */}

                        <div
                            className="
                                absolute
                                bottom-3
                                left-3
                                flex
                                items-center
                                gap-1.5
                                rounded-full
                                bg-white/90
                                px-2.5
                                py-1
                                shadow-sm
                                backdrop-blur-sm
                            "
                        >

                            <BookOpen
                                className="
                                    size-3
                                    text-blue-950
                                "
                            />

                            <span
                                className="
                                    text-[7px]
                                    font-bold
                                    uppercase
                                    tracking-wider
                                    text-blue-950
                                "
                            >
                                School Stories
                            </span>

                        </div>

                    </div>

                )}


                {/* ═════════════════════════
                    AUTHOR / DATE
                ═════════════════════════ */}

                <div
                    className={`
                        flex
                        shrink-0
                        flex-wrap
                        items-center
                        gap-2
                        text-slate-400

                        ${compact
                            ? "mt-3 text-[7px]"
                            : "mt-4 text-xs"
                        }
                    `}
                >

                    {article.authorName && (

                        <span>
                            Published by{" "}

                            <span
                                className="
                                    font-semibold
                                    text-slate-600
                                "
                            >
                                {article.authorName}
                            </span>
                        </span>

                    )}


                    {article.authorName &&
                        article.publishedAt && (
                            <span>
                                •
                            </span>
                        )}


                    {article.publishedAt && (

                        <span
                            className="
                                flex
                                items-center
                                gap-1
                            "
                        >

                            <CalendarDays
                                className={
                                    compact
                                        ? "size-2.5"
                                        : "size-3.5"
                                }
                            />

                            <span>
                                Published at{" "}
                            </span>

                            <span
                                className="
                                    font-semibold
                                    text-slate-600
                                "
                            >
                                {formatDate(
                                    article.publishedAt,
                                )}
                            </span>

                        </span>

                    )}

                </div>


                {/* ═════════════════════════
                    DESCRIPTION
                ═════════════════════════ */}

                {article.excerpt && (

                    <div
                        className={`
                            relative
                            shrink-0

                            ${compact
                                ? "mt-3"
                                : "mt-5"
                            }
                        `}
                    >

                        {/* Accent line */}

                        <div
                            className="
                                absolute
                                left-0
                                top-0
                                h-full
                                w-1
                                rounded-full
                                bg-amber-400
                            "
                        />


                        <p
                            className={`
                                text-slate-600

                                ${compact
                                    ? "line-clamp-4 pl-3 text-[8px] leading-4"
                                    : "pl-4 text-sm leading-6"
                                }
                            `}
                        >
                            {article.excerpt}
                        </p>

                    </div>

                )}


                {/* ═════════════════════════
                    FULL ARTICLE CONTENT
                ═════════════════════════ */}

                {!compact &&
                    article.content && (

                        <div
                            className="
                                mt-6
                                min-h-0
                                flex-1
                                overflow-hidden
                            "
                        >

                            <div
                                className="
                                    h-full
                                    overflow-hidden
                                    whitespace-pre-line
                                    text-sm
                                    leading-7
                                    text-slate-700
                                "
                            >
                                {article.content}
                            </div>

                        </div>

                    )}


                {/* ═════════════════════════
                    FOOTER
                ═════════════════════════ */}

                {!compact && (

                    <div
                        className="
                            mt-4
                            flex
                            shrink-0
                            items-center
                            justify-between
                            border-t
                            border-blue-200
                            pt-3
                        "
                    >

                        <span
                            className="
                                text-[8px]
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-slate-400
                            "
                        >
                            PM SHRI GSSS DHANAU
                        </span>


                        <span
                            className="
                                text-[8px]
                                font-semibold
                                text-amber-600
                            "
                        >
                            School Newsletter
                        </span>

                    </div>

                )}

            </div>

        </article>
    );
}


/* ─────────────────────────────────────
   DATE
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
    ).format(
        new Date(date),
    );
}