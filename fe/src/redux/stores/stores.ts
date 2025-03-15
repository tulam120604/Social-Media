import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "../slices/toggleSlice";
import activeMenuSlice from "../slices/menuSlice";

export const store = configureStore({
  reducer: {
    toggleStore: toggleSlice,
    activeMenuStore: activeMenuSlice,
  },
});

// interface (read on redux.org)
export type AppStore = typeof store;
export type AppDisPatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
