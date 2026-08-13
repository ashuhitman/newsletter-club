import { ArrowUpRight, Newspaper } from "lucide-react";
import { Link } from "react-router";
import { useGetArticlesQuery } from "../../../features/article/articleApi";
import { ArticleCard } from "../../../components/article/ArticleCard";



export default function Articles() {
    const {
        data: articles = [],
        isLoading,
        isError,
    } = useGetArticlesQuery();

    return (
        <main className="min-h-screen bg-slate-50">

            {/* ─────────────────────────────
                PAGE INTRO
            ───────────────────────────── */}

            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">

                    <div className="max-w-2xl">

                        <div className="flex items-center gap-2">
                            <Newspaper className="size-4 text-amber-500" />

                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                                From Our School
                            </p>
                        </div>

                        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                            Latest Stories
                        </h1>

                        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                            News, activities and moments from our school
                            community.
                        </p>

                    </div>

                </div>
            </section>


            {/* ─────────────────────────────
                ARTICLES
            ───────────────────────────── */}

            <section className="py-10 sm:py-12 lg:py-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* Loading */}

                    {isLoading && (
                        <ArticleSkeleton />
                    )}


                    {/* Error */}

                    {isError && (
                        <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-12 text-center">

                            <Newspaper className="mx-auto size-9 text-red-300" />

                            <h2 className="mt-4 text-sm font-semibold text-red-700">
                                Unable to load stories
                            </h2>

                            <p className="mt-1 text-sm text-red-500">
                                Please try again later.
                            </p>

                        </div>
                    )}


                    {/* Empty */}

                    {!isLoading &&
                        !isError &&
                        articles.length === 0 && (
                            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">

                                <Newspaper className="mx-auto size-9 text-slate-300" />

                                <h2 className="mt-4 text-base font-semibold text-slate-800">
                                    No stories yet
                                </h2>

                                <p className="mx-auto mt-1 max-w-md text-sm leading-6 text-slate-500">
                                    News, activities and stories from our
                                    school community will appear here.
                                </p>

                                <Link
                                    to="/"
                                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-950 hover:text-blue-700"
                                >
                                    Back to home
                                    <ArrowUpRight className="size-4" />
                                </Link>

                            </div>
                        )}


                    {/* Articles */}

                    {!isLoading &&
                        !isError &&
                        articles.length > 0 && (
                            <>
                                <div className="mb-6 flex items-end justify-between gap-4">

                                    <div>
                                        <h2 className="text-lg font-bold tracking-tight text-slate-950">
                                            School Stories
                                        </h2>

                                        <p className="mt-1 text-sm text-slate-500">
                                            {articles.length}{" "}
                                            {articles.length === 1
                                                ? "story"
                                                : "stories"}
                                        </p>
                                    </div>

                                </div>


                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                                    {articles.map((article) => (
                                        <ArticleCard
                                            key={article.$id}
                                            article={article}
                                        />
                                    ))}

                                </div>
                            </>
                        )}

                </div>
            </section>

        </main>
    );
}


/* ═══════════════════════════════════════
   LOADING SKELETON
═══════════════════════════════════════ */

function ArticleSkeleton() {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                    key={item}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >

                    {/* Image */}

                    <div className="aspect-[16/10] animate-pulse bg-slate-200" />

                    {/* Content */}

                    <div className="space-y-3 p-5">

                        <div className="h-3 w-28 animate-pulse rounded bg-slate-200" />

                        <div className="h-5 w-4/5 animate-pulse rounded bg-slate-200" />

                        <div className="h-4 w-full animate-pulse rounded bg-slate-100" />

                        <div className="h-4 w-5/6 animate-pulse rounded bg-slate-100" />

                        <div className="h-4 w-20 animate-pulse rounded bg-slate-200" />

                    </div>

                </div>
            ))}

        </div>
    );
}