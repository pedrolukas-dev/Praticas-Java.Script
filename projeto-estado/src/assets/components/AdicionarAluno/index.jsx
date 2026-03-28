import './style.css'

function AdicionarAluno() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [Alunos, setAlunos] = useState([]);

    const handlerAdicionarAluno = (event) => {
        event.preventDefault()

        if (nome && email) {
            setAlunos([...Alunos, { nome, email }])
            setNome("")
            setEmail("")
            }
        }
    return (
        <div>
            <h2>Adicionar Aluno:</h2>
            <form onsubmit={handlerAdicionarAluno}>
                <input
                    type="text"
                    value={nome}
                    onchange={(e) => setNome(e.target.value)}

        <div>
    }
export default AdicionarAluno