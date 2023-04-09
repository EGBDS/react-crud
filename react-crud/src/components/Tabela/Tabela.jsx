import React, { useEffect, useState } from 'react';
import url from '../axios';

const Tabela = () => {
  
  const [ get, setGet ] = useState();
  
  const getdados = async() => {
    try{
      const resposta = await url.get("alunos");
      setGet(resposta);
    }
    catch(error){
      console.log(error)
    }
  }
  
  useEffect(() => {
    getdados();
  },[])


  return (
    <main>
      <table>
        <caption>Tabela</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>NOTA</th>
          </tr>
        </thead>
        <tbody>
          {get && get.data.map((dados) =>(
            <tr key={dados.id}>
              <td>{}</td>
              <td>{dados.nome}</td>
              <td>{dados.nota}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
};

export default Tabela;