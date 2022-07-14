import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiUser } from "./User.api";


export const store = configureStore({
  reducer: {
    [apiUser.reducerPath]: apiUser.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiUser.middleware)
})

setupListeners(store.dispatch);
