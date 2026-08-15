import {
    ArrowLeft,
    CalendarDays,
    ChevronLeft,
    ChevronRight,
    Trophy,
    BookOpen,
    Newspaper,
} from "lucide-react";

import {
    Link,
    useParams,
} from "react-router";
import { useGetArticlesQuery } from "../features/article/articleApi";
import { useGetAchievementsQuery } from "../features/achievements/achievementApi";
import { createNewsletterIssues } from "../utils/newsletterUtils";
import { getImageUrl } from "../services/storageService";




export function IssueDetails() {

    const {
        year: yearParam,
        month: monthParam,
    } = useParams();


    const year = Number(yearParam);
    const month = Number(monthParam);


    /* ─────────────────────────────
       LOAD DATA
    ───────────────────────────── */

    const {
        data: articles = [],
        isLoading: articlesLoading,
        isError: articlesError,
    } = useGetArticlesQuery();


    const {
        data: achievements = [],
        isLoading: achievementsLoading,
        isError: achievementsError,
    } = useGetAchievementsQuery();


    /* ─────────────────────────────
       CREATE ISSUES
    ───────────────────────────── */

    const issues = createNewsletterIssues(
        articles,
        achievements,
    );


    /* ─────────────────────────────
       FIND CURRENT ISSUE
    ───────────────────────────── */

    const issue = issues.find(
        (item) =>
            item.year === year &&
            item.month === month,
    );


    const isLoading =
        articlesLoading ||
        achievementsLoading;


    const isError =
        articlesError ||
        achievementsError;


    /* ─────────────────────────────
       MONTH NAME
    ───────────────────────────── */

    const monthName =
        !Number.isNaN(month)
            ? new Intl.DateTimeFormat(
                "en-IN",
                {
                    month: "long",
                },
            ).format(
                new Date(
                    year,
                    month - 1,
                    1,
                ),
            )
            : "";


    /* ─────────────────────────────
       LOADING
    ───────────────────────────── */

    if (isLoading) {

        return (
            <main className="min-h-screen bg-slate-100">

                <div className="mx-auto max-w-5xl px-4 py-10">

                    <div
                        className="
                            h-[700px]
                            animate-pulse
                            rounded-lg
                            bg-slate-200
                        "
                    />

                </div>

            </main>
        );
    }


    /* ─────────────────────────────
       ERROR / NOT FOUND
    ───────────────────────────── */

    if (
        isError ||
        !issue
    ) {

        return (
            <main className="min-h-screen bg-slate-50">

                <div
                    className="
                        mx-auto
                        max-w-2xl
                        px-4
                        py-20
                        text-center
                    "
                >

                    <div
                        className="
                            mx-auto
                            flex
                            size-14
                            items-center
                            justify-center
                            rounded-2xl
                            bg-white
                            text-slate-300
                            shadow-sm
                            ring-1
                            ring-slate-200
                        "
                    >

                        <Newspaper
                            className="size-7"
                        />

                    </div>


                    <h1
                        className="
                            mt-5
                            text-xl
                            font-bold
                            text-slate-900
                        "
                    >
                        Issue not found
                    </h1>


                    <p
                        className="
                            mt-2
                            text-sm
                            leading-6
                            text-slate-500
                        "
                    >
                        The newsletter issue you're
                        looking for could not be found.
                    </p>


                    <Link
                        to="/issues"
                        className="
                            mt-6
                            inline-flex
                            items-center
                            gap-2
                            text-sm
                            font-semibold
                            text-blue-950
                            hover:text-blue-700
                        "
                    >

                        <ArrowLeft
                            className="size-4"
                        />

                        All issues

                    </Link>

                </div>

            </main>
        );
    }


    const issueText =
        String(
            issue.issueNumber,
        ).padStart(
            2,
            "0",
        );


    return (
        <main
            className="
                min-h-screen
                bg-slate-200
            "
        >

            {/* ═════════════════════════════
                TOP BAR
            ═════════════════════════════ */}

            <div
                className="
                    sticky
                    top-0
                    z-50
                    border-b
                    border-slate-200
                    bg-white/95
                    backdrop-blur
                "
            >

                <div
                    className="
                        mx-auto
                        flex
                        max-w-5xl
                        items-center
                        justify-between
                        gap-4
                        px-4
                        py-3
                        sm:px-6
                    "
                >

                    <Link
                        to="/issues"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            text-sm
                            font-semibold
                            text-slate-600
                            transition-colors
                            hover:text-slate-950
                        "
                    >

                        <span
                            className="
                                flex
                                size-8
                                items-center
                                justify-center
                                rounded-lg
                                border
                                border-slate-200
                                bg-white
                            "
                        >

                            <ArrowLeft
                                className="size-4"
                            />

                        </span>

                        <span className="hidden sm:inline">
                            All issues
                        </span>

                    </Link>


                    <div
                        className="
                            text-center
                        "
                    >

                        <p
                            className="
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-slate-400
                            "
                        >
                            School Newsletter
                        </p>


                        <p
                            className="
                                text-sm
                                font-bold
                                text-blue-950
                            "
                        >
                            {monthName} {year}
                        </p>

                    </div>


                    <div
                        className="
                            text-right
                        "
                    >

                        <p
                            className="
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-wider
                                text-slate-400
                            "
                        >
                            Issue
                        </p>


                        <p
                            className="
                                text-sm
                                font-black
                                text-blue-950
                            "
                        >
                            #{issueText}
                        </p>

                    </div>

                </div>

            </div>


            {/* ═════════════════════════════
                MAGAZINE
            ═════════════════════════════ */}

            <div
                className="
                    mx-auto
                    max-w-4xl
                    px-3
                    py-6
                    sm:px-6
                    sm:py-10
                "
            >

                {/* ═════════════════════════
                    PAGE 1
                    COVER
                ═════════════════════════ */}

                <section
                    className="
                        relative
                        flex
                        min-h-[650px]
                        flex-col
                        items-center
                        justify-between
                        overflow-hidden
                        rounded-sm
                        bg-gradient-to-br
                        from-slate-50
                        to-slate-300
                        px-6
                        py-12
                        text-center
                        shadow-[0_20px_50px_rgba(15,23,42,0.20)]
                        sm:min-h-[850px]
                        sm:px-12
                        sm:py-20
                    "
                >

                    {/* DECORATION */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_50%)]
                        "
                    />


                    {/* SCHOOL */}

                    <div
                        className="
                            relative
                            z-10
                        "
                    >

                        <p
                            className="
                                text-xs
                                font-black
                                uppercase
                                tracking-[0.28em]
                                text-slate-600
                                sm:text-sm
                            "
                        >
                            PM SHRI GSSS DHANAU
                        </p>


                        <div
                            className="
                                mx-auto
                                mt-3
                                h-px
                                w-20
                                bg-amber-400
                            "
                        />


                        <p
                            className="
                                mt-3
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.25em]
                                text-amber-600
                                sm:text-xs
                            "
                        >
                            Monthly School Newsletter
                        </p>

                    </div>


                    {/* TITLE */}

                    <div
                        className="
                            relative
                            z-10
                        "
                    >

                        <p
                            className="
                                text-sm
                                font-semibold
                                uppercase
                                tracking-[0.25em]
                                text-slate-500
                            "
                        >
                            Newsletter
                        </p>


                        <h1
                            className="
                                mt-3
                                font-serif
                                text-5xl
                                font-black
                                tracking-tight
                                text-blue-950
                                sm:text-7xl
                            "
                        >
                            {monthName}
                        </h1>


                        <p
                            className="
                                mt-2
                                text-3xl
                                font-bold
                                text-slate-500
                                sm:text-5xl
                            "
                        >
                            {year}
                        </p>

                    </div>


                    {/* ISSUE */}

                    <div
                        className="
                            relative
                            z-10
                        "
                    >

                        <div
                            className="
                                mx-auto
                                h-px
                                w-24
                                bg-amber-400
                            "
                        />


                        <p
                            className="
                                mt-5
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.25em]
                                text-slate-400
                            "
                        >
                            Issue
                        </p>


                        <p
                            className="
                                mt-1
                                text-3xl
                                font-black
                                text-blue-950
                            "
                        >
                            #{issueText}
                        </p>

                    </div>


                    {/* COVER FOOTER */}

                    <p
                        className="
                            relative
                            z-10
                            text-[10px]
                            uppercase
                            tracking-[0.18em]
                            text-slate-400
                        "
                    >
                        Activities • Articles • Achievements
                    </p>

                </section>


                {/* ═════════════════════════
                    PAGE 2
                    CONTENTS
                ═════════════════════════ */}

                <section
                    className="
                        mt-8
                        min-h-[650px]
                        rounded-sm
                        bg-[#faf8f1]
                        px-6
                        py-10
                        shadow-[0_20px_50px_rgba(15,23,42,0.15)]
                        sm:min-h-[850px]
                        sm:px-14
                        sm:py-16
                    "
                >

                    <div
                        className="
                            text-center
                        "
                    >

                        <p
                            className="
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.25em]
                                text-slate-400
                            "
                        >
                            {monthName} {year}
                        </p>


                        <h2
                            className="
                                mt-3
                                font-serif
                                text-3xl
                                font-bold
                                text-slate-900
                                sm:text-4xl
                            "
                        >
                            Contents
                        </h2>


                        <div
                            className="
                                mx-auto
                                mt-3
                                h-px
                                w-16
                                bg-amber-400
                            "
                        />

                    </div>


                    {/* ARTICLES */}

                    {issue.articles.length > 0 && (

                        <div
                            className="
                                mx-auto
                                mt-10
                                max-w-2xl
                            "
                        >

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    border-b
                                    border-slate-300
                                    pb-2
                                "
                            >

                                <BookOpen
                                    className="
                                        size-4
                                        text-amber-600
                                    "
                                />

                                <h3
                                    className="
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.18em]
                                        text-blue-950
                                    "
                                >
                                    Articles
                                </h3>

                            </div>


                            <div
                                className="
                                    mt-4
                                    space-y-4
                                "
                            >

                                {issue.articles.map(
                                    (
                                        article,
                                        index,
                                    ) => (

                                        <div
                                            key={
                                                article.$id ??
                                                index
                                            }
                                            className="
                                                flex
                                                items-start
                                                gap-4
                                            "
                                        >

                                            <span
                                                className="
                                                    w-6
                                                    shrink-0
                                                    text-xs
                                                    font-bold
                                                    text-slate-400
                                                "
                                            >
                                                {String(
                                                    index + 1,
                                                ).padStart(
                                                    2,
                                                    "0",
                                                )}
                                            </span>


                                            <div
                                                className="
                                                    flex-1
                                                "
                                            >

                                                <p
                                                    className="
                                                        text-sm
                                                        font-semibold
                                                        text-slate-800
                                                    "
                                                >
                                                    {
                                                        article.title
                                                    }
                                                </p>


                                                {article.excerpt && (

                                                    <p
                                                        className="
                                                            mt-1
                                                            text-xs
                                                            leading-5
                                                            text-slate-500
                                                        "
                                                    >
                                                        {
                                                            article.excerpt
                                                        }
                                                    </p>

                                                )}

                                            </div>

                                        </div>

                                    ),
                                )}

                            </div>

                        </div>

                    )}


                    {/* ACHIEVEMENTS */}

                    {issue.achievements.length > 0 && (

                        <div
                            className="
                                mx-auto
                                mt-10
                                max-w-2xl
                            "
                        >

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    border-b
                                    border-slate-300
                                    pb-2
                                "
                            >

                                <Trophy
                                    className="
                                        size-4
                                        text-amber-600
                                    "
                                />

                                <h3
                                    className="
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.18em]
                                        text-blue-950
                                    "
                                >
                                    Achievements
                                </h3>

                            </div>


                            <div
                                className="
                                    mt-4
                                    space-y-4
                                "
                            >

                                {issue.achievements.map(
                                    (
                                        achievement,
                                        index,
                                    ) => (

                                        <div
                                            key={
                                                achievement.$id ??
                                                index
                                            }
                                            className="
                                                flex
                                                items-start
                                                gap-4
                                            "
                                        >

                                            <span
                                                className="
                                                    w-6
                                                    shrink-0
                                                    text-xs
                                                    font-bold
                                                    text-slate-400
                                                "
                                            >
                                                {String(
                                                    issue.articles.length +
                                                    index +
                                                    1,
                                                ).padStart(
                                                    2,
                                                    "0",
                                                )}
                                            </span>


                                            <div
                                                className="
                                                    flex-1
                                                "
                                            >

                                                <p
                                                    className="
                                                        text-sm
                                                        font-semibold
                                                        text-slate-800
                                                    "
                                                >
                                                    {
                                                        achievement.title
                                                    }
                                                </p>


                                                <p
                                                    className="
                                                        mt-1
                                                        text-xs
                                                        text-slate-500
                                                    "
                                                >
                                                    {
                                                        achievement.studentName
                                                    }
                                                </p>

                                            </div>

                                        </div>

                                    ),
                                )}

                            </div>

                        </div>

                    )}

                </section>


                {/* ═════════════════════════
                    ARTICLES
                ═════════════════════════ */}

                {issue.articles.map(
                    (
                        article,
                        index,
                    ) => (

                        <article
                            key={
                                article.$id ??
                                `article-${index}`
                            }
                            className="
                                mt-8
                                overflow-hidden
                                rounded-sm
                                bg-white
                                shadow-[0_20px_50px_rgba(15,23,42,0.12)]
                            "
                        >

                            {/* ARTICLE HEADER */}

                            <div
                                className="
                                    border-b
                                    border-slate-200
                                    px-6
                                    py-8
                                    sm:px-14
                                    sm:py-12
                                "
                            >

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >

                                    <span
                                        className="
                                            text-xs
                                            font-bold
                                            text-amber-600
                                        "
                                    >
                                        ARTICLE
                                    </span>


                                    <span
                                        className="
                                            text-xs
                                            text-slate-300
                                        "
                                    >
                                        |
                                    </span>


                                    <span
                                        className="
                                            text-xs
                                            text-slate-400
                                        "
                                    >
                                        {String(
                                            index + 1,
                                        ).padStart(
                                            2,
                                            "0",
                                        )}
                                    </span>

                                </div>


                                <h2
                                    className="
                                        mt-4
                                        font-serif
                                        text-2xl
                                        font-bold
                                        leading-tight
                                        text-slate-950
                                        sm:text-4xl
                                    "
                                >
                                    {
                                        article.title
                                    }
                                </h2>


                                {article.excerpt && (

                                    <p
                                        className="
                                            mt-4
                                            max-w-2xl
                                            text-sm
                                            leading-6
                                            text-slate-500
                                            sm:text-base
                                        "
                                    >
                                        {
                                            article.excerpt
                                        }
                                    </p>

                                )}


                                <div
                                    className="
                                        mt-5
                                        flex
                                        flex-wrap
                                        items-center
                                        gap-x-4
                                        gap-y-2
                                        text-xs
                                        text-slate-400
                                    "
                                >

                                    <span>
                                        {article.authorName}
                                    </span>


                                    <span>
                                        {article.authorType}
                                    </span>


                                    {article.publishedAt && (

                                        <span
                                            className="
                                                flex
                                                items-center
                                                gap-1
                                            "
                                        >

                                            <CalendarDays
                                                className="size-3"
                                            />

                                            {formatDate(
                                                article.publishedAt,
                                            )}

                                        </span>

                                    )}

                                </div>

                            </div>


                            {/* ARTICLE CONTENT */}

                            <div
                                className="
                                    px-6
                                    py-8
                                    sm:px-14
                                    sm:py-12
                                "
                            >

                                <div
                                    className="
                                        whitespace-pre-line
                                        text-sm
                                        leading-7
                                        text-slate-700
                                        sm:text-base
                                        sm:leading-8
                                    "
                                >
                                    {
                                        article.content
                                    }
                                </div>

                            </div>

                        </article>

                    ),
                )}


                {/* ═════════════════════════
                    ACHIEVEMENTS
                ═════════════════════════ */}

                {issue.achievements.map(
                    (
                        achievement,
                        index,
                    ) => (

                        <article
                            key={
                                achievement.$id ??
                                `achievement-${index}`
                            }
                            className="
                                mt-8
                                overflow-hidden
                                rounded-sm
                                bg-white
                                shadow-[0_20px_50px_rgba(15,23,42,0.12)]
                            "
                        >

                            {/* HEADER */}

                            <div
                                className="
                                    border-b
                                    border-slate-200
                                    px-6
                                    py-8
                                    sm:px-14
                                    sm:py-12
                                "
                            >

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >

                                    <Trophy
                                        className="
                                            size-4
                                            text-amber-500
                                        "
                                    />


                                    <span
                                        className="
                                            text-xs
                                            font-bold
                                            uppercase
                                            tracking-wider
                                            text-amber-600
                                        "
                                    >
                                        Achievement
                                    </span>

                                </div>


                                <h2
                                    className="
                                        mt-4
                                        font-serif
                                        text-2xl
                                        font-bold
                                        leading-tight
                                        text-slate-950
                                        sm:text-4xl
                                    "
                                >
                                    {
                                        achievement.title
                                    }
                                </h2>


                                <div
                                    className="
                                        mt-4
                                        flex
                                        flex-wrap
                                        items-center
                                        gap-x-4
                                        gap-y-2
                                        text-sm
                                    "
                                >

                                    <span
                                        className="
                                            font-semibold
                                            text-blue-950
                                        "
                                    >
                                        {
                                            achievement.studentName
                                        }
                                    </span>


                                    {achievement.category && (

                                        <span
                                            className="
                                                rounded-full
                                                bg-amber-50
                                                px-3
                                                py-1
                                                text-xs
                                                font-semibold
                                                text-amber-700
                                            "
                                        >
                                            {
                                                achievement.category
                                            }
                                        </span>

                                    )}

                                </div>

                            </div>


                            {/* IMAGE */}

                            {achievement.imageFileId && (

                                <div
                                    className="
                                        overflow-hidden
                                        bg-slate-100
                                    "
                                >

                                    <img
                                        src={getImageUrl(
                                            achievement.imageFileId,
                                        )}
                                        alt={
                                            achievement.title
                                        }
                                        className="
                                            max-h-[600px]
                                            w-full
                                            object-cover
                                        "
                                    />

                                </div>

                            )}


                            {/* DESCRIPTION */}

                            {achievement.description && (

                                <div
                                    className="
                                        px-6
                                        py-8
                                        sm:px-14
                                        sm:py-12
                                    "
                                >

                                    <p
                                        className="
                                            whitespace-pre-line
                                            text-sm
                                            leading-7
                                            text-slate-700
                                            sm:text-base
                                            sm:leading-8
                                        "
                                    >
                                        {
                                            achievement.description
                                        }
                                    </p>

                                </div>

                            )}


                            {/* DATE */}

                            {achievement.achievementDate && (

                                <div
                                    className="
                                        border-t
                                        border-slate-100
                                        px-6
                                        py-4
                                        sm:px-14
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            text-xs
                                            text-slate-400
                                        "
                                    >

                                        <CalendarDays
                                            className="size-3.5"
                                        />

                                        Achievement date:

                                        <span
                                            className="
                                                font-medium
                                                text-slate-600
                                            "
                                        >
                                            {formatDate(
                                                achievement.achievementDate,
                                            )}
                                        </span>

                                    </div>

                                </div>

                            )}

                        </article>

                    ),
                )}


                {/* ═════════════════════════
                    BACK TO ISSUES
                ═════════════════════════ */}

                <div
                    className="
                        flex
                        justify-center
                        py-10
                    "
                >

                    <Link
                        to="/issues"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-lg
                            border
                            border-slate-300
                            bg-white
                            px-4
                            py-2.5
                            text-sm
                            font-semibold
                            text-slate-700
                            shadow-sm
                            transition
                            hover:bg-slate-50
                        "
                    >

                        <ArrowLeft
                            className="size-4"
                        />

                        Back to newsletter issues

                    </Link>

                </div>

            </div>

        </main>
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