import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AddressesApi = createApi({
  reducerPath: "addresses",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://kudzer5h.beget.tech/api/",
    prepareHeaders: headers => {
      // Добавляем токен в заголовки
      const token = localStorage.getItem("access_token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        // Или, если нужно использовать X-CSRF-TOKEN:
        headers.set("X-CSRF-TOKEN", token);
      }
      return headers;
    },
  }),
  tagTypes: ["Addresses"],
  endpoints: builder => ({
    getAddresses: builder.query<[], void>({
      query: () => "addresses",
      providesTags: ["Addresses"],
    }),
    addAddresses: builder.mutation({
      query: user => ({
        url: `addresses`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Addresses"],
    }),
    updateAddresses: builder.mutation({
      query: user => ({
        url: `addresses/${user.id}`,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: ["Addresses"],
    }),
    deleteAddresses: builder.mutation({
      query: user => ({
        url: `addresses/${user.id}`,
        method: "DELETE",
        body: user,
      }),
      invalidatesTags: ["Addresses"],
    }),
  }),
});

export const { useGetAddressesQuery, useAddAddressesMutation, useUpdateAddressesMutation, useDeleteAddressesMutation } =
  AddressesApi;
