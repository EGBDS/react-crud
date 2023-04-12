import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Tabela from './components/Tabela/Tabela';
import Cadastro from './components/Cadastro/Cadastro';


function App() {

  return (
    <div className="App">
      <header>
        <h1>Cadastro de Alunos e Notas</h1>
        <nav>
          
          <ul>
            <li><Link to="/">Tabela</Link></li>
            <li><Link to="/cadastro">Cadastro</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
          <Route Component={ Tabela } path='/' exact/>
          <Route Component={ Cadastro } path='/cadastro' />
        </Routes>
      <footer>
        <p>Desenvolvido por <a href='https://github.com/EGBDS' target='_blank'>EGBS</a></p>
      </footer>
    </div>
  )
}

export default App;
