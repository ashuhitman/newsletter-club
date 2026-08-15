import {
    Newspaper,
} from "lucide-react";

import {
    useSelector,
} from "react-redux";
import { selectNewsletterIssues } from "../../features/Newsletter/newsletterSelectors";
import { NewsletterCard } from "../../components/newsletter/NewsletterCard/NewsletterCard";




export function Issues() {

    /* ─────────────────────────────
       ISSUES FROM NEWSLETTER SLICE
    ───────────────────────────── */

    const issues =
        useSelector(
            selectNewsletterIssues,
        );


    /* ─────────────────────────────
       EMPTY STATE
    ───────────────────────────── */

    if (issues.length === 0) {

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
                        max-w-3xl
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
                        <Newspaper className="size-6" />
                    </div>


                    <h1
                        className="
                            mt-4
                            text-lg
                            font-bold
                            text-slate-900
                        "
                    >
                        No newsletter issues yet
                    </h1>


                    <p
                        className="
                            mt-2
                            text-sm
                            leading-6
                            text-slate-500
                        "
                    >
                        Newsletter issues will appear here once
                        articles or achievements are published.
                    </p>

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
                bg-slate-50
            "
        >

            <div
                className="
                    mx-auto
                    max-w-6xl
                    px-4
                    py-10
                    sm:px-6
                    sm:py-12
                    lg:px-8
                "
            >

                {/* ─────────────────────
                    HEADER
                ───────────────────── */}

                <header
                    className="
                        mx-auto
                        max-w-2xl
                        text-center
                    "
                >

                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-slate-200
                            bg-white
                            px-3
                            py-1.5
                            text-xs
                            font-semibold
                            text-slate-600
                            shadow-sm
                        "
                    >

                        <Newspaper
                            className="
                                size-3.5
                                text-amber-500
                            "
                        />

                        School Newsletter

                    </div>


                    <h1
                        className="
                            mt-4
                            text-2xl
                            font-bold
                            tracking-tight
                            text-slate-950
                            sm:text-3xl
                        "
                    >
                        Newsletter Issues
                    </h1>


                    <p
                        className="
                            mt-2
                            text-sm
                            leading-6
                            text-slate-500
                        "
                    >
                        Explore our monthly school newsletters,
                        featuring school activities, articles,
                        achievements and memories.
                    </p>

                </header>


                {/* ─────────────────────
                    ISSUE CARDS
                ───────────────────── */}

                <section
                    className="
                        mt-10
                    "
                >

                    <div
                        className="
                            grid
                            grid-cols-1
                            justify-items-center
                            gap-y-12
                            sm:grid-cols-2
                            sm:gap-x-8
                            sm:gap-y-14
                            lg:grid-cols-3
                            xl:grid-cols-4
                        "
                    >

                        {issues.map(
                            (issue) => (

                                <NewsletterCard
                                    key={issue.id}
                                    issue={issue}
                                />

                            ),
                        )}

                    </div>

                </section>

            </div>

        </main>
    );
}