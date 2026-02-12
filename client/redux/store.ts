import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/todo.api";
import { MiddlewareNotFoundError } from "next/dist/shared/lib/utils";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer
    },

    middleware: def => def().concat(authApi.middleware)
})

export default reduxStore