import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router";

const issues = [
    {
        id: "august-2026",
        month: "August",
        year: "2026",
        title: "Our School. Our Stories. Our Voice.",
        image:
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=85",
    },
    {
        id: "july-2026",
        month: "July",
        year: "2026",
        title: "Learning, Creating & Growing Together",
        image:
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=700&q=85",
    },
    {
        id: "june-2026",
        month: "June",
        year: "2026",
        title: "A New Session, New Beginnings",
        image:
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=85",
    },
];

export function PreviousIssues() {
    return (
        <section className="bg-slate-50 py-14 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-end justify-between gap-6">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                            Newsletter Archive
                        </p>

                        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                            Previous Issues
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                            Explore stories, achievements and memories from previous
                            editions of our newsletter.
                        </p>
                    </div>

                    <Link
                        to="/issues"
                        className="hidden items-center gap-1.5 text-sm font-semibold text-blue-950 transition-colors hover:text-amber-700 sm:inline-flex"
                    >
                        View archive
                        <ArrowRight className="size-4" />
                    </Link>
                </div>

                {/* Issues */}
                <div className="mt-9 grid gap-6 md:grid-cols-3">
                    {issues.map((issue) => (
                        <article
                            key={issue.id}
                            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-md"
                        >
                            {/* Cover */}
                            <Link
                                to={`/issues/${issue.id}`}
                                className="relative block aspect-[4/3] overflow-hidden bg-blue-950"
                            >
                                <img
                                    src={issue.image}
                                    alt={`${issue.month} ${issue.year} newsletter`}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/10 to-transparent" />

                                {/* Issue label */}
                                <div className="absolute bottom-5 left-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                                        {issue.month}
                                    </p>

                                    <p className="mt-0.5 text-3xl font-black text-white">
                                        {issue.year}
                                    </p>
                                </div>
                            </Link>

                            {/* Content */}
                            <div className="p-5">
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <CalendarDays className="size-3.5" />

                                    <span>
                                        {issue.month} {issue.year}
                                    </span>
                                </div>

                                <h3 className="mt-3 text-lg font-bold leading-6 tracking-tight text-slate-950 transition-colors group-hover:text-amber-700">
                                    {issue.title}
                                </h3>

                                <Link
                                    to={`/issues/${issue.id}`}
                                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-950 transition-colors hover:text-amber-700"
                                >
                                    Read issue
                                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Mobile Archive Link */}
                <div className="mt-7 sm:hidden">
                    <Link
                        to="/issues"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-950 transition-colors hover:text-amber-700"
                    >
                        View complete archive
                        <ArrowRight className="size-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}