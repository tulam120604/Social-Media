import { configureStore } from "@reduxjs/toolkit";
import { toggleReducer } from "../slices/toggleSlice";
import activeMenuSlice from "../slices/menuSlice";

export const store = configureStore({
  reducer: {
    toggleStore: toggleReducer,
    activeMenuStore: activeMenuSlice,
  },
});

// interface (read on redux.org)
export type AppStore = typeof store;
export type AppDisPatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
