import React, { useEffect, useState } from 'react';
import url from '../axios';
import axios from 'axios';
import './Tabela.css';

import deleteIcon from '../../assets/delete_black_24dp.png';
import editIcon from '../../assets/edit_black_24dp.png';

const Tabela = () => {
  
  const [ get, setGet ] = useState();
  
  const getdados = async() => {
    try{
      const resposta = await url.get("/alunos");
      setGet(resposta);
    }
    catch(error){
      console.log(error)
    }
  }
  const Delete = (id) => {

    url.delete(`/alunos/`+id)
    .then(() => {
      getdados();
      alert("Cadastro excluido com sucesso!");
    })
    .catch(()=> {
      alert("Não foi possivel excluir o cadastro, tente novamente por favor.");
    });
    
  };

  const Atualizar = (dados) => {

    var tabela = document.getElementsByClassName(`tabela`)[0];
    console.log(dados.id)
    console.log(tabela)
      tabela.innerHTML = `<form method="post"  onSubmit={console.log("teste")}>
                        <div id="teste">
                        <label htmlFor="nome">Nome: <input type='text' id='nome' min="4" required placeholder='Nome do aluno' value=${dados.nome}></input></label>
                        

                        <label htmlFor="nota">Nota: <input type='number' id="nota" min="1" required placeholder='Nota do aluno' value=${dados.nota}></input></label>

                        <button type='submit' id="btn_atualizar">Atualizar</button>
                        </div>
                        </form>`

    var btn_atualizar = document.getElementById("btn_atualizar")
    btn_atualizar.addEventListener("click", (e) => {
      var nome = document.getElementById("nome");
      var nota = document.getElementById("nota");

      console.log(nome.value, nota.value, dados.id);
      const atualizar = async() =>{
        try{
          url.put(`alunos/`+dados.id, {
            nome: nome.value,
            nota: nota.value
          });
          alert("Dados atualizados com sucesso!")
        }
        catch(error){
          alert("Error: "+error)
        }
      }
      atualizar();//chama a constante atualizar declarada logo acima
      window.location.reload(true);//Reload na página
    });
    
  };

  useEffect(() => {
    getdados();
  },[]);

  return (
    <main className='main'>
      <table className='tabela'>
        <caption><h2>Tabela</h2></caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>NOTA</th>
            <th>AÇÃO</th>
          </tr>
        </thead>
        <tbody className='dados'>
          {get && get.data.map((dados, id) =>(
            <tr key={id}>
              <td>{dados.id}</td>
              <td>{dados.nome}</td>
              <td>{dados.nota}</td>
              <td><button onClick={()=> Delete(dados.id)}><img src={deleteIcon}></img></button></td>
              <td><button><img src={editIcon} onClick={() => Atualizar(dados)}></img></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
};

export default Tabela;