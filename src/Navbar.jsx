import './style.css'
import logo from './assets/github-logo.png'
import { useTheme } from './ThemeContext.jsx';
import lua from './assets/lua.png';
import sol from './assets/sol.png';


function Navbar() {
const { theme, toggleTheme } = useTheme();
return (
	<div className="navbar-config">    
		<h3>Projeto Inicial de React</h3>
<div className='display-f'>
	<button className='theme-toggle-button' onClick={toggleTheme}>
       <img
        src={sol}
        alt="Tema claro"
        className={`theme-icon icon-sun ${theme === 'dark' ? 'slide-out-left' : 'slide-in-left'}`}
      />
      <img
        src={lua}
        alt="Tema escuro"
        className={`theme-icon icon-moon ${theme === 'dark' ? 'slide-in-right' : 'slide-out-right'}`}
      />
	{/* <img className='theme-icon' src={theme === 'dark' ? sol : lua} alt={theme === 'dark' ? 'Modo claro' : 'Modo escuro'} /> */}
    </button>
		<div className='github-bg'>
		   <a href="https://github.com/Ivo-Samuel-dev"><img className='github-logo' src={logo}></img></a>
		</div>
</div>
	</div>
)}
    {/* Alternar para tema {theme === 'dark' ? 'claro' : 'escuro'} */}
export default Navbar