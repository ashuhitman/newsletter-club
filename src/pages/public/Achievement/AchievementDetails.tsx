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

                    {/* IMAGE */}

                    {achievement.imageFileId ? (
                        <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">

                            <img
                                src={getImageUrl(
                                    achievement.imageFileId,
                                )}
                                alt={achievement.title}
                                className="h-full w-full object-cover"
                            />

                            <div className="absolute right-0 top-4">
                                <div className="rounded-l-md bg-amber-400 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-950">
                                    {achievement.category}
                                </div>
                            </div>

                        </div>
                    ) : (
                        <div className="relative flex aspect-[16/9] items-center justify-center bg-slate-100">

                            <Award className="size-12 text-slate-300" />

                            <div className="absolute right-0 top-4">
                                <div className="rounded-l-md bg-amber-400 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-950">
                                    {achievement.category}
                                </div>
                            </div>

                        </div>
                    )}

                    {/* CONTENT */}

                    <div className="p-5 sm:p-7">

                        {/* ACHIEVEMENT DATE + STATUS */}

                        <div className="flex flex-wrap items-center gap-2.5">

                            {achievement.achievementDate && (
                                <div className="flex items-center gap-1.5 text-xs text-slate-500">

                                    <CalendarDays className="size-3.5" />

                                    <time
                                        dateTime={
                                            achievement.achievementDate
                                        }
                                    >
                                        Achievement Date:{" "}
                                        {formatDate(
                                            achievement.achievementDate,
                                        )}
                                    </time>

                                </div>
                            )}

                            {achievement.status && (
                                <>
                                    <span className="text-slate-300">
                                        •
                                    </span>

                                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold capitalize text-emerald-700">
                                        {achievement.status}
                                    </span>
                                </>
                            )}

                        </div>

                        {/* TITLE */}

                        <h1 className="mt-3 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                            {achievement.title}
                        </h1>

                        {/* NAME */}

                        <div className="mt-4 flex items-center gap-2.5">

                            <div className="flex size-8 items-center justify-center rounded-lg bg-blue-50 text-blue-950">
                                <UserRound className="size-4" />
                            </div>

                            <div>

                                <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                                    Name
                                </p>

                                <p className="text-sm font-semibold text-slate-900">
                                    {achievement.studentName}
                                </p>

                            </div>

                        </div>

                        {/* ACHIEVEMENT */}

                        <div className="mt-5 rounded-lg border border-amber-100 bg-amber-50/60 p-4">

                            <div className="flex items-start gap-2.5">

                                <Award className="mt-0.5 size-4 shrink-0 text-amber-600" />

                                <div>

                                    <p className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                                        Achievement
                                    </p>

                                    <p className="mt-1 text-sm font-medium leading-6 text-slate-800">
                                        {achievement.achievement}
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* DESCRIPTION */}

                        <div className="mt-6 border-t border-slate-100 pt-6">

                            <h2 className="text-base font-bold text-slate-900">
                                About the Achievement
                            </h2>

                            {achievement.description ? (
                                <div className="mt-3 whitespace-pre-line text-sm leading-6 text-slate-600">
                                    {achievement.description}
                                </div>
                            ) : (
                                <p className="mt-3 text-sm italic text-slate-400">
                                    No additional description available.
                                </p>
                            )}

                        </div>

                        {/* BOTTOM METADATA */}

                        <div className="mt-7 border-t border-slate-100 pt-5">

                            <div className="flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">

                                {/* PUBLISHED ON */}

                                <div className="flex items-center gap-2">

                                    <CalendarDays className="size-3.5 text-slate-400" />

                                    <span>
                                        Published on{" "}
                                        <span className="font-medium text-slate-700">
                                            {formatDate(
                                                achievement.$createdAt,
                                            )}
                                        </span>
                                    </span>

                                </div>

                                {/* PUBLISHED BY */}

                                <div>
                                    Published by{" "}
                                    <span className="font-semibold text-slate-700">
                                        {achievement.createdBy}
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

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