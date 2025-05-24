import './style.css'
import logo from './assets/github-logo.png'

function Navbar() {
return (
	<div className="navbar-config">    
		<h3>Projeto Inicial de React</h3>
		<div className='github-bg'>
		<a href="https://github.com/Ivo-Samuel-dev"><img className='github-logo' src={logo}></img></a>
		</div>
	</div>
)}


export default Navbar