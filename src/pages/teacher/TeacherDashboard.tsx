import {
    ArrowRight,
    Award,
    FileText,
    Plus,
    Send,
} from "lucide-react";
import { Link } from "react-router";

export function TeacherDashboard() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <section>
                <p className="text-sm font-medium text-amber-600">
                    Teacher Portal
                </p>

                <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                    Dashboard
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                    Manage your school's newsletter content.
                </p>
            </section>

            {/* Stats */}
            <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <StatCard
                    title="Newsletters"
                    value="12"
                    icon={<Send size={20} />}
                    href="/teacher/newsletters"
                />

                <StatCard
                    title="Articles"
                    value="38"
                    icon={<FileText size={20} />}
                    href="/teacher/articles"
                />

                <StatCard
                    title="Achievements"
                    value="24"
                    icon={<Award size={20} />}
                    href="/teacher/achievements"
                />
            </section>

            {/* Quick Actions */}
            <section>
                <div className="mb-4">
                    <h2 className="text-base font-semibold text-slate-900">
                        Quick actions
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Create and manage school content.
                    </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <QuickAction
                        href="/teacher/newsletters/new"
                        icon={<Plus size={18} />}
                        title="New Newsletter"
                        description="Create a new newsletter issue"
                    />

                    <QuickAction
                        href="/teacher/articles/new"
                        icon={<FileText size={18} />}
                        title="New Article"
                        description="Write a school article"
                    />

                    <QuickAction
                        href="/teacher/achievements/new"
                        icon={<Award size={18} />}
                        title="Add Achievement"
                        description="Record a student achievement"
                    />
                </div>
            </section>

            {/* Recent Newsletters */}
            <section>
                <div className="mb-4 flex items-center justify-between gap-4">
                    <div>
                        <h2 className="text-base font-semibold text-slate-900">
                            Recent newsletters
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Your latest newsletter issues.
                        </p>
                    </div>

                    <Link
                        to="/teacher/newsletters"
                        className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 text-sm font-medium text-slate-600 transition hover:text-slate-950"
                    >
                        View all
                        <ArrowRight size={15} />
                    </Link>
                </div>

                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                    <NewsletterRow
                        title="August 2026 Newsletter"
                        issue="August 2026"
                        status="Published"
                    />

                    <NewsletterRow
                        title="July 2026 Newsletter"
                        issue="July 2026"
                        status="Published"
                    />

                    <NewsletterRow
                        title="June 2026 Newsletter"
                        issue="June 2026"
                        status="Draft"
                    />
                </div>
            </section>
        </div>
    );
}


/* ─────────────────────────────────────
   STAT CARD
───────────────────────────────────── */

interface StatCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
    href: string;
}

function StatCard({
    title,
    value,
    icon,
    href,
}: StatCardProps) {
    return (
        <Link
            to={href}
            className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-sm"
        >
            <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                    {icon}
                </div>

                <ArrowRight
                    size={16}
                    className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-slate-600"
                />
            </div>

            <p className="mt-5 text-sm text-slate-500">
                {title}
            </p>

            <p className="mt-1 text-2xl font-semibold text-slate-900">
                {value}
            </p>
        </Link>
    );
}


/* ─────────────────────────────────────
   QUICK ACTION
───────────────────────────────────── */

interface QuickActionProps {
    href: string;
    icon: React.ReactNode;
    title: string;
    description: string;
}

function QuickAction({
    href,
    icon,
    title,
    description,
}: QuickActionProps) {
    return (
        <Link
            to={href}
            className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:shadow-sm"
        >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition group-hover:bg-slate-900 group-hover:text-white">
                {icon}
            </div>

            <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900">
                    {title}
                </p>

                <p className="mt-0.5 truncate text-xs text-slate-500">
                    {description}
                </p>
            </div>
        </Link>
    );
}


/* ─────────────────────────────────────
   NEWSLETTER ROW
───────────────────────────────────── */

interface NewsletterRowProps {
    title: string;
    issue: string;
    status: "Published" | "Draft";
}

function NewsletterRow({
    title,
    issue,
    status,
}: NewsletterRowProps) {
    return (
        <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-4 last:border-0">
            <div className="min-w-0">
                <p className="truncate text-sm font-medium text-slate-900">
                    {title}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                    {issue}
                </p>
            </div>

            <span
                className={
                    status === "Published"
                        ? "shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700"
                        : "shrink-0 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700"
                }
            >
                {status}
            </span>
        </div>
    );
}