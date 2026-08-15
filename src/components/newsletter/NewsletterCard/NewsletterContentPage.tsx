import {
    BookOpen,
    Trophy,
    Sparkles,
} from "lucide-react";

import type { Article } from "../../../features/article/articleApi";
import type { Achievement } from "../../../features/achievements/achievementApi";


interface NewsletterContentsPageProps {
    articles: Article[];
    achievements: Achievement[];
    compact?: boolean;
}


export function NewsletterContentsPage({
    articles,
    achievements,
    compact = false,
}: NewsletterContentsPageProps) {

    const totalItems =
        articles.length +
        achievements.length;


    return (
        <div
            className="
                relative
                h-full
                w-full
                overflow-hidden
                bg-[#eaf4ff]
                text-slate-900
            "
        >

            {/* ═════════════════════════════
                DECORATIVE BACKGROUND
            ═════════════════════════════ */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    size-40
                    rounded-full
                    border
                    border-blue-200/60
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    size-28
                    rounded-full
                    border
                    border-amber-300/50
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-20
                    -left-20
                    size-44
                    rounded-full
                    bg-blue-200/30
                    blur-2xl
                "
            />


            {/* ═════════════════════════════
                PAGE
            ═════════════════════════════ */}

            <div
                className={`
                    relative
                    z-10
                    flex
                    h-full
                    flex-col

                    ${compact
                        ? "px-4 py-5"
                        : "px-8 py-10 sm:px-12 sm:py-12"
                    }
                `}
            >

                {/* ═════════════════════════
                    HEADER
                ═════════════════════════ */}

                <header>

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                        "
                    >

                        <div>

                            <p
                                className={`
                                    font-black
                                    uppercase
                                    tracking-[0.25em]
                                    text-amber-600

                                    ${compact
                                        ? "text-[6px]"
                                        : "text-[9px]"
                                    }
                                `}
                            >
                                School Newsletter
                            </p>


                            <h1
                                className={`
                                    font-black
                                    tracking-tight
                                    text-blue-950

                                    ${compact
                                        ? "mt-1 text-2xl"
                                        : "mt-2 text-4xl"
                                    }
                                `}
                            >
                                Contents
                            </h1>

                        </div>


                        {/* PAGE NUMBER / TOTAL */}

                        <div
                            className="
                                text-right
                            "
                        >

                            <Sparkles
                                className={`
                                    ml-auto
                                    text-amber-500

                                    ${compact
                                        ? "size-3"
                                        : "size-5"
                                    }
                                `}
                            />

                            <p
                                className={`
                                    mt-1
                                    font-bold
                                    text-slate-400

                                    ${compact
                                        ? "text-[6px]"
                                        : "text-[9px]"
                                    }
                                `}
                            >
                                {totalItems}{" "}
                                {totalItems === 1
                                    ? "story"
                                    : "stories"}
                            </p>

                        </div>

                    </div>


                    {/* HEADER LINE */}

                    <div
                        className="
                            mt-3
                            flex
                            items-center
                            gap-2
                        "
                    >

                        <div
                            className="
                                h-[2px]
                                flex-1
                                bg-blue-950
                            "
                        />

                        <div
                            className="
                                size-1.5
                                rotate-45
                                bg-amber-500
                            "
                        />

                        <div
                            className="
                                h-px
                                w-10
                                bg-slate-300
                            "
                        />

                    </div>

                </header>


                {/* ═════════════════════════
                    CONTENT
                ═════════════════════════ */}

                <div
                    className={`
                        min-h-0
                        flex-1
                        overflow-hidden

                        ${compact
                            ? "mt-4"
                            : "mt-8"
                        }
                    `}
                >

                    {/* ═════════════════════
                        ARTICLES
                    ═════════════════════ */}

                    {articles.length > 0 && (

                        <section>

                            <SectionHeading
                                icon={
                                    <BookOpen
                                        className={
                                            compact
                                                ? "size-3"
                                                : "size-4"
                                        }
                                    />
                                }
                                title="Articles"
                                count={
                                    articles.length
                                }
                                compact={
                                    compact
                                }
                            />


                            <div
                                className={`
                                    border-l-2
                                    border-blue-200

                                    ${compact
                                        ? "mt-2 space-y-2 pl-2.5"
                                        : "mt-4 space-y-4 pl-4"
                                    }
                                `}
                            >

                                {articles.map(
                                    (
                                        article,
                                        index,
                                    ) => (

                                        <ContentItem
                                            key={
                                                article.$id
                                            }
                                            number={
                                                index + 1
                                            }
                                            title={
                                                article.title
                                            }
                                            accent="blue"
                                            compact={
                                                compact
                                            }
                                        />

                                    ),
                                )}

                            </div>

                        </section>

                    )}


                    {/* ═════════════════════
                        ACHIEVEMENTS
                    ═════════════════════ */}

                    {achievements.length > 0 && (

                        <section
                            className={
                                compact
                                    ? "mt-5"
                                    : "mt-8"
                            }
                        >

                            <SectionHeading
                                icon={
                                    <Trophy
                                        className={
                                            compact
                                                ? "size-3"
                                                : "size-4"
                                        }
                                    />
                                }
                                title="Achievements"
                                count={
                                    achievements.length
                                }
                                compact={
                                    compact
                                }
                            />


                            <div
                                className={`
                                    border-l-2
                                    border-amber-200

                                    ${compact
                                        ? "mt-2 space-y-2 pl-2.5"
                                        : "mt-4 space-y-4 pl-4"
                                    }
                                `}
                            >

                                {achievements.map(
                                    (
                                        achievement,
                                        index,
                                    ) => (

                                        <ContentItem
                                            key={
                                                achievement.$id
                                            }
                                            number={
                                                articles.length +
                                                index +
                                                1
                                            }
                                            title={
                                                achievement.title
                                            }
                                            accent="amber"
                                            compact={
                                                compact
                                            }
                                        />

                                    ),
                                )}

                            </div>

                        </section>

                    )}


                    {/* EMPTY */}

                    {totalItems === 0 && (

                        <div
                            className="
                                flex
                                h-full
                                items-center
                                justify-center
                                text-center
                            "
                        >

                            <p
                                className="
                                    text-sm
                                    text-slate-400
                                "
                            >
                                No stories in this issue.
                            </p>

                        </div>

                    )}

                </div>


                {/* ═════════════════════════
                    FOOTER
                ═════════════════════════ */}

                <footer
                    className={`
                        flex
                        items-center
                        justify-between
                        border-t
                        border-slate-200

                        ${compact
                            ? "pt-2"
                            : "pt-4"
                        }
                    `}
                >

                    <span
                        className={`
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            text-slate-400

                            ${compact
                                ? "text-[5px]"
                                : "text-[8px]"
                            }
                        `}
                    >
                        PM SHRI GSSS DHANAU
                    </span>


                    <span
                        className={`
                            font-semibold
                            text-amber-600

                            ${compact
                                ? "text-[6px]"
                                : "text-[9px]"
                            }
                        `}
                    >
                        Explore · Learn · Inspire
                    </span>

                </footer>

            </div>

        </div>
    );
}


/* ─────────────────────────────────────
   SECTION HEADING
───────────────────────────────────── */

interface SectionHeadingProps {
    icon: React.ReactNode;
    title: string;
    count: number;
    compact: boolean;
}


function SectionHeading({
    icon,
    title,
    count,
    compact,
}: SectionHeadingProps) {

    return (
        <div
            className="
                flex
                items-center
                justify-between
            "
        >

            <div
                className="
                    flex
                    items-center
                    gap-2
                "
            >

                <div
                    className={`
                        flex
                        items-center
                        justify-center
                        rounded-md
                        bg-blue-950
                        text-white

                        ${compact
                            ? "size-5"
                            : "size-7"
                        }
                    `}
                >
                    {icon}
                </div>


                <h2
                    className={`
                        font-black
                        uppercase
                        tracking-[0.12em]
                        text-blue-950

                        ${compact
                            ? "text-[8px]"
                            : "text-xs"
                        }
                    `}
                >
                    {title}
                </h2>

            </div>


            <span
                className={`
                    rounded-full
                    bg-white
                    font-bold
                    text-slate-400
                    ring-1
                    ring-slate-200

                    ${compact
                        ? "px-1.5 py-0.5 text-[6px]"
                        : "px-2 py-1 text-[9px]"
                    }
                `}
            >
                {count}
            </span>

        </div>
    );
}


/* ─────────────────────────────────────
   CONTENT ITEM
───────────────────────────────────── */

interface ContentItemProps {
    number: number;
    title: string;
    accent: "blue" | "amber";
    compact: boolean;
}


function ContentItem({
    number,
    title,
    accent,
    compact,
}: ContentItemProps) {

    const numberColor =
        accent === "blue"
            ? "text-blue-900"
            : "text-amber-700";


    return (
        <div
            className="
                flex
                items-start
                gap-2
            "
        >

            {/* NUMBER */}

            <span
                className={`
                    shrink-0
                    font-black
                    leading-none
                    ${numberColor}

                    ${compact
                        ? "w-5 text-[8px]"
                        : "w-7 text-sm"
                    }
                `}
            >
                {String(
                    number,
                ).padStart(
                    2,
                    "0",
                )}
            </span>


            {/* TITLE */}

            <div
                className="
                    min-w-0
                    flex-1
                "
            >

                <p
                    className={`
                        font-semibold
                        leading-tight
                        text-slate-700

                        ${compact
                            ? "line-clamp-2 text-[8px]"
                            : "text-sm"
                        }
                    `}
                >
                    {title}
                </p>


                {/* DOTTED GUIDE */}

                <div
                    className={`
                        mt-1
                        border-b
                        border-dotted
                        border-slate-300
                    `}
                />

            </div>

        </div>
    );
}