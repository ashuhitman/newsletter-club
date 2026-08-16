import {
    ArrowRight,
} from "lucide-react";

import {
    Link,
} from "react-router";

import {
    useSelector,
} from "react-redux";

import {
    selectNewsletterIssues,
} from "../../features/Newsletter/newsletterSelectors";

import { NewsletterCard } from "./NewsletterCard/NewsletterCard";







export function PreviousIssues() {

    /* ─────────────────────────────
       ISSUES FROM REDUX
    ───────────────────────────── */

    const issues = useSelector(
        selectNewsletterIssues,
    );


    /* ─────────────────────────────
       LATEST 3 ISSUES
    ───────────────────────────── */

    const previousIssues =
        issues.slice(1, 4);


    /* ─────────────────────────────
       EMPTY
    ───────────────────────────── */

    if (previousIssues.length === 0) {
        return null;
    }


    return (
        <section
            className="
                bg-slate-50
                py-14
                sm:py-16
                lg:py-20
            "
        >

            <div
                className="
                    mx-auto
                    max-w-7xl
                    px-4
                    sm:px-6
                    lg:px-8
                "
            >

                {/* ─────────────────────
                    HEADER
                ───────────────────── */}

                <div
                    className="
                        flex
                        items-end
                        justify-between
                        gap-6
                    "
                >

                    <div>

                        <p
                            className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.2em]
                                text-amber-600
                            "
                        >
                            Newsletter Archive
                        </p>


                        <h2
                            className="
                                mt-2
                                text-2xl
                                font-black
                                tracking-tight
                                text-slate-950
                                sm:text-3xl
                            "
                        >
                            Previous Issues
                        </h2>


                        <p
                            className="
                                mt-3
                                max-w-xl
                                text-sm
                                leading-6
                                text-slate-600
                            "
                        >
                            Explore stories, achievements and
                            memories from previous editions of
                            our newsletter.
                        </p>

                    </div>


                    {/* DESKTOP */}

                    <Link
                        to="/issues"
                        className="
                            hidden
                            items-center
                            gap-1.5
                            text-sm
                            font-semibold
                            text-blue-950
                            transition-colors
                            hover:text-amber-700
                            sm:inline-flex
                        "
                    >

                        View archive

                        <ArrowRight
                            className="size-4"
                        />

                    </Link>

                </div>


                {/* ─────────────────────
                    NEWSLETTER CARDS
                ───────────────────── */}

                <section className="mt-10">

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
                        "
                    >

                        {previousIssues.map(
                            (issue) => (

                                <NewsletterCard
                                    key={issue.id}
                                    issue={issue}
                                />

                            ),
                        )}

                    </div>

                </section>


                {/* ─────────────────────
                    MOBILE ARCHIVE
                ───────────────────── */}

                <div
                    className="
                        mt-7
                        sm:hidden
                    "
                >

                    <Link
                        to="/issues"
                        className="
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

                        View complete archive

                        <ArrowRight
                            className="size-4"
                        />

                    </Link>

                </div>

            </div>

        </section>
    );
}