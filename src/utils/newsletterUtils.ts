/* ─────────────────────────────────────
   NEWSLETTER ISSUE
───────────────────────────────────── */

import type {
    NewsletterIssue,
} from "../components/newsletter/NewsletterCard/newsletterTypes";

import type {
    Achievement,
} from "../features/achievements/achievementApi";

import type {
    Article,
} from "../features/article/articleApi";


/* ─────────────────────────────────────
   CREATE NEWSLETTER ISSUES
───────────────────────────────────── */

export function createNewsletterIssues(
    articles: Article[] = [],
    achievements: Achievement[] = [],
    gallery: string[] = [],
): NewsletterIssue[] {

    const issueMap =
        new Map<string, NewsletterIssue>();


    /* ═══════════════════════════════
       HELPER
    ═══════════════════════════════ */

    function getOrCreateIssue(
        year: number,
        month: number,
    ): NewsletterIssue {

        const key =
            `${year}-${month}`;


        if (!issueMap.has(key)) {

            issueMap.set(
                key,
                {
                    id: "",

                    year,

                    month,

                    issueNumber: 0,

                    articles: [],

                    achievements: [],

                    gallery: [],
                },
            );

        }


        return issueMap.get(key)!;
    }


    /* ═══════════════════════════════
       ARTICLES
    ═══════════════════════════════ */

    for (const article of articles) {

        /*
         * Only published articles.
         */

        if (
            article.status &&
            article.status.toLowerCase() !== "published"
        ) {
            continue;
        }


        /*
         * Article must have
         * publishedAt.
         */

        if (!article.publishedAt) {
            continue;
        }


        const date =
            new Date(
                article.publishedAt,
            );


        if (
            Number.isNaN(
                date.getTime(),
            )
        ) {
            continue;
        }


        const year =
            date.getFullYear();


        const month =
            date.getMonth() + 1;


        const issue =
            getOrCreateIssue(
                year,
                month,
            );


        issue.articles.push(
            article,
        );
    }


    /* ═══════════════════════════════
       ACHIEVEMENTS
    ═══════════════════════════════ */

    for (
        const achievement
        of achievements
    ) {

        /*
         * Only published achievements.
         */

        if (
            achievement.status &&
            achievement.status.toLowerCase() !== "published"
        ) {
            continue;
        }


        /*
         * Achievement must have
         * achievementDate.
         */

        if (
            !achievement.achievementDate
        ) {
            continue;
        }


        const date =
            new Date(
                achievement.achievementDate,
            );


        if (
            Number.isNaN(
                date.getTime(),
            )
        ) {
            continue;
        }


        const year =
            date.getFullYear();


        const month =
            date.getMonth() + 1;


        const issue =
            getOrCreateIssue(
                year,
                month,
            );


        issue.achievements.push(
            achievement,
        );
    }


    /* ═══════════════════════════════
       SORT LATEST ISSUE FIRST
    ═══════════════════════════════ */

    const issues =
        Array.from(
            issueMap.values(),
        ).sort(
            (a, b) => {

                const dateA =
                    new Date(
                        a.year,
                        a.month - 1,
                        1,
                    ).getTime();


                const dateB =
                    new Date(
                        b.year,
                        b.month - 1,
                        1,
                    ).getTime();


                return dateB - dateA;
            },
        );


    /* ═══════════════════════════════
       ISSUE NUMBER
       
       Latest = highest number
       Older = lower number
    ═══════════════════════════════ */

    const totalIssues =
        issues.length;


    issues.forEach(
        (
            issue,
            index,
        ) => {

            issue.issueNumber =
                totalIssues - index;

        },
    );


    /* ═══════════════════════════════
       SORT CONTENT
    ═══════════════════════════════ */

    for (const issue of issues) {

        /* ─────────────────────────
           ARTICLES
        ───────────────────────── */

        issue.articles.sort(
            (a, b) => {

                const dateA =
                    new Date(
                        a.publishedAt ?? 0,
                    ).getTime();


                const dateB =
                    new Date(
                        b.publishedAt ?? 0,
                    ).getTime();


                return dateB - dateA;
            },
        );


        /* ─────────────────────────
           ACHIEVEMENTS
        ───────────────────────── */

        issue.achievements.sort(
            (a, b) => {

                const dateA =
                    new Date(
                        a.achievementDate ?? 0,
                    ).getTime();


                const dateB =
                    new Date(
                        b.achievementDate ?? 0,
                    ).getTime();


                return dateB - dateA;
            },
        );


        /* ═════════════════════════
           ISSUE ID
           
           Article ID has priority.
           
           If there are no articles,
           achievement ID is used.
        ═════════════════════════ */

        issue.id =
            issue.articles[0]?.$id ??
            issue.achievements[0]?.$id ??
            `${issue.year}-${issue.month}`;
    }


    /* ═══════════════════════════════
       ADD GALLERY
       
       Gallery is simply string[].
       
       Since gallery images don't have
       dates, attach them to the
       generated issues here.
    ═══════════════════════════════ */

    if (issues.length > 0) {

        issues[0].gallery = [
            ...gallery,
        ];

    }


    return issues;
}