import { ArrowUpRight, Trophy } from "lucide-react";
import { Link } from "react-router";

import {
    useGetAchievementsQuery,
} from "../../features/achievements/achievementApi";
import { AchievementCard } from "./AchievementCard";



export function AchievementsSection() {
    const {
        data: achievements = [],
        isLoading,
        isError,
    } = useGetAchievementsQuery();

    return (
        <section className="bg-slate-50 py-14 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* ─────────────────────────────
                    HEADER
                ───────────────────────────── */}

                <div className="flex items-end justify-between gap-6">

                    <div>
                        <div className="flex items-center gap-2">
                            <Trophy className="size-4 text-amber-500" />

                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                                Celebrating Excellence
                            </p>
                        </div>

                        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                            Student Achievements
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                            Recognising the hard work, talent and dedication of our
                            students.
                        </p>
                    </div>


                    {/* Desktop View All */}

                    <Link
                        to="/achievements"
                        className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-blue-950 transition-colors hover:text-blue-700 sm:inline-flex"
                    >
                        View all

                        <ArrowUpRight className="size-4" />
                    </Link>

                </div>


                {/* ─────────────────────────────
                    LOADING
                ───────────────────────────── */}

                {isLoading && (
                    <div className="mt-8 grid gap-5 md:grid-cols-3">

                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                            >

                                {/* Image */}

                                <div className="aspect-[16/10] animate-pulse bg-slate-200" />


                                {/* Content */}

                                <div className="space-y-3 p-5">

                                    <div className="h-3 w-28 animate-pulse rounded bg-slate-200" />

                                    <div className="h-5 w-3/4 animate-pulse rounded bg-slate-200" />

                                    <div className="h-12 w-full animate-pulse rounded bg-slate-100" />

                                </div>

                            </div>
                        ))}

                    </div>
                )}


                {/* ─────────────────────────────
                    ERROR
                ───────────────────────────── */}

                {isError && (
                    <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6 text-center">

                        <p className="text-sm font-semibold text-red-700">
                            Unable to load achievements.
                        </p>

                        <p className="mt-1 text-xs text-red-500">
                            Please try again later.
                        </p>

                    </div>
                )}


                {/* ─────────────────────────────
                    EMPTY
                ───────────────────────────── */}

                {!isLoading &&
                    !isError &&
                    achievements.length === 0 && (
                        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">

                            <Trophy className="mx-auto size-8 text-slate-300" />

                            <p className="mt-3 text-sm font-semibold text-slate-700">
                                No achievements available yet.
                            </p>

                        </div>
                    )}


                {/* ─────────────────────────────
                    ACHIEVEMENT CARDS
                ───────────────────────────── */}

                {!isLoading &&
                    !isError &&
                    achievements.length > 0 && (
                        <div className="mt-8 grid gap-5 md:grid-cols-3">

                            {achievements
                                .slice(0, 3)
                                .map((achievement) => (
                                    <AchievementCard
                                        key={achievement.$id}
                                        achievement={achievement}
                                    />
                                ))}

                        </div>
                    )}


                {/* ─────────────────────────────
                    MOBILE VIEW ALL
                ───────────────────────────── */}

                <div className="mt-7 sm:hidden">

                    <Link
                        to="/achievements"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-950"
                    >
                        View all achievements

                        <ArrowUpRight className="size-4" />
                    </Link>

                </div>

            </div>
        </section>
    );
}