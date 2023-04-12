import React, { useState } from 'react';
import axios from 'axios';
import url from '../axios';


function Cadastro(){
    
    const Cadastrar = async(e) =>{
       try{
            e.preventDefault();
            var nome = document.getElementById("nome");
            var nota = document.getElementById("nota");
            
            axios.post("http://localhost:3000/alunos", {
                id: "",
                nome: `${nome.value}`,
                nota: `${nota.value}`
            });

            nome.value = '';
            nota.value = '';
            alert("Cadastro concluido!")
        }
        catch(error){
            console.log(error)
        }
    }

  return (
    <div className='cadastro'>
        <form  method="post" onSubmit={Cadastrar}>
            <label htmlFor="nome">Nome: </label>
            <input type='text' id='nome' min="4" required placeholder='Nome do aluno'></input>

            <label htmlFor="nota">Nota:</label>
            <input type='number' id="nota" min="1" required placeholder='Nota do aluno'></input>
            <button type='submit'>Cadastrar</button>
        </form>
    </div>
  )
}

export default Cadastro;
