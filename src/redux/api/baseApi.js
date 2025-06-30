import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
                headers.set("accept", "application/json")
            }
            return headers;

        }
    }),
    // refresh for this tag
    tagTypes: ["manage_user", "chart", "booking", "service", "manage_image", "manage_date", "transition", "feedback-web", "setting", "notification","gallary","home","feedback-db","webProfile","auth","serviceAvility"],
    endpoints: () => ({}),
});
