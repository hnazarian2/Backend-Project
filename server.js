import express from "express"
import db from "./database.js"


const app = express()
const PORT = 3000


app.get("/tasks", (req, res) => {

    const row = db.prepare(`SELECT * FROM tasks`).all()
    console.log(row)
    return res.json(row)
})

const startServer = () => {
    console.log(`http://localhost:${PORT}`)
    console.log(`Press CTRL + C to exit`)
}

app.listen(PORT, startServer)