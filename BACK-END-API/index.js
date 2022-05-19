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
        if(!err){
            console.log('--Cliente inserido com sucesso--')
        }else{
            console.log('--Erro ao inserir o usuário--')
        }
    })
})

app.delete("/api/delete/:id", (req,res) => {
    const cliente = req.params.id;
    const sqlDelete = "DELETE FROM nome_cliente_table WHERE id = ?";
    console.log(cliente)
        db.query(sqlDelete, cliente, (err, result) => {
            if(!err){
                console.log('--Cliente deletado com sucesso--' + err)
            }else{
                console.log('--Erro ao deletar o usuário--')
            }
        })
})

app.put('/api/update/:id',(req,res) => {
    const cliente = req.params.id;
    const nomeCliente = req.body.nomeCliente;
    const emailCliente = req.body.emailCliente
    const sqlUpdate = "UPDATE SET nome_cliente_table nome_cliente = ? WHERE = email_cliente ?"
    console.log(cliente)
    db.query(sqlUpdate, [nomeCliente, emailCliente], (err, result) => {        
    })
})

app.listen(3001, () => console.log('Servidor rodando na porta 3001'))