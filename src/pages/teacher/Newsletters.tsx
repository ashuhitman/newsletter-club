import {
    CalendarDays,
    Edit3,
    Eye,
    FilePlus2,
    MoreHorizontal,
    Search,
    Trash2,
} from "lucide-react";
import { Link } from "react-router";

type NewsletterStatus = "Published" | "Draft";

interface Newsletter {
    id: string;
    title: string;
    issue: string;
    description: string;
    status: NewsletterStatus;
    publishedAt: string | null;
}

const newsletters: Newsletter[] = [
    {
        id: "1",
        title: "August 2026 Newsletter",
        issue: "August 2026",
        description:
            "Monthly newsletter featuring school activities, achievements and events.",
        status: "Published",
        publishedAt: "10 Aug 2026",
    },
    {
        id: "2",
        title: "July 2026 Newsletter",
        issue: "July 2026",
        description:
            "Highlights from July including student activities and school events.",
        status: "Published",
        publishedAt: "31 Jul 2026",
    },
    {
        id: "3",
        title: "June 2026 Newsletter",
        issue: "June 2026",
        description:
            "School activities and achievements from the month of June.",
        status: "Draft",
        publishedAt: null,
    },
];

export function Newsletters() {
    return (
        <div className="space-y-6">

            {/* Header */}
            <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-medium text-amber-600">
                        Content
                    </p>

                    <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                        Newsletters
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        Create and manage your school's newsletter issues.
                    </p>
                </div>

                <Link
                    to="/teacher/newsletters/new"
                    className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                    <FilePlus2 size={17} />
                    New Newsletter
                </Link>
            </section>

            {/* Toolbar */}
            <section className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                {/* Search */}
                <div className="relative w-full sm:max-w-sm">
                    <Search
                        size={17}
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                        type="search"
                        placeholder="Search newsletters..."
                        className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
                    />
                </div>

                {/* Filter */}
                <select
                    defaultValue="all"
                    className="h-10 cursor-pointer rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-600 outline-none focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
                >
                    <option value="all">
                        All newsletters
                    </option>

                    <option value="published">
                        Published
                    </option>

                    <option value="draft">
                        Drafts
                    </option>
                </select>
            </section>

            {/* Newsletter List */}
            <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">

                {/* Desktop Header */}
                <div className="hidden border-b border-slate-100 bg-slate-50 px-5 py-3 md:grid md:grid-cols-[1fr_150px_120px_48px] md:items-center md:gap-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Newsletter
                    </p>

                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Issue
                    </p>

                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Status
                    </p>

                    <span />
                </div>

                {newsletters.map((newsletter) => (
                    <NewsletterRow
                        key={newsletter.id}
                        newsletter={newsletter}
                    />
                ))}

            </section>

            {/* Count */}
            <p className="text-xs text-slate-400">
                Showing {newsletters.length} newsletters
            </p>
        </div>
    );
}


/* ─────────────────────────────────────
   NEWSLETTER ROW
───────────────────────────────────── */

interface NewsletterRowProps {
    newsletter: Newsletter;
}

function NewsletterRow({
    newsletter,
}: NewsletterRowProps) {
    return (
        <div className="border-b border-slate-100 px-5 py-4 last:border-0">

            {/* Desktop */}
            <div className="hidden md:grid md:grid-cols-[1fr_150px_120px_48px] md:items-center md:gap-4">

                {/* Newsletter */}
                <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-900">
                        {newsletter.title}
                    </p>

                    <p className="mt-1 truncate text-xs text-slate-500">
                        {newsletter.description}
                    </p>
                </div>

                {/* Issue */}
                <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CalendarDays
                        size={15}
                        className="text-slate-400"
                    />

                    {newsletter.issue}
                </div>

                {/* Status */}
                <StatusBadge
                    status={newsletter.status}
                />

                {/* Actions */}
                <NewsletterActions
                    newsletterId={newsletter.id}
                />
            </div>


            {/* Mobile */}
            <div className="md:hidden">

                <div className="flex items-start justify-between gap-3">

                    <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-900">
                            {newsletter.title}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                            {newsletter.description}
                        </p>
                    </div>

                    <StatusBadge
                        status={newsletter.status}
                    />
                </div>

                <div className="mt-4 flex items-center justify-between">

                    <div className="flex items-center gap-2 text-xs text-slate-500">
                        <CalendarDays size={14} />
                        {newsletter.issue}
                    </div>

                    <NewsletterActions
                        newsletterId={newsletter.id}
                    />

                </div>
            </div>
        </div>
    );
}


/* ─────────────────────────────────────
   STATUS
───────────────────────────────────── */

function StatusBadge({
    status,
}: {
    status: NewsletterStatus;
}) {
    return (
        <span
            className={
                status === "Published"
                    ? "inline-flex w-fit rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700"
                    : "inline-flex w-fit rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700"
            }
        >
            {status}
        </span>
    );
}


/* ─────────────────────────────────────
   ACTIONS
───────────────────────────────────── */

function NewsletterActions({
    newsletterId,
}: {
    newsletterId: string;
}) {
    return (
        <div className="flex items-center gap-1">

            <Link
                to={`/teacher/newsletters/${newsletterId}/edit`}
                title="Edit"
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
                <Edit3 size={16} />
            </Link>

            <Link
                to={`/issues/${newsletterId}`}
                title="View"
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
                <Eye size={16} />
            </Link>

            <button
                type="button"
                title="Delete"
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-600"
            >
                <Trash2 size={16} />
            </button>

            <button
                type="button"
                title="More"
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
                <MoreHorizontal size={16} />
            </button>

        </div>
    );
}