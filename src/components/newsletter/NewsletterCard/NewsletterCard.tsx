import { Link } from "react-router";

import type { NewsletterIssue } from "./newsletterTypes";

import {
    NewsletterContentsPage,
} from "./NewsletterContentPage";

import {
    NewsletterCoverPage,
} from "./NewsletterCoverPage";


export interface NewsletterCardProps {
    issue: NewsletterIssue;
}


export function NewsletterCard({
    issue,
}: NewsletterCardProps) {

    return (
        <Link
            to={`/issues/${issue.id}`}
            className="
                group
                block
                w-full
                max-w-[300px]
                sm:max-w-[320px]
            "
        >

            {/* ═════════════════════════════
                BOOK
            ═════════════════════════════ */}

            <div
                className="
                    relative
                    aspect-[2/3]
                    w-full
                    [perspective:1800px]
                "
            >

                {/* ═════════════════════════
                    CONTENT PAGE
                    FIXED UNDER COVER

                    PAGE COLOR:
                    SOFT BLUE
                ═════════════════════════ */}

                <div
                    className="
                        absolute
                        inset-0
                        overflow-hidden
                        rounded-r-md
                        border
                        border-slate-200
                        bg-[#eaf4ff]
                        shadow-xl
                    "
                >

                    <NewsletterContentsPage
                        articles={
                            issue.articles
                        }

                        achievements={
                            issue.achievements
                        }

                        compact
                    />

                </div>


                {/* ═════════════════════════
                    COMPLETE FRONT COVER
                    INCLUDING SPINE

                    EVERYTHING HERE FLIPS
                ═════════════════════════ */}

                <div
                    className="
                        absolute
                        inset-0
                        z-20
                        origin-left
                        overflow-hidden
                        rounded-r-md
                        shadow-2xl

                        transition-transform
                        duration-700
                        ease-in-out

                        [transform-style:preserve-3d]
                        [backface-visibility:hidden]

                        group-hover:[transform:rotateY(-82deg)]
                    "
                >

                    {/* ─────────────────────
                        COVER
                    ───────────────────── */}

                    <NewsletterCoverPage
                        year={
                            issue.year
                        }

                        month={
                            issue.month
                        }

                        issueNumber={
                            issue.issueNumber
                        }
                    />


                    {/* ─────────────────────
                        SPINE

                        PART OF COVER
                        SO IT FLIPS WITH IT
                    ───────────────────── */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            left-0
                            top-0
                            z-30
                            flex
                            h-full
                            w-[7%]
                            items-center
                            justify-center
                            rounded-l-md
                            bg-gradient-to-r
                            from-blue-950
                            via-blue-900
                            to-blue-950
                            shadow-inner
                        "
                    >

                        <span
                            className="
                                rotate-180
                                whitespace-nowrap
                                text-[7px]
                                font-bold
                                uppercase
                                tracking-[0.16em]
                                text-white/90
                            "
                            style={{
                                writingMode:
                                    "vertical-rl",
                            }}
                        >
                            PM SHRI GSSS DHANAU
                        </span>

                    </div>

                </div>

            </div>


            {/* ═════════════════════════════
                ISSUE INFORMATION
            ═════════════════════════════ */}

            <div
                className="
                    mt-4
                    text-center
                "
            >

                <p
                    className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-amber-600
                    "
                >
                    Issue #

                    {String(
                        issue.issueNumber,
                    ).padStart(
                        2,
                        "0",
                    )}
                </p>


                <h3
                    className="
                        mt-1
                        text-sm
                        font-bold
                        text-slate-900
                    "
                >
                    {getMonthName(
                        issue.month,
                    )}{" "}
                    {issue.year}
                </h3>


                <p
                    className="
                        mt-1
                        text-xs
                        text-slate-400
                    "
                >

                    {issue.articles.length}{" "}

                    {issue.articles.length === 1
                        ? "article"
                        : "articles"}

                    {" · "}

                    {issue.achievements.length}{" "}

                    {issue.achievements.length === 1
                        ? "achievement"
                        : "achievements"}

                </p>

            </div>

        </Link>
    );
}


/* ─────────────────────────────────────
   MONTH NAME
───────────────────────────────────── */

function getMonthName(
    month: number,
): string {

    return new Intl.DateTimeFormat(
        "en-IN",
        {
            month: "long",
        },
    ).format(
        new Date(
            2026,
            month - 1,
            1,
        ),
    );
}