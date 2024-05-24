import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://game-store-dev.onrender.com/api",
  }),
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => `/api-products`,
      providesTags: (result) => {
        return [{ type: "Products", id: "PRODUCTS" }];
      },
      transformResponse: (result) => {
        return result.data.map((item) => ({
          ...item,
          thumbnail: item.images[0].images,
        }));
      },
    }),
    getNewProducts: build.query({
      query: () => `/api-new-products`,
      providesTags: (result) => {
        return [{ type: "Products", id: "PRODUCTS" }];
      },
      transformResponse: (result) => {
        return result.data.map((item) => ({
          ...item,
          thumbnail: item.images[0].images,
        }));
      },
    }),
    getTopSellProducts: build.query({
      query: () => `/api-top-products`,
      providesTags: (result) => {
        return [{ type: "Products", id: "PRODUCTS" }];
      },
      transformResponse: (result) => {
        return result.data.map((item) => ({
          ...item,
          thumbnail: item.images[0].images,
        }));
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetNewProductsQuery,
  useGetTopSellProductsQuery,
} = productsApi;
