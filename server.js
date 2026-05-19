import express from "express"
import db from "./database.js"


const app = express()
const PORT = 3000

app.use(express.json())

app.get("/tasks", (req, res) => {

    const row = db.prepare(`SELECT * FROM tasks`).all()
    console.log(row)

    return res.json(row)
})

app.post("/tasks", (req, res) => {

    const insert = db.prepare('INSERT INTO tasks (title) VALUES (?)')

    const t = req.body.title
    const new_data = insert.run(t)

    const result = db.prepare('SELECT * FROM tasks WHERE id = ?').get(new_data.lastInsertRowid)

    return res.json(result)
})

const startServer = () => {
    console.log(`http://localhost:${PORT}`)
    console.log(`Press CTRL + C to exit`)
}

app.listen(PORT, startServer)