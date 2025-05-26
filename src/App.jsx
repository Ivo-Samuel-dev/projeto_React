import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Navbar.jsx';
import { useTheme } from './ThemeContext.jsx';


function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='titulo'>
        <h2>Ferramentas utilizadas:</h2>
      </div>

        <div className="corpo">
        <div className='vitrine-vite'>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <h3>VITE</h3>
          <h4 className='box-content'>Vite é uma ferramenta de desenvolvimento de front-end que visa otimizar o processo de desenvolvimento,
            proporcionando uma inicialização rápida e um tempo de compilação ágil.</h4>
        </div>
        <div className='vitrine-react'>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <h3>REACT</h3>
          <h4 className='box-content'>React é uma biblioteca JavaScript criada pelo Facebook em 2013, utilizada para desenvolver interfaces de usuário (UI) em aplicações web.
            É conhecida por sua eficiência e escalabilidade, permitindo que os desenvolvedores criem aplicações de forma mais simples e flexível.</h4>
        </div>
      </div>


      <div className="card">
        {/* <button onClick={toggleTheme}>
          Alternar para tema {theme === 'dark' ? 'claro' : 'escuro'}
        </button> */}
        <p>Feito por: Ivo Samuel</p>
      </div>
    </>
  );
}

export default App;
