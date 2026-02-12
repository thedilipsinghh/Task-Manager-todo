const Todo = require("../modal/Todo")

exports.createTodo = async (req, res) => {
    try {
        await Todo.create(req.body)
        res.status(201).json({ message: "Todo Create Success", success: true })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, success: false })
    }
}
exports.ReadTodo = async (req, res) => {
    try {
        const result = await Todo.find(req.body)
        res.status(201).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, success: false })
    }
}


exports.updateTodo = async (req, res) => {
    try {
        const { todoId } = req.params
        await Todo.findByIdAndUpdate(todoId, req.body)
        res.status(200).json({ message: "todo update success", success: true })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, success: false })
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        const { todoId } = req.params
        await Todo.findByIdAndDelete(todoId)
        res.status(200).json({ message: "todo delete success", success: true })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, success: false })
    }
}