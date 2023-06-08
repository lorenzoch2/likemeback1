const express = require('express');
const cors = require('cors');
const app = express();
const { Pool } = require('pg');
app.use(express.json());
app.use(cors());

app.listen(3000, console.log("SERVIDOR ENCENDIDO EN PUERTO 3000"));

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "likeme",
    password: "postgres",
    port: 5432,
    allowExitOnIdle: true
})

app.get("/posts", async (req, res) => {
    const result = await pool.query("SELECT * FROM posts ORDER BY id");
    console.log(result.rows[0]);
    res.json(result.rows);
})

app.post("/posts", async (req, res) => {
    const { titulo, url, descripcion } = req.body;
    const img = url;
    const likes = 0;
    const result = await pool.query("INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING id", [titulo, img, descripcion, likes]);
    const object = { id: result.rows[0].id, titulo: titulo, img: img, descripcion: descripcion, likes: likes };
    res.json(object);
})