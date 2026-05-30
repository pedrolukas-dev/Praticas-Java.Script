import { use } from "react";




export default function ListaAlunoPage() {
    useEffect(() => {
        async function fetchAlunos() {
        }
        fetchAlunos();
    }, []);
    return (
        <div className='lista-aluno'>
            <h1>Lista de Alunos</h1>
            <table className='tabela-aluno'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map(aluno=> (
                        <tr key={aluno.id}>
                            <td>{aluno.nome}</td>
                            <td>{aluno.email}</td>
                            <td>{aluno.telefone}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}