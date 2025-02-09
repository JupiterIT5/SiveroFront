import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProfileApi = createApi({
  reducerPath: "profileApi",
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
  tagTypes: ["Wishlist"],
  endpoints: builder => ({
    getProfile: builder.query({
      query: () => "profile",
    }),
    changeProfile: builder.mutation({
      query: user => ({
        url: `/users/${user.id}`,
        method: "PUT",
        body: user,
      }),
    }),
    changeAvatar: builder.mutation({
      query: user => ({
        url: `/user/avatar`,
        method: "POST",
        body: user,
      }),
    }),
    getWishList: builder.query({
      query: () => "wishlist",
      providesTags: ["Wishlist"],
    }),
    addToWishlist: builder.mutation({
      query: user => ({
        url: `wishlist`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Wishlist"],
    }),
    deleteWishlist: builder.mutation({
      query: user => ({
        url: `wishlist/${user.id}`,
        method: "DELETE",
        body: user,
      }),
      invalidatesTags: ["Wishlist"],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useChangeProfileMutation,
  useGetWishListQuery,
  useAddToWishlistMutation,
  useDeleteWishlistMutation,
  useChangeAvatarMutation,
} = ProfileApi;
