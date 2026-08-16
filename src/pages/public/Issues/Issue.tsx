import {
    ArrowLeft,
    BookOpen,
} from "lucide-react";

import {
    Link,
    useParams,
} from "react-router";

import {
    useSelector,
} from "react-redux";
import { selectNewsletterIssues } from "../../../features/Newsletter/newsletterSelectors";
import { NewsletterCoverPage } from "../../../components/newsletter/NewsletterCard/NewsletterCoverPage";
import { NewsletterContentsPage } from "../../../components/newsletter/NewsletterCard/NewsletterContentPage";
import { NewsletterArticlePage } from "../../../components/newsletter/NewsletterCard/NewsletterArticlePage";
import { NewsletterAchievementPage } from "../../../components/newsletter/NewsletterCard/NewsletterAchievementPage";
import { NewsletterEndPage } from "../../../components/newsletter/NewsletterCard/NewsletterEndPage";
import { getMonthName } from "../../../utils/utils";
import { NewsletterPage } from "./NewsletterPage";





/* ─────────────────────────────────────
   PAGE
───────────────────────────────────── */

export function Issue() {

    const {
        issueId,
    } = useParams();


    /* ─────────────────────────────
       GET ISSUES FROM REDUX
    ───────────────────────────── */

    const issues =
        useSelector(
            selectNewsletterIssues,
        );


    /* ─────────────────────────────
       FIND CURRENT ISSUE
    ───────────────────────────── */

    const issue =
        issues.find(
            (item) =>
                item.id === issueId,
        );


    /* ─────────────────────────────
       ISSUE NOT FOUND
    ───────────────────────────── */

    if (!issue) {

        return (
            <main
                className="
                    min-h-screen
                    bg-slate-50
                "
            >

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
                            size-12
                            items-center
                            justify-center
                            rounded-xl
                            bg-white
                            text-slate-300
                            shadow-sm
                            ring-1
                            ring-slate-200
                        "
                    >

                        <BookOpen
                            className="size-6"
                        />

                    </div>


                    <h1
                        className="
                            mt-5
                            text-xl
                            font-bold
                            text-slate-950
                        "
                    >
                        Newsletter issue not found
                    </h1>


                    <p
                        className="
                            mt-2
                            text-sm
                            leading-6
                            text-slate-500
                        "
                    >
                        The newsletter issue you're looking
                        for does not exist or is not available.
                    </p>


                    <Link
                        to="/issues"
                        className="
                            mt-6
                            inline-flex
                            items-center
                            gap-1.5
                            text-sm
                            font-semibold
                            text-blue-950
                            transition-colors
                            hover:text-amber-700
                        "
                    >

                        <ArrowLeft
                            className="size-4"
                        />

                        Back to Issues

                    </Link>

                </div>

            </main>
        );
    }


    /* ─────────────────────────────
       PAGE
    ───────────────────────────── */

    return (
        <main
            className="
                min-h-screen
                bg-slate-100
            "
        >

            {/* ═════════════════════════
                ISSUE INFORMATION
            ═════════════════════════ */}

            <div
                className="
                    mx-auto
                    max-w-2xl
                    px-4
                    pt-6
                    sm:px-6
                    sm:pt-8
                "
            >

                {/* ─────────────────────
                    BACK BUTTON
                ───────────────────── */}

                <Link
                    to="/issues"
                    className="
                        mb-5
                        inline-flex
                        items-center
                        gap-1.5
                        text-xs
                        font-semibold
                        text-slate-500
                        transition-colors
                        hover:text-blue-950
                    "
                >

                    <ArrowLeft
                        className="size-3.5"
                    />

                    Back to Issues

                </Link>


                {/* ─────────────────────
                    ISSUE META
                ───────────────────── */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-slate-200
                        pb-4
                    "
                >

                    {/* LEFT */}

                    <div>

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                            "
                        >

                            <BookOpen
                                className="
                                    size-4
                                    text-amber-500
                                "
                            />

                            <p
                                className="
                                    text-[9px]
                                    font-bold
                                    uppercase
                                    tracking-[0.25em]
                                    text-amber-600
                                "
                            >
                                School Newsletter
                            </p>

                        </div>


                        <h1
                            className="
                                mt-1
                                text-lg
                                font-black
                                tracking-tight
                                text-slate-950
                            "
                        >
                            Issue #

                            {String(
                                issue.issueNumber,
                            ).padStart(
                                2,
                                "0",
                            )}
                        </h1>

                    </div>


                    {/* RIGHT */}

                    <div
                        className="
                            text-right
                        "
                    >

                        <p
                            className="
                                text-sm
                                font-bold
                                text-blue-950
                            "
                        >

                            {getMonthName(
                                issue.month,
                            )}{" "}
                            {issue.year}
                        </p>


                        <p
                            className="
                                mt-0.5
                                text-[9px]
                                text-slate-400
                            "
                        >
                            {issue.articles.length +
                                issue.achievements.length}{" "}

                            {issue.articles.length +
                                issue.achievements.length === 1
                                ? "story"
                                : "stories"}
                        </p>

                    </div>

                </div>

            </div>


            {/* ═════════════════════════
                NEWSLETTER
            ═════════════════════════ */}

            <div
                className="
                    mx-auto
                    max-w-4xl
                    px-4
                    py-8
                    sm:px-6
                    sm:py-12
                    lg:px-8
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-2xl
                        space-y-8
                    "
                >

                    {/* ═════════════════
                        COVER
                    ═════════════════ */}

                    <NewsletterPage>

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

                    </NewsletterPage>


                    {/* ═════════════════
                        CONTENTS
                    ═════════════════ */}

                    <NewsletterPage>

                        <NewsletterContentsPage
                            articles={
                                issue.articles
                            }

                            achievements={
                                issue.achievements
                            }
                        />

                    </NewsletterPage>


                    {/* ═════════════════
                        ARTICLES
                    ═════════════════ */}

                    {issue.articles.map(
                        (
                            article,
                        ) => (

                            <NewsletterPage
                                key={
                                    `article-${article.$id}`
                                }
                            >

                                <NewsletterArticlePage
                                    article={
                                        article
                                    }
                                />

                            </NewsletterPage>

                        ),
                    )}


                    {/* ═════════════════
                        ACHIEVEMENTS
                    ═════════════════ */}

                    {issue.achievements.map(
                        (
                            achievement,
                        ) => (

                            <NewsletterPage
                                key={
                                    `achievement-${achievement.$id}`
                                }
                            >

                                <NewsletterAchievementPage
                                    achievement={
                                        achievement
                                    }
                                />

                            </NewsletterPage>

                        ),
                    )}

                    {/* ═════════════════
                        Gallary
                    ═════════════════ */}

                    {/* <NewsletterGalleryPage images={issue.gallery} /> */}
                    {/* ═════════════════
                        END PAGE
                    ═════════════════ */}

                    <NewsletterPage>

                        <NewsletterEndPage
                            issueNumber={
                                issue.issueNumber
                            }
                        />

                    </NewsletterPage>

                </div>

            </div>

        </main>
    );
}






/* ─────────────────────────────────────
   MONTH NAME
───────────────────────────────────── */
