import {
    ArrowLeft,
    Award,
    CalendarDays,
    UserRound,
} from "lucide-react";

import {
    Link,
    useParams,
} from "react-router";

import { getImageUrl } from "../../../services/storageService";
import {
    useGetAchievementQuery,
} from "../../../features/achievements/achievementApi";
import { NewsletterAchievementPage } from "../../../components/newsletter/NewsletterCard/NewsletterAchievementPage";

export default function AchievementDetails() {
    const { achievementId } = useParams();

    const {
        data: achievement,
        isLoading,
        isError,
    } = useGetAchievementQuery(
        achievementId ?? "",
        {
            skip: !achievementId,
        },
    );

    /* ─────────────────────────────
       LOADING
    ───────────────────────────── */

    if (isLoading) {
        return (
            <main className="min-h-screen bg-slate-50">
                <div className="mx-auto max-w-4xl px-4 py-7 sm:px-6 lg:px-8">

                    <div className="h-4 w-32 animate-pulse rounded bg-slate-200" />

                    <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white">

                        <div className="aspect-[16/9] animate-pulse bg-slate-200" />

                        <div className="space-y-4 p-5 sm:p-7">

                            <div className="h-4 w-28 animate-pulse rounded bg-slate-200" />

                            <div className="h-7 w-3/4 animate-pulse rounded bg-slate-200" />

                            <div className="h-4 w-40 animate-pulse rounded bg-slate-100" />

                            <div className="h-20 animate-pulse rounded-lg bg-slate-100" />

                        </div>

                    </div>
                </div>
            </main>
        );
    }

    /* ─────────────────────────────
       ERROR / NOT FOUND
    ───────────────────────────── */

    if (isError || !achievement) {
        return (
            <main className="min-h-screen bg-slate-50">

                <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 lg:px-8">

                    <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-white text-slate-300 shadow-sm ring-1 ring-slate-200">
                        <Award className="size-6" />
                    </div>

                    <h1 className="mt-4 text-lg font-bold text-slate-900">
                        Achievement not found
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        The achievement you're looking for could not be found.
                    </p>

                    <Link
                        to="/achievements"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-950 hover:text-blue-700"
                    >
                        <span className="flex size-7 items-center justify-center rounded-lg border border-slate-200 bg-white">
                            <ArrowLeft className="size-3.5" />
                        </span>

                        All achievements
                    </Link>

                </div>

            </main>
        );
    }

    /* ─────────────────────────────
       ACHIEVEMENT DETAILS
    ───────────────────────────── */

    return (
        <main className="min-h-screen bg-slate-50">

            <div className="mx-auto max-w-4xl px-4 py-7 sm:px-6 sm:py-9 lg:px-8">

                {/* BACK */}

                <Link
                    to="/achievements"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-950"
                >
                    <span className="flex size-7 items-center justify-center rounded-lg border border-slate-200 bg-white group-hover:bg-slate-100">
                        <ArrowLeft className="size-3.5" />
                    </span>

                    All achievements
                </Link>

                {/* CARD */}

                <article className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">


                    <NewsletterAchievementPage achievement={achievement} />

                </article>

            </div>

        </main>
    );
}
