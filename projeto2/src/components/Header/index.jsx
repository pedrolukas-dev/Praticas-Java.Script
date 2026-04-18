import './style.css'
import {Link,Navlink} from 'react-router-dom'
import logo from '../../assets/logo.png'


export default function Header() {
    return (
        <header>
            <div>
                <link to="/">
                <img src={logo} alt="Logo da Empresa"/>
                <span>Contabilidade Simples</span>
            </link>
            <nav>
                <NaveLink to= "/sobre-nos"> Sobre nós</NaveLink>
                <NavLink to= "/fale-conosco"> Fale conosco</NavLink>
            </nav>
            </div>
        </header>
    )
}