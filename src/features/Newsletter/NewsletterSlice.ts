import {
    createSlice,
    type PayloadAction,
} from "@reduxjs/toolkit";
import type { NewsletterIssue } from "../../components/newsletter/NewsletterCard/newsletterTypes";





interface NewsletterState {

    issues: NewsletterIssue[];

    initialized: boolean;
}


const initialState: NewsletterState = {

    issues: [],

    initialized: false,
};


const newsletterSlice =
    createSlice({

        name: "newsletter",

        initialState,

        reducers: {

            setNewsletterIssues: (
                state,
                action: PayloadAction<
                    NewsletterIssue[]
                >,
            ) => {

                state.issues =
                    action.payload;

                state.initialized =
                    true;
            },


            clearNewsletterIssues: (
                state,
            ) => {

                state.issues = [];

                state.initialized =
                    false;
            },

        },
    });


export const {
    setNewsletterIssues,
    clearNewsletterIssues,
} =
    newsletterSlice.actions;


export default newsletterSlice.reducer;