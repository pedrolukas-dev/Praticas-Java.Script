import './style.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <header className="senai-header">
      <div className="header-container">
        
        <Link to="/" className="logo-container">
          <img src={logo} alt="Logo da Empresa" />
          <span>Contabilidade Simples</span>
        </Link>

        <nav className="nav-menu">
          <NavLink to="/sobre-nos">Sobre nós</NavLink>
          <NavLink to="/fale-conosco">Fale conosco</NavLink>
        </nav>

      </div>
    </header>
  );
}