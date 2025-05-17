import { configureStore } from "@reduxjs/toolkit";
import { toggleReducer } from "../slices/toggleSlice";
import activeMenuSlice from "../slices/menuSlice";
import { sliceAuth } from "../sliceApis/auth";
import { slicePost } from "../sliceApis/post";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    toggleStore: toggleReducer,
    activeMenuStore: activeMenuSlice,
    [sliceAuth.reducerPath]: sliceAuth.reducer,
    [slicePost.reducerPath]: slicePost.reducer,
  },

  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare()
      .concat(sliceAuth.middleware)
      .concat(slicePost.middleware),
});

setupListeners(store.dispatch);
// interface (read on redux.org)
export type AppStore = typeof store;
export type AppDisPatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
