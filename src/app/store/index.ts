import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pizzaApi } from "../api/pizzaAPI";
import cartSlice from "./slices/cartSlice";
import langSlice from "./slices/langSlice";
import { bannerApi } from "../api/bannerAPI";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    lang: langSlice,
    [pizzaApi.reducerPath]: pizzaApi.reducer,
    [bannerApi.reducerPath]: bannerApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([pizzaApi.middleware, bannerApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
