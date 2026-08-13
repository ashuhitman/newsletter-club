import { useState } from "react";
import {
    ArrowLeft,
    Eye,
    EyeOff,
    LockKeyhole,
    Mail,
} from "lucide-react";
import { Link, useNavigate } from "react-router";

import { useAppDispatch } from "../../app/hooks";
import { setUser } from "../../features/auth/authSlice";
import { loginTeacher } from "../../services/authService";

export function TeacherLogin() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(
        event: React.SubmitEvent<HTMLFormElement>,
    ) {
        event.preventDefault();

        setError("");
        setLoading(true);

        try {
            const user = await loginTeacher(email, password);

            dispatch(setUser(user));

            navigate("/teacher", {
                replace: true,
            });
        } catch {
            setError(
                "Unable to sign in. Please check your email and password.",
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen bg-stone-50">

            {/* ═══════════════════════════════════════
          DESKTOP
      ═══════════════════════════════════════ */}
            <div className="hidden min-h-screen lg:grid lg:grid-cols-[1.05fr_0.95fr]">

                {/* Desktop Brand */}
                <section className="relative overflow-hidden bg-slate-950">

                    <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full border border-white/10" />

                    <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full border border-white/10" />

                    <div className="relative flex min-h-screen flex-col justify-between p-12 xl:p-16">

                        <div>
                            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-2 shadow-lg">
                                <img
                                    src="/images/pm-shri-logo.png"
                                    alt="PM SHRI Schools"
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-400">
                                PM SHRI GSSS Dhanau
                            </p>

                            <h1 className="mt-5 max-w-lg text-4xl font-semibold leading-tight text-white xl:text-5xl">
                                School
                                <br />
                                Newsletter Club
                            </h1>

                            <p className="mt-6 max-w-md text-base leading-7 text-slate-400">
                                A digital space for sharing the stories,
                                achievements and creative work of our
                                school community.
                            </p>
                        </div>

                        <div>
                            <div className="mb-5 h-px w-20 bg-amber-400/70" />

                            <p className="text-sm text-slate-500">
                                Teacher Publishing Portal
                            </p>

                            <p className="mt-1 max-w-md text-xs leading-5 text-slate-600">
                                PM SHRI Government Senior Secondary School,
                                Dhanau
                            </p>
                        </div>

                    </div>
                </section>

                {/* Desktop Login */}
                <LoginForm
                    email={email}
                    password={password}
                    showPassword={showPassword}
                    loading={loading}
                    error={error}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    setShowPassword={setShowPassword}
                    handleSubmit={handleSubmit}
                    desktop
                />
            </div>


            {/* ═══════════════════════════════════════
          MOBILE
      ═══════════════════════════════════════ */}
            <div className="flex min-h-screen flex-col px-5 py-8 lg:hidden">

                {/* Top Brand */}
                <div className="text-center">

                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-200">
                        <img
                            src="/images/pm-shri-logo.png"
                            alt="PM SHRI Schools"
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-600">
                        PM SHRI GSSS DHANAU
                    </p>

                    <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-950">
                        Newsletter Club
                    </h1>

                </div>

                {/* Login Card */}
                <div className="mt-9 flex-1">

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                        <div className="mb-6">
                            <p className="text-sm font-medium text-amber-600">
                                Teacher Portal
                            </p>

                            <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-950">
                                Welcome back
                            </h2>

                            <p className="mt-1.5 text-sm leading-5 text-slate-500">
                                Sign in to manage school newsletters.
                            </p>
                        </div>

                        {error && (
                            <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm leading-5 text-red-700">
                                {error}
                            </div>
                        )}

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="mobile-email"
                                    className="mb-1.5 block text-sm font-medium text-slate-700"
                                >
                                    Email address
                                </label>

                                <div className="relative">
                                    <Mail
                                        size={17}
                                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <input
                                        id="mobile-email"
                                        type="email"
                                        value={email}
                                        onChange={(event) =>
                                            setEmail(event.target.value)
                                        }
                                        placeholder="teacher@example.com"
                                        autoComplete="email"
                                        required
                                        className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label
                                    htmlFor="mobile-password"
                                    className="mb-1.5 block text-sm font-medium text-slate-700"
                                >
                                    Password
                                </label>

                                <div className="relative">
                                    <LockKeyhole
                                        size={17}
                                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <input
                                        id="mobile-password"
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        value={password}
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                        placeholder="Enter your password"
                                        autoComplete="current-password"
                                        required
                                        className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-11 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(
                                                (value) => !value,
                                            )
                                        }
                                        className="absolute right-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100"
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                    >
                                        {showPassword ? (
                                            <EyeOff size={17} />
                                        ) : (
                                            <Eye size={17} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-2 flex h-11 w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 text-sm font-semibold text-white transition hover:bg-slate-800 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? (
                                    <span className="flex items-center gap-2">
                                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                        Signing in...
                                    </span>
                                ) : (
                                    "Sign in"
                                )}
                            </button>

                        </form>
                    </div>

                </div>

                {/* Mobile Footer */}
                <div className="mt-7 text-center">

                    <Link
                        to="/"
                        className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900"
                    >
                        <ArrowLeft size={15} />
                        Back to newsletter
                    </Link>

                    <p className="mt-5 text-[11px] leading-4 text-slate-400">
                        Authorized school teachers only
                    </p>

                </div>

            </div>
        </main>
    );
}


/* ═══════════════════════════════════════════
   REUSABLE DESKTOP LOGIN FORM
═══════════════════════════════════════════ */

interface LoginFormProps {
    email: string;
    password: string;
    showPassword: boolean;
    loading: boolean;
    error: string;

    setEmail: (value: string) => void;
    setPassword: (value: string) => void;
    setShowPassword: (
        value: boolean | ((value: boolean) => boolean),
    ) => void;

    handleSubmit: (
        event: React.SubmitEvent<HTMLFormElement>,
    ) => void;

    desktop?: boolean;
}

function LoginForm({
    email,
    password,
    showPassword,
    loading,
    error,
    setEmail,
    setPassword,
    setShowPassword,
    handleSubmit,
}: LoginFormProps) {
    return (
        <section className="flex min-h-screen items-center justify-center px-8">

            <div className="w-full max-w-md">

                <div className="mb-8">

                    <p className="mb-3 text-sm font-medium text-amber-600">
                        Teacher Portal
                    </p>

                    <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                        Welcome back
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                        Sign in to manage and publish school newsletters.
                    </p>

                </div>

                {error && (
                    <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {error}
                    </div>
                )}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    {/* Email */}
                    <div>

                        <label
                            htmlFor="desktop-email"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Email address
                        </label>

                        <div className="relative">

                            <Mail
                                size={18}
                                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <input
                                id="desktop-email"
                                type="email"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                placeholder="teacher@example.com"
                                autoComplete="email"
                                required
                                className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
                            />

                        </div>
                    </div>

                    {/* Password */}
                    <div>

                        <label
                            htmlFor="desktop-password"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Password
                        </label>

                        <div className="relative">

                            <LockKeyhole
                                size={18}
                                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <input
                                id="desktop-password"
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                placeholder="Enter your password"
                                autoComplete="current-password"
                                required
                                className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-12 text-sm outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(
                                        (value) => !value,
                                    )
                                }
                                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100"
                            >
                                {showPassword ? (
                                    <EyeOff size={18} />
                                ) : (
                                    <Eye size={18} />
                                )}
                            </button>

                        </div>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-2 flex h-12 w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? (
                            <span className="flex items-center gap-2">
                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                Signing in...
                            </span>
                        ) : (
                            "Sign in"
                        )}
                    </button>

                </form>

                <div className="mt-8 border-t border-slate-200 pt-6">

                    <Link
                        to="/"
                        className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900"
                    >
                        <ArrowLeft size={16} />
                        Back to newsletter
                    </Link>

                </div>

                <p className="mt-8 text-center text-xs leading-5 text-slate-400">
                    This portal is restricted to authorized
                    school teachers.
                </p>

            </div>
        </section>
    );
}