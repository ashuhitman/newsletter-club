import {
    CalendarDays,
    Trophy,
    Star,
} from "lucide-react";

import type { Achievement } from "../../../features/achievements/achievementApi";
import { getImageUrl } from "../../../services/storageService";


interface NewsletterAchievementPageProps {
    achievement: Achievement;
    compact?: boolean;
}


export function NewsletterAchievementPage({
    achievement,
    compact = false,
}: NewsletterAchievementPageProps) {

    return (
        <article
            className="
                relative
                h-full
                w-full
                overflow-hidden
                bg-[#f4edff]
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
                    border-purple-200/60
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
                    bg-purple-200/30
                    blur-3xl
                "
            />


            <div
                className={`
                    relative
                    z-10
                    flex
                    h-full
                    flex-col
                    overflow-hidden

                    ${compact
                        ? "px-5 py-6"
                        : "px-8 py-10 sm:px-14 sm:py-12"
                    }
                `}
            >

                {/* ═════════════════════════
                    HEADER
                ═════════════════════════ */}

                <div
                    className="
                        flex
                        shrink-0
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
                                rounded-full
                                bg-amber-400
                                text-white
                                shadow-sm

                                ${compact
                                    ? "size-5"
                                    : "size-8"
                                }
                            `}
                        >

                            <Trophy
                                className={
                                    compact
                                        ? "size-3"
                                        : "size-4"
                                }
                            />

                        </div>


                        <div>

                            <p
                                className={`
                                    font-black
                                    uppercase
                                    tracking-[0.2em]
                                    text-amber-700

                                    ${compact
                                        ? "text-[6px]"
                                        : "text-[9px]"
                                    }
                                `}
                            >
                                Achievement
                            </p>


                            {!compact && (
                                <p
                                    className="
                                        mt-0.5
                                        text-[9px]
                                        font-medium
                                        uppercase
                                        tracking-wider
                                        text-slate-400
                                    "
                                >
                                    Celebrating excellence
                                </p>
                            )}

                        </div>

                    </div>


                    <Star
                        className={`
                            fill-amber-300
                            text-amber-400

                            ${compact
                                ? "size-3"
                                : "size-5"
                            }
                        `}
                    />

                </div>


                {/* ═════════════════════════
                    TITLE
                ═════════════════════════ */}

                <h2
                    className={`
                        shrink-0
                        font-black
                        leading-[1.05]
                        tracking-tight
                        text-slate-950

                        ${compact
                            ? "mt-3 line-clamp-3 text-lg"
                            : "mt-5 text-3xl sm:text-4xl"
                        }
                    `}
                >
                    {achievement.title}
                </h2>


                {/* ═════════════════════════
                    IMAGE
                ═════════════════════════ */}

                {achievement.imageFileId && (

                    <div
                        className={`
                            relative
                            w-full
                            shrink-0
                            overflow-hidden
                            rounded-xl
                            bg-slate-200
                            shadow-md

                            ${compact
                                ? "mt-4 h-[28%]"
                                : "mt-6 h-[34%]"
                            }
                        `}
                    >

                        <img
                            src={getImageUrl(
                                achievement.imageFileId
                            )}
                            alt={achievement.title}
                            className="
                                h-full
                                w-full
                                object-cover
                            "
                        />


                        {/* IMAGE OVERLAY */}

                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-blue-950/60
                                via-transparent
                                to-transparent
                            "
                        />


                        {/* IMAGE BADGE */}

                        <div
                            className="
                                absolute
                                bottom-3
                                left-3
                                flex
                                items-center
                                gap-1.5
                                rounded-full
                                bg-white/90
                                px-2.5
                                py-1
                                shadow-sm
                                backdrop-blur-sm
                            "
                        >

                            <Trophy
                                className="
                                    size-3
                                    text-amber-600
                                "
                            />

                            <span
                                className="
                                    text-[7px]
                                    font-bold
                                    uppercase
                                    tracking-wider
                                    text-blue-950
                                "
                            >
                                Proud Moment
                            </span>

                        </div>

                    </div>

                )}


                {/* ═════════════════════════
                    PERSON / CATEGORY
                ═════════════════════════ */}

                <div
                    className={`
                        flex
                        shrink-0
                        items-center
                        justify-between
                        gap-3

                        ${compact
                            ? "mt-3"
                            : "mt-4"
                        }
                    `}
                >

                    {/* NAME */}

                    <div
                        className="
                            min-w-0
                        "
                    >

                        <p
                            className={`
                                uppercase
                                tracking-[0.15em]
                                text-slate-400

                                ${compact
                                    ? "text-[6px]"
                                    : "text-[8px]"
                                }
                            `}
                        >
                            Achieved by
                        </p>


                        <p
                            className={`
                                truncate
                                font-bold
                                text-blue-950

                                ${compact
                                    ? "mt-0.5 text-[9px]"
                                    : "mt-1 text-sm"
                                }
                            `}
                        >
                            {achievement.studentName}
                        </p>

                    </div>


                    {/* CATEGORY */}

                    {achievement.category && (

                        <span
                            className={`
                                shrink-0
                                rounded-full
                                bg-amber-100
                                font-bold
                                text-amber-700
                                ring-1
                                ring-amber-200

                                ${compact
                                    ? "px-2 py-0.5 text-[6px]"
                                    : "px-3 py-1 text-[9px]"
                                }
                            `}
                        >
                            {achievement.category}
                        </span>

                    )}

                </div>


                {/* ═════════════════════════
                    DESCRIPTION
                ═════════════════════════ */}

                {achievement.achievement && (

                    <div
                        className={`
                            min-h-0
                            flex-1
                            overflow-hidden

                            ${compact
                                ? "mt-3"
                                : "mt-5"
                            }
                        `}
                    >

                        <p
                            className={`
                                text-slate-600

                                ${compact
                                    ? "line-clamp-5 text-[8px] leading-4"
                                    : "text-sm leading-6"
                                }
                            `}
                        >
                            {achievement.achievement}
                        </p>

                    </div>

                )}


                {/* ═════════════════════════
                    DATE
                ═════════════════════════ */}

                {achievement.achievementDate && (

                    <div
                        className={`
                            flex
                            shrink-0
                            items-center
                            gap-1.5
                            border-t
                            border-purple-200
                            text-slate-400

                            ${compact
                                ? "mt-3 pt-2 text-[6px]"
                                : "mt-5 pt-3 text-xs"
                            }
                        `}
                    >

                        <CalendarDays
                            className={
                                compact
                                    ? "size-2.5"
                                    : "size-3.5"
                            }
                        />

                        <span>
                            Achieved on{" "}
                            <span className="font-semibold text-slate-500">
                                {formatDate(
                                    achievement.achievementDate,
                                )}
                            </span>
                        </span>

                    </div>

                )}

            </div>

        </article>
    );
}


function formatDate(
    date: string,
) {

    return new Intl.DateTimeFormat(
        "en-IN",
        {
            day: "numeric",
            month: "long",
            year: "numeric",
        },
    ).format(
        new Date(date),
    );
}