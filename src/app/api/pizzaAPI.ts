
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from ".";

export interface IPizza {
  _id: string;
  name: string,
  localizedTitles: {
      en: string,
      ua: string,
      pl: string
  },
  desc: string,
  discount: boolean,
  discountValue: number,
  url: string,
  image: string,
  nutritional: {
      calories: number,
      protein: number,
      fat: number,
      carbohydrates: number
  },
  price: number,
  rating: number,
  weight: number,
  size: number
}

interface IRequestDiscountPizzas {}


export const pizzaApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getDiscountPizzas: builder.query<IPizza[], IRequestDiscountPizzas>({
      query: () => `api/pizzas`,
    }),
  }),
});

export const { useGetDiscountPizzasQuery } = pizzaApi;
