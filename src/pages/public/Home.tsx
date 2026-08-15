import { AchievementsSection } from "../../components/achievement/AchievementsSection";
// import { ContributorsSection } from "../../components/newsletter/ContributorsSection";
import { CreativeCornerSection } from "../../components/newsletter/CreativeCornerSection";

import { LatestStories } from "../../components/article/LatestStories";
import { NewsletterHero } from "../../components/newsletter/NewsletterHero";
import { PreviousIssues } from "../../components/newsletter/PreviousIssues";
import { FeaturedStory } from "../../components/newsletter";

export function Home() {
    return (
        <>
            <NewsletterHero />
            <FeaturedStory />
            <LatestStories />
            <AchievementsSection />
            <CreativeCornerSection />
            <PreviousIssues />
            {/* <ContributorsSection /> */}
        </>
    );
}