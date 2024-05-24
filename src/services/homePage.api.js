import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const homePageApi = createApi({
  reducerPath: "homePageApi",
  tagTypes: ["HomePage"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://game-store-dev.onrender.com/api",
  }),
  endpoints: (build) => ({
    getHero: build.query({
      query: () => `/api-home-hero`,
      providesTags: (result) => {
        return [{ type: "HomePage", id: "HOMEPAGE" }];
      },
      transformResponse: (result) => {
        return result.data[0];
      },
    }),
    getPartners: build.query({
      query: () => `/api-partners`,
      providesTags: (result) => {
        return [{ type: "HomePage", id: "HOMEPAGE" }];
      },
    }),
  }),
});

export const { useGetHeroQuery, useGetPartnersQuery } = homePageApi;
