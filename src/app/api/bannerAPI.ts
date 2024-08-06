import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from ".";

export interface IBanner {
  _id: string;
  pathTo: string;
  img: string;
}

export interface IResponeBanner {
    banners: IBanner[]
}

interface IRequestBanner {}

export const bannerApi = createApi({
  reducerPath: "bannerApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getBanner: builder.query<IBanner[], IRequestBanner>({
      query: () => `api/mainbanner`,
    }),
  }),
});

export const { useGetBannerQuery } = bannerApi;
