import { configureStore } from "@reduxjs/toolkit";
import { toggleReducer } from "../slices/toggleSlice";
import activeMenuSlice from "../slices/menuSlice";
import { sliceAuth } from "../sliceApis/auth";

export const store = configureStore({
  reducer: {
    toggleStore: toggleReducer,
    activeMenuStore: activeMenuSlice,
    [sliceAuth.reducerPath]: sliceAuth.reducer,
  },

  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(sliceAuth.middleware),
});

// interface (read on redux.org)
export type AppStore = typeof store;
export type AppDisPatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
