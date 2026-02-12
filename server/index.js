const exprees = require("express")
const mongoose = require("mongoose")
require("dotenv").config({})
const cors = require("cors")

mongoose.connect(process.env.MONGO_URL)

const app = exprees()
app.use(exprees.json())
// app.use(cookieParser())

app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? "oneline"
        : 'http://localhost:3000',
    credentials: true
}));

app.use("/api/todo", require("./routes/todo.routes.js"))

mongoose.connection.once("open", () => {
    console.log("Db Conneted")
    app.listen(process.env.PORT, console.log("Server Running..."))
})

module.exports = app

