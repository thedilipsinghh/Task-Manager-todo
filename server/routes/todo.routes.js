const { ReadTodo, createTodo, updateTodo, deleteTodo } = require("../controller/todo.controller.js")
const { create } = require("../modal/Todo")

const router = require("express").Router()

router
    .get("/", ReadTodo)
    .post("/create", createTodo)
    .put("/modify/:todoId", updateTodo)
    .delete("/remove/:todoId", deleteTodo)

module.exports = router