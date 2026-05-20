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

app.delete("/tasks/:id", (req, res) => {

    const ID = req.params.id

    const dlt = db.prepare('DELETE FROM tasks WHERE id = ?')
    const deleted_data = dlt.run(ID)

    return res.json('~~Deleting Successful~~')
})

app.put("/tasks/:id", (req,res) => {

    const update_id = req.params.id
    const updated_title = req.body.title

    const update = db.prepare('UPDATE tasks SET title = ? WHERE id = ?')
    const updating = update.run(updated_title, update_id)

    const result = db.prepare('SELECT * FROM tasks WHERE id = ?').get(update_id)

    return res.json(result)
})

const startServer = () => {
    console.log(`http://localhost:${PORT}`)
    console.log(`Press CTRL + C to exit`)
}

app.listen(PORT, startServer)