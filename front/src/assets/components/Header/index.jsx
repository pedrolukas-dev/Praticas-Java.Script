import './style.css';

export default function Header(){
    return (
        <header className='header'>
            <h1>Sistema Escolar</h1>
            <nav>
                <link to='/'>Home</link>
                <link to='/cadastro'>Cadastrar</link>
                <link to='/lista'>Listar Alunos</link>
            </nav>
        </header>
    )
}