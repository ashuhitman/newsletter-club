import {
    ArrowLeft,
    Award,
    BookOpen,
    GraduationCap,
    Heart,
    MapPin,
    School,
    Users,
} from "lucide-react";

import { Link } from "react-router";

export default function About() {
    return (
        <main className="min-h-screen bg-slate-50">

            {/* ─────────────────────────────
                INTRO
            ───────────────────────────── */}

            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">

                    <Link
                        to="/"
                        className="group inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-950"
                    >
                        <span className="flex size-8 items-center justify-center rounded-lg border border-slate-200 bg-white transition-colors group-hover:border-slate-300 group-hover:bg-slate-100">
                            <ArrowLeft className="size-4" />
                        </span>

                        Home
                    </Link>

                    <div className="mt-8 max-w-3xl">

                        <div className="flex items-center gap-2">
                            <School className="size-4 text-amber-500" />

                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                                About Our School
                            </p>
                        </div>

                        <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                            PM SHRI Government Senior Secondary School, Dhanau
                        </h1>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                            A learning community committed to providing students
                            with meaningful education, opportunities for growth
                            and a strong foundation for the future.
                        </p>

                    </div>

                </div>
            </section>


            {/* ─────────────────────────────
                ABOUT
            ───────────────────────────── */}

            <section className="py-12 sm:py-14 lg:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* Main content */}

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10">

                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                                Our Story
                            </p>

                            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                                Learning, Growth and Opportunity
                            </h2>

                            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">

                                <p>
                                    PM SHRI Government Senior Secondary School,
                                    Dhanau is committed to creating a positive
                                    and inclusive environment where students can
                                    learn, explore their interests and develop
                                    their abilities.
                                </p>

                                <p>
                                    Along with academic learning, the school
                                    encourages students to participate in
                                    sports, cultural activities, competitions,
                                    educational visits and other experiences
                                    that contribute to their overall
                                    development.
                                </p>

                                <p>
                                    We believe that education is not limited to
                                    textbooks and classrooms. Every activity,
                                    interaction and experience can become an
                                    opportunity to learn, build confidence and
                                    develop responsible citizens.
                                </p>

                                <p>
                                    Through the dedication of teachers,
                                    participation of students and support of the
                                    wider school community, we continue to work
                                    towards providing meaningful educational
                                    opportunities for every student.
                                </p>

                            </div>

                        </div>


                        {/* School information */}

                        <div className="space-y-5">

                            <InfoCard
                                icon={MapPin}
                                title="Location"
                                text="Dhanau, Barmer, Rajasthan"
                            />

                            <InfoCard
                                icon={GraduationCap}
                                title="School Level"
                                text="Senior Secondary Education"
                            />

                            <InfoCard
                                icon={School}
                                title="School Type"
                                text="Government School"
                            />

                        </div>

                    </div>

                </div>
            </section>


            {/* ─────────────────────────────
                OUR APPROACH
            ───────────────────────────── */}

            <section className="border-y border-slate-200 bg-white py-12 sm:py-14 lg:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <div className="max-w-2xl">

                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                            What We Believe
                        </p>

                        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                            Education Beyond the Classroom
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                            We encourage students to learn through experiences,
                            participation and collaboration.
                        </p>

                    </div>


                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        <ValueCard
                            icon={BookOpen}
                            title="Learning"
                            description="Encouraging curiosity, knowledge and a strong academic foundation."
                        />

                        <ValueCard
                            icon={Users}
                            title="Teamwork"
                            description="Helping students learn cooperation, communication and mutual respect."
                        />

                        <ValueCard
                            icon={Award}
                            title="Excellence"
                            description="Recognising effort, achievement and the pursuit of continuous improvement."
                        />

                        <ValueCard
                            icon={Heart}
                            title="Character"
                            description="Developing responsible, confident and respectful young citizens."
                        />

                    </div>

                </div>
            </section>


            {/* ─────────────────────────────
                SCHOOL ACTIVITIES
            ───────────────────────────── */}

            <section className="py-12 sm:py-14 lg:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <div className="max-w-2xl">

                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                            School Life
                        </p>

                        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                            Opportunities to Discover and Grow
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                            Students are encouraged to take part in activities
                            that develop skills beyond academics.
                        </p>

                    </div>


                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        <ActivityCard
                            title="Sports & Fitness"
                            text="Athletics, Kabaddi, Badminton and other activities encourage fitness, discipline and teamwork."
                        />

                        <ActivityCard
                            title="Competitions"
                            text="Inter-school competitions, quizzes and other events provide opportunities to demonstrate knowledge and talent."
                        />

                        <ActivityCard
                            title="Educational Visits"
                            text="Field visits and school-twinning activities help students connect classroom learning with real-world experiences."
                        />

                        <ActivityCard
                            title="Cultural Activities"
                            text="Students participate in cultural programmes and celebrations that encourage creativity and confidence."
                        />

                        <ActivityCard
                            title="Patriotic Activities"
                            text="Activities such as Tiranga rallies encourage unity, responsibility and respect for the nation."
                        />

                        <ActivityCard
                            title="Student Achievement"
                            text="The school celebrates the dedication and achievements of students in academics, sports and other areas."
                        />

                    </div>

                </div>
            </section>


            {/* ─────────────────────────────
                CLOSING
            ───────────────────────────── */}

            <section className="bg-blue-950 py-12 sm:py-14">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

                    <School className="mx-auto size-8 text-amber-400" />

                    <h2 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl">
                        Building a Better Future Through Education
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                        Every student has the potential to learn, grow and
                        contribute. Our school strives to provide the support
                        and opportunities that help that potential flourish.
                    </p>

                </div>
            </section>

        </main>
    );
}


/* ═══════════════════════════════════════
   INFO CARD
═══════════════════════════════════════ */

interface InfoCardProps {
    icon: React.ElementType;
    title: string;
    text: string;
}

function InfoCard({
    icon: Icon,
    title,
    text,
}: InfoCardProps) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex size-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Icon className="size-5" />
            </div>

            <h3 className="mt-4 text-sm font-bold text-slate-950">
                {title}
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
                {text}
            </p>
        </div>
    );
}


/* ═══════════════════════════════════════
   VALUE CARD
═══════════════════════════════════════ */

interface ValueCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

function ValueCard({
    icon: Icon,
    title,
    description,
}: ValueCardProps) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md">

            <div className="flex size-10 items-center justify-center rounded-xl bg-white text-blue-950 shadow-sm ring-1 ring-slate-200">
                <Icon className="size-5" />
            </div>

            <h3 className="mt-4 text-base font-bold text-slate-950">
                {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
            </p>

        </div>
    );
}


/* ═══════════════════════════════════════
   ACTIVITY CARD
═══════════════════════════════════════ */

interface ActivityCardProps {
    title: string;
    text: string;
}

function ActivityCard({
    title,
    text,
}: ActivityCardProps) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5">

            <div className="h-1.5 w-10 rounded-full bg-amber-400" />

            <h3 className="mt-4 text-base font-bold tracking-tight text-slate-950">
                {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
                {text}
            </p>

        </div>
    );
}