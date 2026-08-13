import {
    ArrowUpRight,
    BookOpen,
    Camera,
    Feather,
    Image,
} from "lucide-react";
import { Link } from "react-router";

const creativeCategories = [
    {
        id: "poems",
        title: "Poems",
        description: "Words and thoughts from our young writers.",
        icon: Feather,
    },
    {
        id: "stories",
        title: "Stories",
        description: "Imagination brought to life by our students.",
        icon: BookOpen,
    },
    {
        id: "art",
        title: "Art",
        description: "Creative expressions beyond the classroom.",
        icon: Image,
    },
    {
        id: "photography",
        title: "Photography",
        description: "Moments captured through student eyes.",
        icon: Camera,
    },
];

export function CreativeCornerSection() {
    return (
        <section className="bg-white py-14 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                            Student Creativity
                        </p>

                        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                            Creative Corner
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                            A space for imagination, expression and ideas from our
                            students.
                        </p>
                    </div>

                    <Link
                        to="/creative-corner"
                        className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-blue-950 transition-colors hover:text-amber-700"
                    >
                        Explore everything
                        <ArrowUpRight className="size-4" />
                    </Link>
                </div>

                {/* Creative Grid */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {creativeCategories.map((category) => {
                        const Icon = category.icon;

                        return (
                            <Link
                                key={category.id}
                                to={`/creative-corner?category=${category.id}`}
                                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:bg-amber-50 hover:shadow-md"
                            >
                                {/* Decorative Shape */}
                                <div className="absolute -right-8 -top-8 size-28 rounded-full bg-amber-400/10 transition-transform duration-500 group-hover:scale-150" />

                                {/* Icon */}
                                <div className="relative flex size-11 items-center justify-center rounded-xl bg-white text-blue-950 shadow-sm transition-colors group-hover:bg-amber-400 group-hover:text-blue-950">
                                    <Icon className="size-5" />
                                </div>

                                {/* Content */}
                                <div className="relative mt-8">
                                    <h3 className="text-lg font-bold tracking-tight text-slate-950 transition-colors group-hover:text-amber-700">
                                        {category.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-600 transition-colors group-hover:text-slate-700">
                                        {category.description}
                                    </p>

                                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-blue-950 transition-colors group-hover:text-amber-700">
                                        Explore
                                        <ArrowUpRight className="size-3.5" />
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}