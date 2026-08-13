import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { ArticleCard } from "./ArticleCard";
import { useGetArticlesQuery } from "../../features/article/articleApi";



export function LatestStories() {
    const {
        data: articles = [],
        isLoading,
        isError,
    } = useGetArticlesQuery();

    return (
        <section className="bg-white py-14 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* ─────────────────────────
                    HEADING
                ───────────────────────── */}

                <div className="flex items-end justify-between gap-6">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                            From Our School
                        </p>

                        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                            Latest Stories
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                            News, activities and moments from our school community.
                        </p>
                    </div>

                    <Link
                        to="/articles"
                        className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-blue-950 transition-colors hover:text-blue-700 sm:inline-flex"
                    >
                        View all

                        <ArrowUpRight className="size-4" />
                    </Link>
                </div>


                {/* ─────────────────────────
                    LOADING
                ───────────────────────── */}

                {isLoading && (
                    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                            >
                                <div className="aspect-[16/10] animate-pulse bg-slate-200" />

                                <div className="space-y-3 p-5">
                                    <div className="h-3 w-28 animate-pulse rounded bg-slate-200" />

                                    <div className="h-5 w-4/5 animate-pulse rounded bg-slate-200" />

                                    <div className="h-4 w-full animate-pulse rounded bg-slate-100" />

                                    <div className="h-4 w-5/6 animate-pulse rounded bg-slate-100" />
                                </div>
                            </div>
                        ))}

                    </div>
                )}


                {/* ─────────────────────────
                    ERROR
                ───────────────────────── */}

                {isError && (
                    <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
                        <p className="text-sm font-semibold text-red-700">
                            Unable to load stories.
                        </p>

                        <p className="mt-1 text-xs text-red-500">
                            Please try again later.
                        </p>
                    </div>
                )}


                {/* ─────────────────────────
                    ARTICLES
                ───────────────────────── */}

                {!isLoading &&
                    !isError &&
                    articles.length > 0 && (
                        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                            {articles
                                .slice(0, 3)
                                .map((article) => (
                                    <ArticleCard
                                        key={article.$id}
                                        article={article}
                                    />
                                ))}

                        </div>
                    )}


                {/* ─────────────────────────
                    EMPTY
                ───────────────────────── */}

                {!isLoading &&
                    !isError &&
                    articles.length === 0 && (
                        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">

                            <p className="text-sm font-semibold text-slate-700">
                                No stories available yet.
                            </p>

                        </div>
                    )}


                {/* ─────────────────────────
                    MOBILE VIEW ALL
                ───────────────────────── */}

                <div className="mt-7 sm:hidden">
                    <Link
                        to="/articles"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-950"
                    >
                        View all stories

                        <ArrowUpRight className="size-4" />
                    </Link>
                </div>

            </div>
        </section>
    );
}