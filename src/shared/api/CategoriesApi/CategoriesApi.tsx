import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CategoriesApi = createApi({
  reducerPath: "categories",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://kudzer5h.beget.tech/api/",
  }),
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => "categories", // эндпоинт для получения списка категорий
    }),
  }),
});

export const { useGetCategoriesQuery } = CategoriesApi; // экспорт хука
