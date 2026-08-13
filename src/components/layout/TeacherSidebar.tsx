import { useState } from "react";
import {
    Award,
    BookOpen,
    ChevronLeft,
    ChevronRight,
    FileText,
    LayoutDashboard,
    LogOut,
    Newspaper,
    User,
    X,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { clearUser } from "../../features/auth/authSlice";
import { logoutTeacher } from "../../services/authService";

interface TeacherSidebarProps {
    mobileOpen: boolean;
    onMobileClose: () => void;
}

export function TeacherSidebar({
    mobileOpen,
    onMobileClose,
}: TeacherSidebarProps) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const user = useAppSelector(
        (state) => state.auth.user,
    );

    const [collapsed, setCollapsed] = useState(false);

    async function handleLogout() {
        try {
            await logoutTeacher();
        } finally {
            dispatch(clearUser());

            navigate("/teacher/login", {
                replace: true,
            });
        }
    }

    return (
        <>
            {/* Mobile Overlay */}
            {mobileOpen && (
                <button
                    type="button"
                    aria-label="Close sidebar"
                    onClick={onMobileClose}
                    className="fixed inset-0 z-40 cursor-pointer bg-slate-950/40 lg:hidden"
                />
            )}

            <aside
                className={`
          fixed inset-y-0 left-0 z-50 flex flex-col
          border-r border-slate-200 bg-white
          transition-all duration-200
          lg:sticky lg:top-0 lg:z-20 lg:h-screen

          ${collapsed ? "lg:w-[76px]" : "lg:w-64"}

          ${mobileOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }

          lg:translate-x-0
        `}
            >
                {/* Header */}
                <div className="flex h-16 shrink-0 items-center border-b border-slate-100 px-4">

                    <div className="flex min-w-0 flex-1 items-center gap-3">

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-[10px] font-bold text-white">
                            GSSS
                        </div>

                        {!collapsed && (
                            <div className="min-w-0">
                                <p className="truncate text-sm font-semibold text-slate-900">
                                    Teacher Portal
                                </p>

                                <p className="truncate text-[11px] text-slate-400">
                                    PM SHRI GSSS Dhanau
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Desktop Collapse */}
                    <button
                        type="button"
                        onClick={() =>
                            setCollapsed(
                                (value) => !value,
                            )
                        }
                        className="hidden h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 lg:flex"
                        aria-label={
                            collapsed
                                ? "Expand sidebar"
                                : "Collapse sidebar"
                        }
                    >
                        {collapsed ? (
                            <ChevronRight size={17} />
                        ) : (
                            <ChevronLeft size={17} />
                        )}
                    </button>

                    {/* Mobile Close */}
                    <button
                        type="button"
                        onClick={onMobileClose}
                        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 lg:hidden"
                        aria-label="Close sidebar"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto px-3 py-5">

                    <NavSection
                        label="Main"
                        collapsed={collapsed}
                    />

                    <NavItem
                        to="/teacher"
                        icon={<LayoutDashboard size={18} />}
                        label="Dashboard"
                        collapsed={collapsed}
                        end
                        onNavigate={onMobileClose}
                    />

                    <NavSection
                        label="Content"
                        collapsed={collapsed}
                    />

                    <NavItem
                        to="/teacher/newsletters"
                        icon={<Newspaper size={18} />}
                        label="Newsletters"
                        collapsed={collapsed}
                        onNavigate={onMobileClose}
                    />

                    <NavItem
                        to="/teacher/articles"
                        icon={<FileText size={18} />}
                        label="Articles"
                        collapsed={collapsed}
                        onNavigate={onMobileClose}
                    />

                    <NavItem
                        to="/teacher/achievements"
                        icon={<Award size={18} />}
                        label="Achievements"
                        collapsed={collapsed}
                        onNavigate={onMobileClose}
                    />

                    <NavSection
                        label="Management"
                        collapsed={collapsed}
                    />

                    <NavItem
                        to="/teacher/media"
                        icon={<BookOpen size={18} />}
                        label="Media"
                        collapsed={collapsed}
                        onNavigate={onMobileClose}
                    />
                </nav>

                {/* Account */}
                <div className="border-t border-slate-100 p-3">

                    {!collapsed && (
                        <div className="mb-2 flex items-center gap-3 rounded-xl px-2 py-2">

                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                                {getInitials(user?.name)}
                            </div>

                            <div className="min-w-0">
                                <p className="truncate text-sm font-medium text-slate-800">
                                    {user?.name || "Teacher"}
                                </p>

                                <p className="truncate text-xs text-slate-400">
                                    {user?.email || ""}
                                </p>
                            </div>
                        </div>
                    )}

                    <NavItem
                        to="/teacher/profile"
                        icon={<User size={18} />}
                        label="Profile"
                        collapsed={collapsed}
                        onNavigate={onMobileClose}
                    />

                    <button
                        type="button"
                        onClick={handleLogout}
                        title={collapsed ? "Logout" : undefined}
                        className={`
              mt-1 flex w-full cursor-pointer items-center
              rounded-lg text-sm text-slate-500
              transition hover:bg-red-50 hover:text-red-600

              ${collapsed
                                ? "justify-center px-2 py-2.5"
                                : "gap-3 px-3 py-2.5"
                            }
            `}
                    >
                        <LogOut
                            size={18}
                            className="shrink-0"
                        />

                        {!collapsed && (
                            <span>Logout</span>
                        )}
                    </button>
                </div>
            </aside>
        </>
    );
}


/* ─────────────────────────────────────
   NAV SECTION
───────────────────────────────────── */

interface NavSectionProps {
    label: string;
    collapsed: boolean;
}

function NavSection({
    label,
    collapsed,
}: NavSectionProps) {
    if (collapsed) {
        return <div className="h-5" />;
    }

    return (
        <p className="mb-2 mt-5 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 first:mt-0">
            {label}
        </p>
    );
}


/* ─────────────────────────────────────
   NAV ITEM
───────────────────────────────────── */

interface NavItemProps {
    to: string;
    icon: React.ReactNode;
    label: string;
    collapsed: boolean;
    end?: boolean;
    onNavigate?: () => void;
}

function NavItem({
    to,
    icon,
    label,
    collapsed,
    end = false,
    onNavigate,
}: NavItemProps) {
    return (
        <NavLink
            to={to}
            end={end}
            onClick={onNavigate}
            title={collapsed ? label : undefined}
            className={({ isActive }) =>
                `
        group mb-1 flex items-center rounded-lg
        text-sm font-medium transition

        ${collapsed
                    ? "justify-center px-2 py-2.5"
                    : "gap-3 px-3 py-2.5"
                }

        ${isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                }
        `
            }
        >
            {icon}

            {!collapsed && (
                <span>{label}</span>
            )}
        </NavLink>
    );
}


/* ─────────────────────────────────────
   INITIALS
───────────────────────────────────── */

function getInitials(
    name?: string,
) {
    if (!name) {
        return "T";
    }

    const parts = name
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    if (parts.length === 1) {
        return parts[0]
            .slice(0, 2)
            .toUpperCase();
    }

    return (
        parts[0][0] +
        parts[parts.length - 1][0]
    ).toUpperCase();
}