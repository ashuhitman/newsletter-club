import {
    CalendarDays,
    BookOpen,
} from "lucide-react";


interface NewsletterCoverPageProps {
    year: number;
    month: number;
    issueNumber: number;
}


export function NewsletterCoverPage({
    year,
    month,
    issueNumber,
}: NewsletterCoverPageProps) {

    const monthName =
        new Intl.DateTimeFormat(
            "en-IN",
            {
                month: "long",
            },
        ).format(
            new Date(
                year,
                month - 1,
                1,
            ),
        );


    return (
        <div
            className="
                relative
                h-full
                w-full
                overflow-hidden
                bg-blue-950
                text-white
                [container-type:size]
            "
        >

            {/* ═════════════════════════════
                BACKGROUND
            ═════════════════════════════ */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-blue-950
                    via-blue-900
                    to-slate-950
                "
            />


            {/* ─────────────────────────────
                DECORATIVE CIRCLES
            ───────────────────────────── */}

            <div
                className="
                    absolute
                    -right-[25%]
                    -top-[10%]
                    size-[65%]
                    rounded-full
                    border
                    border-white/10
                "
            />


            <div
                className="
                    absolute
                    -right-[18%]
                    top-[2%]
                    size-[48%]
                    rounded-full
                    border
                    border-amber-400/20
                "
            />


            {/* ─────────────────────────────
                BOTTOM DECORATION
            ───────────────────────────── */}

            <div
                className="
                    absolute
                    -bottom-[20%]
                    -left-[20%]
                    size-[60%]
                    rounded-full
                    bg-amber-400/10
                    blur-3xl
                "
            />


            {/* ═════════════════════════════
                CONTENT
            ═════════════════════════════ */}

            <div
                className="
                    relative
                    z-10
                    flex
                    h-full
                    flex-col
                    justify-between
                    px-[7cqw]
                    py-[7cqh]
                "
            >

                {/* ═════════════════════════
                    TOP
                ═════════════════════════ */}

                <div>

                    {/* ─────────────────────
                        SCHOOL
                    ───────────────────── */}

                    <div
                        className="
                            flex
                            items-center
                            gap-[2.5cqw]
                        "
                    >

                        <div
                            className="
                                flex
                                size-[9cqw]
                                min-h-[22px]
                                min-w-[22px]
                                items-center
                                justify-center
                                rounded-lg
                                border
                                border-amber-300/30
                                bg-amber-400/10
                            "
                        >

                            <BookOpen
                                className="
                                    size-[45%]
                                    text-amber-300
                                "
                            />

                        </div>


                        <div>

                            <p
                                className="
                                    whitespace-nowrap
                                    text-[clamp(7px,2.3cqw,12px)]
                                    font-black
                                    uppercase
                                    tracking-[0.18em]
                                    text-white
                                "
                            >
                                PM SHRI
                            </p>


                            <p
                                className="
                                    mt-0.5
                                    whitespace-nowrap
                                    text-[clamp(6px,1.8cqw,10px)]
                                    font-semibold
                                    uppercase
                                    tracking-[0.12em]
                                    text-white/60
                                "
                            >
                                GSSS DHANAU
                            </p>

                        </div>

                    </div>


                    {/* ═════════════════
                        MAIN TITLE
                    ═════════════════ */}

                    <div
                        className="
                            mt-[11cqh]
                        "
                    >

                        {/* MONTH */}

                        <p
                            className="
                                whitespace-nowrap
                                text-[clamp(9px,3.5cqw,18px)]
                                font-bold
                                uppercase
                                tracking-[0.25em]
                                text-amber-300
                            "
                        >
                            {monthName}
                        </p>


                        {/* SCHOOL NEWSLETTER */}

                        <h1
                            className="
                                mt-[2.5cqh]
                                max-w-full
                                font-black
                                leading-[0.84]
                                tracking-[-0.045em]
                                text-white
                                text-[clamp(30px,12cqw,72px)]
                            "
                        >
                            School
                            <br />
                            Newsletter
                        </h1>


                        {/* YEAR */}

                        <p
                            className="
                                mt-[3.5cqh]
                                whitespace-nowrap
                                font-black
                                leading-none
                                tracking-[-0.045em]
                                text-white
                                text-[clamp(34px,14cqw,82px)]
                            "
                        >
                            {year}
                        </p>

                    </div>

                </div>


                {/* ═════════════════════════
                    BOTTOM
                ═════════════════════════ */}

                <div>

                    {/* DIVIDER */}

                    <div
                        className="
                            mb-[4cqh]
                            h-px
                            w-full
                            bg-white/15
                        "
                    />


                    <div
                        className="
                            flex
                            items-end
                            justify-between
                            gap-3
                        "
                    >

                        {/* ─────────────────
                            ISSUE
                        ───────────────── */}

                        <div>

                            <p
                                className="
                                    text-[clamp(6px,1.7cqw,9px)]
                                    font-bold
                                    uppercase
                                    tracking-[0.2em]
                                    text-white/50
                                "
                            >
                                Issue
                            </p>


                            <p
                                className="
                                    mt-1
                                    font-black
                                    leading-none
                                    text-white
                                    text-[clamp(16px,5cqw,30px)]
                                "
                            >
                                #
                                {String(
                                    issueNumber,
                                ).padStart(
                                    2,
                                    "0",
                                )}
                            </p>

                        </div>


                        {/* ─────────────────
                            DATE
                        ───────────────── */}

                        <div
                            className="
                                flex
                                min-w-0
                                items-center
                                gap-1
                                text-right
                            "
                        >

                            <CalendarDays
                                className="
                                    size-[clamp(9px,2.5cqw,15px)]
                                    shrink-0
                                    text-amber-300
                                "
                            />


                            <p
                                className="
                                    whitespace-nowrap
                                    text-[clamp(6px,2cqw,11px)]
                                    font-semibold
                                    text-white/70
                                "
                            >
                                {monthName} {year}
                            </p>

                        </div>

                    </div>


                    {/* ─────────────────
                        SCHOOL NAME
                    ───────────────── */}

                    <p
                        className="
                            mt-[4cqh]
                            max-w-full
                            text-[clamp(5px,1.7cqw,9px)]
                            font-semibold
                            uppercase
                            leading-[1.3]
                            tracking-[0.12em]
                            text-white/40
                        "
                    >
                        PM SHRI GOVERNMENT SENIOR
                        SECONDARY SCHOOL DHANAU
                    </p>

                </div>

            </div>


            {/* ═════════════════════════════
                GOLD ACCENT
            ═════════════════════════════ */}

            <div
                className="
                    absolute
                    bottom-0
                    left-0
                    h-[1%]
                    min-h-[2px]
                    max-h-1
                    w-full
                    bg-amber-400
                "
            />

        </div>
    );
}