export interface NewsletterTheme {
    cover: {
        background: string;
        gradient: string;
        accent: string;
        accentSoft: string;
        decoration: string;
        text: string;
        mutedText: string;
        border: string;
    };

    end: {
        background: string;
        gradient: string;
        accent: string;
        accentSoft: string;
        decoration: string;
        text: string;
        mutedText: string;
        border: string;
    };
}


/* ─────────────────────────────────────
   COLOR PALETTE

   These are reused intelligently.
   We don't need one theme per issue.
───────────────────────────────────── */

const palettes = [

    {
        cover: {
            background: "bg-blue-950",
            gradient: "from-blue-950 via-blue-900 to-slate-950",
            accent: "text-amber-300",
            accentSoft: "bg-amber-400/10",
            decoration: "bg-amber-400/10",
            text: "text-white",
            mutedText: "text-white/60",
            border: "border-amber-300/30",
        },

        end: {
            background: "bg-slate-950",
            gradient: "from-slate-950 via-blue-950 to-slate-900",
            accent: "text-amber-300",
            accentSoft: "bg-amber-400/10",
            decoration: "bg-amber-400/10",
            text: "text-white",
            mutedText: "text-white/60",
            border: "border-amber-300/30",
        },
    },


    {
        cover: {
            background: "bg-emerald-950",
            gradient: "from-emerald-950 via-emerald-900 to-teal-950",
            accent: "text-lime-300",
            accentSoft: "bg-lime-400/10",
            decoration: "bg-lime-400/10",
            text: "text-white",
            mutedText: "text-white/60",
            border: "border-lime-300/30",
        },

        end: {
            background: "bg-teal-950",
            gradient: "from-teal-950 via-emerald-950 to-slate-950",
            accent: "text-lime-300",
            accentSoft: "bg-lime-400/10",
            decoration: "bg-lime-400/10",
            text: "text-white",
            mutedText: "text-white/60",
            border: "border-lime-300/30",
        },
    },


    {
        cover: {
            background: "bg-rose-950",
            gradient: "from-rose-950 via-red-950 to-slate-950",
            accent: "text-orange-300",
            accentSoft: "bg-orange-400/10",
            decoration: "bg-orange-400/10",
            text: "text-white",
            mutedText: "text-white/60",
            border: "border-orange-300/30",
        },

        end: {
            background: "bg-red-950",
            gradient: "from-red-950 via-rose-950 to-slate-950",
            accent: "text-orange-300",
            accentSoft: "bg-orange-400/10",
            decoration: "bg-orange-400/10",
            text: "text-white",
            mutedText: "text-white/60",
            border: "border-orange-300/30",
        },
    },


    {
        cover: {
            background: "bg-indigo-950",
            gradient: "from-indigo-950 via-indigo-900 to-violet-950",
            accent: "text-cyan-300",
            accentSoft: "bg-cyan-400/10",
            decoration: "bg-cyan-400/10",
            text: "text-white",
            mutedText: "text-white/60",
            border: "border-cyan-300/30",
        },

        end: {
            background: "bg-violet-950",
            gradient: "from-violet-950 via-indigo-950 to-slate-950",
            accent: "text-cyan-300",
            accentSoft: "bg-cyan-400/10",
            decoration: "bg-cyan-400/10",
            text: "text-white",
            mutedText: "text-white/60",
            border: "border-cyan-300/30",
        },
    },


    {
        cover: {
            background: "bg-cyan-950",
            gradient: "from-cyan-950 via-teal-900 to-slate-950",
            accent: "text-yellow-300",
            accentSoft: "bg-yellow-400/10",
            decoration: "bg-yellow-400/10",
            text: "text-white",
            mutedText: "text-white/60",
            border: "border-yellow-300/30",
        },

        end: {
            background: "bg-slate-900",
            gradient: "from-slate-900 via-cyan-950 to-teal-950",
            accent: "text-yellow-300",
            accentSoft: "bg-yellow-400/10",
            decoration: "bg-yellow-400/10",
            text: "text-white",
            mutedText: "text-white/60",
            border: "border-yellow-300/30",
        },
    },


    {
        cover: {
            background: "bg-orange-950",
            gradient: "from-orange-950 via-amber-950 to-red-950",
            accent: "text-yellow-300",
            accentSoft: "bg-yellow-400/10",
            decoration: "bg-yellow-400/10",
            text: "text-white",
            mutedText: "text-white/60",
            border: "border-yellow-300/30",
        },

        end: {
            background: "bg-amber-950",
            gradient: "from-amber-950 via-orange-950 to-slate-950",
            accent: "text-yellow-300",
            accentSoft: "bg-yellow-400/10",
            decoration: "bg-yellow-400/10",
            text: "text-white",
            mutedText: "text-white/60",
            border: "border-yellow-300/30",
        },
    },


    {
        cover: {
            background: "bg-purple-950",
            gradient: "from-purple-950 via-violet-900 to-slate-950",
            accent: "text-fuchsia-300",
            accentSoft: "bg-fuchsia-400/10",
            decoration: "bg-fuchsia-400/10",
            text: "text-white",
            mutedText: "text-white/60",
            border: "border-fuchsia-300/30",
        },

        end: {
            background: "bg-violet-950",
            gradient: "from-violet-950 via-purple-950 to-slate-950",
            accent: "text-fuchsia-300",
            accentSoft: "bg-fuchsia-400/10",
            decoration: "bg-fuchsia-400/10",
            text: "text-white",
            mutedText: "text-white/60",
            border: "border-fuchsia-300/30",
        },
    },


    {
        cover: {
            background: "bg-slate-950",
            gradient: "from-slate-950 via-slate-800 to-blue-950",
            accent: "text-sky-300",
            accentSoft: "bg-sky-400/10",
            decoration: "bg-sky-400/10",
            text: "text-white",
            mutedText: "text-white/60",
            border: "border-sky-300/30",
        },

        end: {
            background: "bg-blue-950",
            gradient: "from-blue-950 via-slate-900 to-slate-950",
            accent: "text-sky-300",
            accentSoft: "bg-sky-400/10",
            decoration: "bg-sky-400/10",
            text: "text-white",
            mutedText: "text-white/60",
            border: "border-sky-300/30",
        },
    },


    {
        cover: {
            background: "bg-stone-950",
            gradient: "from-stone-950 via-amber-950 to-orange-950",
            accent: "text-amber-300",
            accentSoft: "bg-amber-400/10",
            decoration: "bg-amber-400/10",
            text: "text-white",
            mutedText: "text-white/60",
            border: "border-amber-300/30",
        },

        end: {
            background: "bg-orange-950",
            gradient: "from-orange-950 via-stone-950 to-slate-950",
            accent: "text-amber-300",
            accentSoft: "bg-amber-400/10",
            decoration: "bg-amber-400/10",
            text: "text-white",
            mutedText: "text-white/60",
            border: "border-amber-300/30",
        },
    },


    {
        cover: {
            background: "bg-teal-950",
            gradient: "from-teal-950 via-cyan-950 to-slate-950",
            accent: "text-emerald-300",
            accentSoft: "bg-emerald-400/10",
            decoration: "bg-emerald-400/10",
            text: "text-white",
            mutedText: "text-white/60",
            border: "border-emerald-300/30",
        },

        end: {
            background: "bg-emerald-950",
            gradient: "from-emerald-950 via-teal-950 to-slate-950",
            accent: "text-emerald-300",
            accentSoft: "bg-emerald-400/10",
            decoration: "bg-emerald-400/10",
            text: "text-white",
            mutedText: "text-white/60",
            border: "border-emerald-300/30",
        },
    },
];


/* ─────────────────────────────────────
   CREATE STABLE INDEX

   Same year + month = same theme.

   Example:

   August 2026
   → always same theme

   August 2027
   → different theme
───────────────────────────────────── */

function getThemeIndex(
    year: number,
    month: number,
): number {

    const value =
        year * 12 + month;

    return (
        Math.abs(value)
        % palettes.length
    );
}


/* ─────────────────────────────────────
   GET NEWSLETTER THEME
───────────────────────────────────── */

export function getNewsletterTheme(
    year: number,
    month: number,
): NewsletterTheme {

    return palettes[
        getThemeIndex(
            year,
            month,
        )
    ];
}