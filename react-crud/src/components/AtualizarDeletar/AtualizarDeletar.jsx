import React from 'react';
import axios from 'axios';

function AtualizarDeletar(){
  const Deletar = async(e) =>{
    try{
         e.preventDefault();
         var id = document.getElementById("id")
          console.log(id.value)
         axios.delete("http://localhost:3000/alunos/"+id.value, {
             nome: `${nome.value}`,
             nota: `${nota.value}`
         });

         nome.value = '';
         nota.value = '';
     }
     catch(error){
         console.log(error)
     }
 }
  return (
  <div className='atualizar_deletar'>
      <p>Para atualizar digite o ID do aluno para poder atualizar os dados.</p>
      <p>Para deletar só digite o ID</p>
      <form  method="post" >
        <label htmlFor='id'>ID:</label>
        <input type='number' id='id' placeholder='ID'></input>

        <label htmlFor="nome">Nome: </label>
        <input type='text' id='nome'min="4" required placeholder='Nome do aluno'></input>

        <label htmlFor="nota">Nota:</label>
        <input type='number' id="nota" min="1" required placeholder='Nota do aluno'></input>

        <button type='submit'>Atualizar</button>
        <button type='submit' onClick={Deletar}>Deletar</button>
      </form>
  </div>
  )
}

export default AtualizarDeletar;