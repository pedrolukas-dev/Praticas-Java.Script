import { useState } from 'react';
import './style.css';
import api from '../../services/api';
import { toast } from 'react-toastify';

export default function CadastroPage() { // Corrigi o nome de CadastroPafe para CadastroPage
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [estaEnviando, setEstaEnviando] = useState(false); // Sem aspas! Booleano real.

    function limparCamposDoFormulario() {
        setNome('');
        setEmail('');
        setTelefone('');
    }

    async function envioDoFormulario(e) {
        e.preventDefault();
        setEstaEnviando(true);

        const dadosDoFormulario = { nome, email, telefone };

        try {
            // Se der certo
            const resposta = await api.post('/alunos', dadosDoFormulario);
            toast.success(resposta.data.mensagem || 'Aluno cadastrado com sucesso!');
            
            // Chama a função para limpar os inputs após o sucesso!
            limparCamposDoFormulario(); 
            
        } catch (erro) {
            // Se der errado (ajustado para erro.response em vez de erro.resposta)
            const mensagemDoServidor = erro?.response?.data?.mensagem || 'Erro ao cadastrar aluno';
            toast.error(`Erro no cadastro: ${mensagemDoServidor}`);
        } finally {
            // Executa de qualquer jeito, dando certo ou errado.
            setEstaEnviando(false);
        }
    }

    return (
        <div className='cadastro-page'>
            <h2>Cadastrar Novo Aluno</h2>
            <form onSubmit={envioDoFormulario}>
                <div className='form-grupo'>
                    <label htmlFor="campo-nome">Nome</label>
                    <input
                        id='campo-nome'
                        type='text'
                        placeholder='Ex.: Maria Silva' // Corrigido de placehold para placeholder
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required // Dica: Obriga o usuário a preencher
                    />
                </div>
                <div className='form-grupo'>
                    <label htmlFor="campo-email">Email</label>
                    <input
                        id='campo-email'
                        type='email'
                        placeholder='Ex.: email@senai.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='form-grupo'>
                    <label htmlFor="campo-telefone">Telefone</label>
                    <input
                        id='campo-telefone'
                        type='tel' // Corrigido de telefone para tel
                        placeholder='Ex.: (71) 99999-9999'
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        required
                    />
                </div>
                <button type='submit' disabled={estaEnviando}>
                    {estaEnviando ? 'Cadastrando...' : 'Cadastrar'}
                </button>
            </form>
        </div>
    );
}