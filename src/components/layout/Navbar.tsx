import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";

const navigation = [
    { label: "Home", to: "/" },
    { label: "Articles", to: "/articles" },
    { label: "Issues", to: "/issues" },
    { label: "Achievements", to: "/achievements" },
    // { label: "Creative Corner", to: "/creative-corner" },
    { label: "About", to: "/about" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Brand */}
                <Link
                    to="/"
                    className="flex items-center gap-3"
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        src="/images/pm-shri-logo.png"
                        alt="PM SHRI"
                        className="h-12 w-12 object-contain"
                    />

                    <div className="leading-tight">
                        <p className="text-sm font-bold tracking-tight text-slate-950 sm:text-base">
                            PM SHRI GSSS DHANAU
                        </p>

                        <p className="text-xs font-medium text-amber-600">
                            Newsletter Club
                        </p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-1 lg:flex">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.to === "/"}
                            className={({ isActive }) =>
                                [
                                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-blue-950 text-white"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                                ].join(" ")
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile Button */}
                <button
                    type="button"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((current) => !current)}
                    className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
                >
                    {isOpen ? <X size={23} /> : <Menu size={23} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="border-t border-slate-200 bg-white lg:hidden">
                    <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.to === "/"}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    [
                                        "rounded-lg px-3 py-3 text-sm font-medium",
                                        isActive
                                            ? "bg-blue-950 text-white"
                                            : "text-slate-700 hover:bg-slate-100",
                                    ].join(" ")
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}