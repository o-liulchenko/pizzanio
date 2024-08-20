import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from ".";
import { IPizza } from "./pizzaAPI";

export interface ICart {
  _id: string;
  products: IPizza[];
  totalPrice: number;
}

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    createCart: builder.query<ICart, null>({
      query: () => `api/cart`,
    }),
    getCartById: builder.query<ICart, string>({
        query: (id) => `api/cart/${id}`
    })
  }),
});

export const { useCreateCartQuery } = cartApi;
