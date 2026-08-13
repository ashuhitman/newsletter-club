import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const contributors = [
    {
        id: "aarav",
        name: "Aarav Singh",
        role: "Student Writer",
        initials: "AS",
    },
    {
        id: "riya",
        name: "Riya Kumari",
        role: "Artist",
        initials: "RK",
    },
    {
        id: "mohit",
        name: "Mohit Kumar",
        role: "Student Writer",
        initials: "MK",
    },
    {
        id: "priya",
        name: "Priya Sharma",
        role: "Photographer",
        initials: "PS",
    },
];

export function ContributorsSection() {
    return (
        <section className="border-t border-slate-200 bg-white py-10 sm:py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    {/* Heading */}
                    <div className="shrink-0">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                            This Issue
                        </p>

                        <h2 className="mt-1 text-xl font-black tracking-tight text-slate-950">
                            Contributors
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            The people behind our stories.
                        </p>
                    </div>

                    {/* Contributors */}
                    <div className="flex flex-wrap items-center gap-3">
                        {contributors.map((contributor) => (
                            <div
                                key={contributor.id}
                                className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 py-1.5 pl-1.5 pr-3 transition-colors hover:border-amber-300 hover:bg-amber-50"
                            >
                                <div className="flex size-8 items-center justify-center rounded-full bg-blue-950 text-[10px] font-bold text-white">
                                    {contributor.initials}
                                </div>

                                <div className="leading-tight">
                                    <p className="text-xs font-semibold text-slate-900">
                                        {contributor.name}
                                    </p>

                                    <p className="text-[10px] text-slate-500">
                                        {contributor.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Link */}
                    <Link
                        to="/contributors"
                        className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-blue-950 transition-colors hover:text-amber-700"
                    >
                        All contributors
                        <ArrowRight className="size-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}