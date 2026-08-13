import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
    { label: "Home", to: "/" },
    { label: "Articles", to: "/articles" },
    { label: "Issues", to: "/issues" },
    { label: "Achievements", to: "/achievements" },
    { label: "Creative Corner", to: "/creative-corner" },
    { label: "About", to: "/about" },
];

export function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-blue-950 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Main Row */}
                <div className="flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between">

                    {/* Newsletter Brand */}
                    <Link
                        to="/"
                        className="shrink-0 text-sm font-bold tracking-tight"
                    >
                        <span className="text-amber-400">Newsletter</span>{" "}
                        Club
                    </Link>

                    {/* Navigation */}
                    <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="text-xs text-slate-300 transition-colors hover:text-white"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Teacher Login */}
                    <Link
                        to="/login"
                        className="inline-flex w-fit items-center gap-1.5 rounded-md border border-white/20 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-amber-400 hover:text-amber-400"
                    >
                        Teacher Login
                        <ArrowUpRight className="size-3" />
                    </Link>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col gap-2 border-t border-white/10 py-3 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        PM SHRI GSSS Dhanau · Dhanau, Barmer, Rajasthan
                    </p>

                    <p>
                        © {new Date().getFullYear()} PM SHRI GSSS Dhanau
                    </p>
                </div>
            </div>
        </footer>
    );
}