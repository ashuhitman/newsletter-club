import {
    configureStore,
} from "@reduxjs/toolkit";

import {
    baseApi,
} from "./baseApi";

import newsletterReducer from "../features/Newsletter/NewsletterSlice";


export const store =
    configureStore({

        reducer: {

            [baseApi.reducerPath]:
                baseApi.reducer,

            newsletter:
                newsletterReducer,
        },

        middleware: (
            getDefaultMiddleware,
        ) =>
            getDefaultMiddleware().concat(
                baseApi.middleware,
            ),
    });


/* ─────────────────────────────────────
   TYPES
───────────────────────────────────── */

export type RootState =
    ReturnType<
        typeof store.getState
    >;

export type AppDispatch =
    typeof store.dispatch;