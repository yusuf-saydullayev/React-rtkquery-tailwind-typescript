import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiPost } from "./Post.api";


export const store = configureStore({
  reducer: {
    [apiPost.reducerPath]: apiPost.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiPost.middleware)
})

setupListeners(store.dispatch);
