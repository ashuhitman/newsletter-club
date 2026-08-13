import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function NewsletterHero() {
    return (
        <section className="overflow-hidden border-b border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
                    {/* Content */}
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-amber-500" />

                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                                Newsletter Club
                            </span>
                        </div>

                        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                            August 2026
                        </p>

                        <h1 className="mt-3 max-w-2xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            Celebrating our school,
                            <span className="block text-blue-950">
                                our students & their stories.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                            Discover the latest news, achievements, activities and
                            creative work from the PM SHRI GSSS Dhanau community.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <Link
                                to="/issues"
                                className="inline-flex items-center gap-2 rounded-lg bg-blue-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-900"
                            >
                                Read Latest Issue
                                <ArrowRight className="size-4" />
                            </Link>

                            <Link
                                to="/articles"
                                className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
                            >
                                Explore Stories
                            </Link>
                        </div>
                    </div>

                    {/* Issue Cover */}
                    <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
                        {/* Decorative background */}
                        <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl bg-amber-400/20" />

                        {/* Cover */}
                        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-blue-950 shadow-2xl">
                            {/* Replace with actual issue cover later */}
                            <div className="flex h-full flex-col justify-between p-7 sm:p-9">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
                                        PM SHRI GSSS DHANAU
                                    </p>

                                    <div className="mt-3 h-px w-12 bg-amber-400" />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                                        August
                                    </p>

                                    <h2 className="mt-1 text-5xl font-black tracking-tight text-white sm:text-6xl">
                                        2026
                                    </h2>

                                    <p className="mt-5 max-w-xs text-lg font-semibold leading-7 text-white">
                                        Our School.
                                        <br />
                                        Our Stories.
                                        <br />
                                        Our Voice.
                                    </p>
                                </div>

                                <div className="flex items-end justify-between">
                                    <span className="text-xs font-medium text-blue-200">
                                        ISSUE 01
                                    </span>

                                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                                        Newsletter
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}