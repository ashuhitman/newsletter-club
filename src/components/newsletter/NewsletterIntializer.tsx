import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
    useGetArticlesQuery,
} from "../../features/article/articleApi";

import {
    useGetAchievementsQuery,
} from "../../features/achievements/achievementApi";
import { createNewsletterIssues } from "../../utils/newsletterUtils";
import { setNewsletterIssues } from "../../features/Newsletter/NewsletterSlice";



export function NewsletterInitializer() {

    const dispatch = useDispatch();


    const {
        data: articles = [],
        isSuccess: articlesReady,
    } = useGetArticlesQuery();


    const {
        data: achievements = [],
        isSuccess: achievementsReady,
    } = useGetAchievementsQuery();


    useEffect(() => {

        if (
            !articlesReady ||
            !achievementsReady
        ) {
            return;
        }


        const issues =
            createNewsletterIssues(
                articles,
                achievements,
            );


        dispatch(
            setNewsletterIssues(
                issues,
            ),
        );

    }, [
        articles,
        achievements,
        articlesReady,
        achievementsReady,
        dispatch,
    ]);


    return null;
}