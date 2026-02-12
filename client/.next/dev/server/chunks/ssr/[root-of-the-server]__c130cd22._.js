module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/constant/config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// constants/config.ts
__turbopack_context__.s([
    "APP_URL",
    ()=>APP_URL
]);
const APP_URL = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ("TURBOPACK compile-time value", "http://localhost:5000");
}),
"[project]/redux/apis/todo.api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authApi",
    ()=>authApi,
    "useAddTodoMutation",
    ()=>useAddTodoMutation,
    "useDeleteTodoMutation",
    ()=>useDeleteTodoMutation,
    "useGetTodoQuery",
    ()=>useGetTodoQuery,
    "useUpdateTodoMutation",
    ()=>useUpdateTodoMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$constant$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constant/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
;
;
const authApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "authApi",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: `${__TURBOPACK__imported__module__$5b$project$5d2f$constant$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_URL"]}/api/todo`,
        credentials: "include"
    }),
    tagTypes: [
        "todo"
    ],
    endpoints: (builder)=>{
        return {
            getTodo: builder.query({
                query: ()=>{
                    return {
                        url: "/",
                        method: "GET"
                    };
                },
                providesTags: [
                    "todo"
                ]
            }),
            AddTodo: builder.mutation({
                query: (userData)=>{
                    return {
                        url: "/create",
                        method: "POST",
                        body: userData
                    };
                },
                invalidatesTags: [
                    "todo"
                ]
            }),
            updateTodo: builder.mutation({
                query: (tododata)=>{
                    return {
                        url: "/modify/" + tododata._id,
                        method: "PATCH",
                        body: tododata
                    };
                },
                invalidatesTags: [
                    "todo"
                ]
            }),
            deleteTodo: builder.mutation({
                query: (_id)=>{
                    return {
                        url: "/remove/" + _id,
                        method: "DELETE"
                    };
                },
                invalidatesTags: [
                    "todo"
                ]
            })
        };
    }
});
const { useGetTodoQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = authApi;
}),
"[project]/redux/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$apis$2f$todo$2e$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/redux/apis/todo.api.ts [app-ssr] (ecmascript)");
;
;
const reduxStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$apis$2f$todo$2e$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$apis$2f$todo$2e$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authApi"].reducer
    },
    middleware: (def)=>def().concat(__TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$apis$2f$todo$2e$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authApi"].middleware)
});
const __TURBOPACK__default__export__ = reduxStore;
}),
"[project]/redux/ReduxProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/redux/store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const ReduxProvider = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
            store: __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            children: children
        }, void 0, false, {
            fileName: "[project]/redux/ReduxProvider.tsx",
            lineNumber: 7,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = ReduxProvider;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c130cd22._.js.map