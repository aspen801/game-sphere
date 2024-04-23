import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  tagTypes: ["Categories"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://game-store-dev.onrender.com/api",
  }),
  endpoints: (build) => ({
    getAllCategories: build.query({
      query: () => `/api-categories`,
      providesTags: (result) => {
        return result
          ? [
              ...result.data.map(({ id }) => ({
                type: "Categories",
                id,
              })),
              { type: "Categories", id: "CATEGORIES" },
            ]
          : [{ type: "Categories", id: "CATEGORIES" }];
      },
    }),
  }),
});

export const { useGetAllCategoriesQuery } = categoriesApi;
