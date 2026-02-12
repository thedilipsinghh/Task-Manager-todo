import { APP_URL } from "@/constant/config"
import { Todo } from "@/type/Todo"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${APP_URL}/api/todo`, credentials: "include" }),
    tagTypes: ["todo"],
    endpoints: (builder) => {
        return {
            getTodo: builder.query<Todo[], void>({
                query: () => {
                    return {
                        url: "/",
                        method: "GET"
                    }
                },
                providesTags: ["todo"]
            }),
            AddTodo: builder.mutation<void, Todo>({
                query: userData => {
                    return {
                        url: "/create",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            updateTodo: builder.mutation<void, Todo>({
                query: tododata => {
                    return {
                        url: "/modify/" + tododata._id as string,
                        method: "PATCH",
                        body: tododata
                    }
                },
                invalidatesTags: ["todo"]
            }),
            deleteTodo: builder.mutation<void, string>({
                query: _id => {
                    return {
                        url: "/remove/" + _id,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["todo"]
            }),

        }
    }
})

export const { useGetTodoQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = authApi
