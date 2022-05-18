const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

// conexão com o banco de dados \\

const db = mysql.createPool({
    host: 'localhost',
    user:  'brenodev',
    password: '123456',
    database: 'crud',
})

// middleware \\
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))  


// rotas 
app.get("/api/get", (req,res) => {
    const sqlSelect = "SELECT * FROM nome_cliente_table;"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.post("/api/insert", (req, res) => {
    const nomeCliente = req.body.nomeCliente
    const emailCliente = req.body.emailCliente

    const sqlInsert = "INSERT INTO nome_cliente_table (nome_cliente, email_cliente) VALUES (?, ?);"
    db.query(sqlInsert, [nomeCliente, emailCliente], (err, result) => {
        console.log(result)
    })
})

app.delete("/api/delete/:id", (req,res) => {
    const cliente = req.params.id;
    const sqlDelete = "DELETE FROM nome_cliente_table WHERE id = ?";

        db.query(sqlDelete, cliente, (err, result) => {
            console.log(result)
        })
})


app.listen(3001, () => console.log('Servidor rodando na porta 3001'))