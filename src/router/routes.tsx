import type { RouteObject } from "react-router";

import { PublicLayout } from "../layouts/PublicLayout";
import { ProtectedTeacherLayout } from "../layouts/ProtectedTeacherLayout";
import { TeacherLayout } from "../layouts/TeacherLayout";

import { Home } from "../pages/public/Home";


import { Issues } from "../pages/public/Issues";
import { IssueDetails } from "../pages/public/IssueDetails";
import { Achievements } from "../pages/public/Achievement/Achievements";
import { CreativeCorner } from "../pages/public/CreativeCorner";
import { Contributors } from "../pages/public/Contributors";



import { TeacherDashboard } from "../pages/teacher/TeacherDashboard";
import { Newsletters } from "../pages/teacher/Newsletters";
import { CreateNewsletter } from "../pages/teacher/CreateNewsletter";
import { EditNewsletter } from "../pages/teacher/EditNewsletter";
import { TeacherLogin } from "../pages/auth/TeacherLogin";

import Articles from "../pages/public/Article/Articles";
import ArticleDetails from "../pages/public/Achievement/AchievementDetails";
import AchievementDetails from "../pages/public/Achievement/AchievementDetails";
import About from "../pages/public/About";


export const routes: RouteObject[] = [
    // ─────────────────────────────────────
    // PUBLIC
    // ─────────────────────────────────────
    {
        Component: PublicLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "articles",
                Component: Articles,
            },
            {
                path: "articles/:articleId",
                Component: ArticleDetails,
            },
            {
                path: "issues",
                Component: Issues,
            },
            {
                path: "issues/:issueId",
                Component: IssueDetails,
            },
            {
                path: "achievements",
                Component: Achievements,
            },
            {
                path: "achievements/:achievementId",
                Component: AchievementDetails,
            },
            {
                path: "creative-corner",
                Component: CreativeCorner,
            },
            {
                path: "contributors",
                Component: Contributors,
            },
            {
                path: "about",
                Component: About,
            },
        ],
    },

    // ─────────────────────────────────────
    // TEACHER LOGIN
    // ─────────────────────────────────────
    {
        path: "login",
        Component: TeacherLogin,
    },

    // ─────────────────────────────────────
    // PROTECTED TEACHER AREA
    // ─────────────────────────────────────
    {
        path: "teacher",
        Component: ProtectedTeacherLayout,

        children: [
            {
                Component: TeacherLayout,

                children: [
                    {
                        index: true,
                        Component: TeacherDashboard,
                    },
                    {
                        path: "newsletters",
                        Component: Newsletters,
                    },
                    {
                        path: "newsletters/new",
                        Component: CreateNewsletter,
                    },
                    {
                        path: "newsletters/:newsletterId/edit",
                        Component: EditNewsletter,
                    },
                ],
            },
        ],
    },
];