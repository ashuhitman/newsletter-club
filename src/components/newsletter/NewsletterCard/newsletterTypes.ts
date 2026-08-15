import type { Achievement } from "../../../features/achievements/achievementApi";
import type { Article } from "../../../features/article/articleApi";


/* ─────────────────────────────────────
   NEWSLETTER ISSUE
───────────────────────────────────── */

export interface NewsletterIssue {
    id: string;

    year: number;

    month: number;

    issueNumber: number;

    articles: Article[];

    achievements: Achievement[];

    /*
     * Gallery image file IDs
     */
    gallery: string[];
}