import { ArrowUpRight, Trophy } from "lucide-react";
import { Link } from "react-router";

import type { Achievement } from "../../features/achievements/achievementApi";
import { getImageUrl } from "../../services/storageService";


interface AchievementCardProps {
    achievement: Achievement;
}

export function AchievementCard({
    achievement,
}: AchievementCardProps) {
    return (
        <article
            id={achievement.$id}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
            {/* Image */}
            <Link
                to={`/achievements/${achievement.$id}`}
                className="relative block aspect-[16/10] overflow-hidden bg-slate-100"
            >
                {achievement.imageFileId ? (
                    <img
                        src={getImageUrl(
                            achievement.imageFileId,
                        )}
                        alt={achievement.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center">
                        <Trophy className="size-10 text-slate-300" />
                    </div>
                )}

                {/* Trophy */}
                <div className="absolute left-4 top-4 flex size-9 items-center justify-center rounded-full bg-amber-400 text-blue-950 shadow-sm">
                    <Trophy className="size-4" />
                </div>

                {/* Category */}
                <div className="absolute right-0 top-4">
                    <div className="rounded-l-md bg-amber-400 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-950 shadow-sm">
                        {achievement.category}
                    </div>
                </div>
            </Link>

            {/* Content */}
            <div className="p-5">

                {/* Student */}
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                    {achievement.studentName}
                </p>

                {/* Title */}
                <h3 className="mt-2 text-lg font-bold tracking-tight text-slate-950">
                    {achievement.title}
                </h3>

                {/* Description */}
                {achievement.description && (
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
                        {achievement.description}
                    </p>
                )}

                {/* Read More */}
                <Link
                    to={`/achievements/${achievement.$id}`}
                    className="mt-4 inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-blue-950 transition-colors hover:text-blue-700"
                >
                    Read more
                    <ArrowUpRight className="size-4" />
                </Link>

            </div>
        </article>
    );
}