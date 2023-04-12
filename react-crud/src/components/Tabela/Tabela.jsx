import React, { useEffect, useState } from 'react';
import url from '../axios';
import axios from 'axios';

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
  const handleDelete = (id) => {

    url.delete(`/alunos/`+id)
    .then(() => {
      alert("Cadastro excluido com sucesso!");
    })
    .catch(()=> {
      alert("Não foi possivel excluir o cadastro, tente novamente por favor.");
    });

    getdados();
  };

  useEffect(() => {
    getdados();
  },[]);

  return (
    <main>
      <table>
        <caption>Tabela</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>NOTA</th>
            <th>AÇÃO</th>
          </tr>
        </thead>
        <tbody>
          {get && get.data.map((dados, id) =>(
            <tr key={id}>
              <td>{dados.id}</td>
              <td>{dados.nome}</td>
              <td>{dados.nota}</td>
              <td><button onClick={()=> handleDelete(dados.id)}><img src={deleteIcon}></img></button></td>
              <td><button><img src={editIcon}></img></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
};

export default Tabela;