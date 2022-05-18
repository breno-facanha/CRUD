import { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios'
import user from './componentes/imagens/perfil.png'
import email from './componentes/imagens/email.png'

function App() {

  const [id, setId] = useState('')
  const [nomeCliente, setNomeCliente] = useState('')
  const [emailCliente, setEmailCliente] = useState('')
  const [nomeEmailLista, setNomeEmailLista] = useState([])

 

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get')
      .then( (response) => {
        setNomeEmailLista(response.data)
        console.log(response.data)
      });

     
  }, []);

  const cadastroDeCliente = () => {
    
    Axios.post('http://localhost:3001/api/insert', {
      
      nomeCliente: nomeCliente, 
      emailCliente: emailCliente,
    });

        setNomeEmailLista([
          ...nomeEmailLista, 
          { nome_cliente: nomeCliente ,  email_cliente: emailCliente}
        ]);
        document.querySelector('.Nome').value=''
        document.querySelector('.Email').value=''
    };

    
    const deletarCliente = (nome) => {
      Axios.delete(`http://localhost:3001/api/delete/${nome}`);
      setNomeEmailLista(nomeEmailLista.filter(nomeEmailLista => nomeEmailLista.id !== nome))
 };

  return (
    <div className="App">
      <h1>CADASTRO DE CLIENTES</h1>

      <div className="form">
        
        <label>Nome:</label>
        <input 
          className='Nome'
          type="text" 
          name="nomeCliente" 
          placeholder="Nome:" 
          onChange={(e) =>{
          setNomeCliente(e.target.value)
          }}>
        </input>
        
        <label>E-mail:</label>
        <input 
          className='Email'
          type="email" 
          name="emailCliente" 
          placeholder="E-mail:" 
          onChange={(e) => {
          setEmailCliente(e.target.value)
        }}>
        </input>

      </div>

      <button className='butaoCadastrar' onClick={cadastroDeCliente}>Cadastrar</button>
      <table>
        <thead>
              <tr>
                <th><img src={user}/>Nome</th>
                <th><img src={email}/>E-mail</th>
                <th>Ações</th>
              </tr>
        </thead>
              {nomeEmailLista.map((val) => {
        return (
          
          <>
          <tbody>
              <tr>
                <td>{val.nome_cliente}</td>
                <td>{val.email_cliente}</td>
                <td>
                <button className='botaoEditar'>EDITAR</button>
                <button className='botaoExcluir' onClick={() => {deletarCliente(val.id)}}>EXCLUIR</button>
                </td>
              </tr>
          </tbody>
              {/* <h1>
              Nome: {val.nome_cliente} | Email: {val.email_cliente}
            </h1> */}
            
          </>
           
            
          
        )
      } )}
      </table>
     
    
    </div>
  );
}

export default App;
