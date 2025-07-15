import express from 'express'
import { db } from './connection.js'

const app = express()
app.use(express.json())
app.use(express.static('../src/pages'));

const usuarios = [];

app.get('/usuarios', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            console.error('Erro na consulta:', err)
            return res.status(500).json({ erro: 'Erro ao buscar usuários' })
        }

        usuarios.push(...results)
        console.log(usuarios)

        res.json(results)
    })
})

let port = 3000
app.listen(port, '0.0.0.0', () => {
    console.log('\nServidor rodando em', `\x1b[32mhttp://localhost:${port}\x1b[0m`)
})