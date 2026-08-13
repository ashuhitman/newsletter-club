import { Award, Trophy } from "lucide-react";

import {
    useGetAchievementsQuery,
} from "../../../features/achievements/achievementApi";
import { AchievementCard } from "../../../components/achievement/AchievementCard";




export function Achievements() {
    const {
        data: achievements = [],
        isLoading,
        isError,
    } = useGetAchievementsQuery();

    return (
        <main className="min-h-screen bg-slate-50">

            {/* ─────────────────────────────
                HERO
            ───────────────────────────── */}

            <section className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">

                    <div className="max-w-2xl">

                        <div className="flex items-center gap-2">
                            <Award className="size-4 text-amber-500" />

                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                                Celebrating Excellence
                            </p>
                        </div>

                        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                            Achievements
                        </h1>

                        <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
                            Recognising the hard work, talent, dedication and
                            accomplishments of our students and school community.
                        </p>

                    </div>

                </div>
            </section>


            {/* ─────────────────────────────
                CONTENT
            ───────────────────────────── */}

            <section className="py-10 sm:py-12 lg:py-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


                    {/* Loading */}

                    {isLoading && (
                        <AchievementSkeleton />
                    )}


                    {/* Error */}

                    {isError && (
                        <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">

                            <Trophy className="mx-auto size-8 text-red-300" />

                            <h2 className="mt-3 text-sm font-semibold text-red-700">
                                Unable to load achievements
                            </h2>

                            <p className="mt-1 text-sm text-red-500">
                                Please try again later.
                            </p>

                        </div>
                    )}


                    {/* Empty */}

                    {!isLoading &&
                        !isError &&
                        achievements.length === 0 && (
                            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">

                                <Trophy className="mx-auto size-9 text-slate-300" />

                                <h2 className="mt-4 text-base font-semibold text-slate-800">
                                    No achievements yet
                                </h2>

                                <p className="mx-auto mt-1 max-w-md text-sm leading-6 text-slate-500">
                                    Achievements of our students and school
                                    community will appear here.
                                </p>

                            </div>
                        )}


                    {/* Achievements */}

                    {!isLoading &&
                        !isError &&
                        achievements.length > 0 && (
                            <>
                                <div className="mb-6 flex items-center justify-between">

                                    <div>
                                        <h2 className="text-lg font-bold tracking-tight text-slate-950">
                                            Our Achievements
                                        </h2>

                                        <p className="mt-1 text-sm text-slate-500">
                                            {achievements.length}{" "}
                                            {achievements.length === 1
                                                ? "achievement"
                                                : "achievements"}
                                        </p>
                                    </div>

                                </div>


                                <div
                                    className="
                                        grid
                                        gap-5
                                        sm:grid-cols-2
                                        lg:grid-cols-3
                                    "
                                >
                                    {achievements.map(
                                        (achievement) => (
                                            <AchievementCard
                                                key={
                                                    achievement.$id
                                                }
                                                achievement={
                                                    achievement
                                                }
                                            />
                                        ),
                                    )}
                                </div>
                            </>
                        )}

                </div>
            </section>

        </main>
    );
}


/* ═══════════════════════════════════════
   SKELETON
═══════════════════════════════════════ */

function AchievementSkeleton() {
    return (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {[1, 2, 3, 4, 5, 6].map(
                (item) => (
                    <div
                        key={item}
                        className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                    >

                        {/* Image */}

                        <div className="aspect-[16/10] animate-pulse bg-slate-200" />


                        {/* Content */}

                        <div className="space-y-3 p-5">

                            <div className="h-3 w-32 animate-pulse rounded bg-slate-200" />

                            <div className="h-5 w-3/4 animate-pulse rounded bg-slate-200" />

                            <div className="h-3 w-full animate-pulse rounded bg-slate-100" />

                            <div className="h-3 w-5/6 animate-pulse rounded bg-slate-100" />

                            <div className="h-4 w-20 animate-pulse rounded bg-slate-200" />

                        </div>

                    </div>
                ),
            )}

        </div>
    );
}