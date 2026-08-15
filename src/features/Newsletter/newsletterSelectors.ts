import type {
    RootState,
} from "../../app/store";


export const selectNewsletterIssues = (
    state: RootState,
) =>
    state.newsletter.issues;


export const selectNewsletterInitialized = (
    state: RootState,
) =>
    state.newsletter.initialized;