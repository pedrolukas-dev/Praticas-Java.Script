import { useState } from "react";
import './index.css';

import logoBarca from './assets/logo.png';
import imagemCampo from './assets/campo.jpg';

// 1. MAPA DE POSIÇÕES: Define onde cada bolinha aparece no campo (ajuste os % se precisar)
const COORDENADAS_POSICOES = {
  // DEFESA (Lado Esquerdo - Defendendo o gol da esquerda)
  "Goleiro": { top: "50%", left: "10%" },
  "Zagueiro Central": { top: "50%", left: "25%" },
  "Zagueiro Esq.": { top: "35%", left: "25%" },
  "Zagueiro Dir.": { top: "65%", left: "25%" },
  "Lateral Esquerdo": { top: "15%", left: "30%" },
  "Lateral Direito": { top: "85%", left: "30%" },

  // MEIO-CAMPO
  "Volante": { top: "50%", left: "40%" },
  "Meia Central": { top: "50%", left: "55%" },
  "Meia Atacante": { top: "50%", left: "65%" },

  // ATAQUE (Lado Direito - Atacando o gol da direita)
  "Ponta Esquerda": { top: "20%", left: "80%" },
  "Ponta Direita": { top: "80%", left: "80%" },
  "Centroavante": { top: "50%", left: "85%" },
};
export default function App() {
  // Troquei 'jogador' por 'elenco' para aceitar vários
  const [elenco, setElenco] = useState([]);
  const [form, setForm] = useState({ 
    nome: "", posicao: "", gols: "", idade: "", assistencias: "", habilidade: "" 
  });

  const handleAdicionar = (e) => {
    e.preventDefault();
    if (!form.nome || !form.posicao) return alert("Preencha Nome e Posição!");

    // Busca as coordenadas baseadas na posição escolhida
    const localizacao = COORDENADAS_POSICOES[form.posicao];

    const novoJogador = {
      ...form,
      id: Date.now(), // ID único para não dar erro no React
      top: localizacao.top,
      left: localizacao.left
    };

    // Adiciona o novo jogador à lista sem apagar os anteriores
    setElenco([...elenco, novoJogador]);
    
    // Limpa o formulário
    setForm({ nome: "", posicao: "", gols: "", idade: "", assistencias: "", habilidade: "" });
  };

  const limparCampo = () => setElenco([]);

  return (
    <div className="flex h-screen w-full bg-barca-azul overflow-hidden text-white font-sans">
      
      {/* CAMPO TÁTICO */}
      <div 
        className="relative flex-grow h-full bg-cover bg-center border-r-4 border-black"
        style={{ backgroundImage: `url(${imagemCampo})` }} 
      >
        {elenco.map((jog) => (
          <div 
            key={jog.id}
            className="group absolute" 
            style={{ top: jog.top, left: jog.left, transform: 'translate(-50%, -50%)' }}
          >
            <div className="w-12 h-12 bg-barca-grena rounded-full flex items-center justify-center border-4 border-barca-amarelo ponto-jogador transition-transform group-hover:scale-125">
              <span className="text-white font-black text-xl text-shadow">⚽</span>
            </div>
            
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 tooltip-jogador opacity-0 group-hover:opacity-100 transition-all w-56 text-center shadow-2xl z-50 pointer-events-none">
              <h2 className="text-lg font-black text-barca-amarelo uppercase leading-tight">{jog.nome}</h2>
              <p className="text-xs font-bold text-white/90 mb-2">{jog.posicao} | {jog.idade} anos</p>
              
              <div className="flex justify-around border-t border-barca-amarelo/30 pt-2 mt-2">
                <div><p className="text-[10px] opacity-70">Gols</p><p className="font-bold">{jog.gols || 0}</p></div>
                <div><p className="text-[10px] opacity-70">Assists</p><p className="font-bold">{jog.assistencias || 0}</p></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FORMULÁRIO LATERAL */}
      <div className="w-96 h-full menu-lateral p-6 flex flex-col gap-4 items-center overflow-y-auto">
        <img src={logoBarca} alt="Logo Barça" className="w-20 h-auto drop-shadow-lg" />
        <h2 className="text-xl font-black text-barca-amarelo border-b-2 border-barca-amarelo pb-1 text-center w-full uppercase">Escalação Tática</h2>
        
        <form onSubmit={handleAdicionar} className="space-y-3 w-full">
          <div className="flex gap-2">
            <div className="flex-[2]">
              <label className="text-[10px] font-bold">Nome</label>
              <input className="w-full input-barca" placeholder="Ex: Lamine" value={form.nome} onChange={(e) => setForm({...form, nome: e.target.value})} />
            </div>
            <div className="flex-1">
              <label className="text-[10px] font-bold">Idade</label>
              <input className="w-full input-barca" type="number" value={form.idade} onChange={(e) => setForm({...form, idade: e.target.value})} />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold">Posição Específica</label>
            <select 
              className="w-full input-barca appearance-none cursor-pointer"
              value={form.posicao} 
              onChange={(e) => setForm({...form, posicao: e.target.value})}
            >
              <option value="" disabled>Selecione...</option>
              <option value="Goleiro">Goleiro (GK)</option>
              <option value="Zagueiro Esq.">Zagueiro Esq. (LCB)</option>
              <option value="Zagueiro Central">Zagueiro Central (CB)</option>
              <option value="Zagueiro Dir.">Zagueiro Dir. (RCB)</option>
              <option value="Lateral Esquerdo">Lateral Esquerdo (LB)</option>
              <option value="Lateral Direito">Lateral Direito (RB)</option>
              <option value="Volante">Volante (CDM)</option>
              <option value="Meia Central">Meia Central (CM)</option>
              <option value="Meia Atacante">Meia Atacante (CAM)</option>
              <option value="Ponta Esquerda">Ponta Esquerda (LW)</option>
              <option value="Ponta Direita">Ponta Direita (RW)</option>
              <option value="Centroavante">Centroavante (ST)</option>
            </select>
          </div>

          <div className="flex gap-2">
            <div className="flex-1">
              <label className="text-[10px] font-bold">Gols</label>
              <input className="w-full input-barca" type="number" value={form.gols} onChange={(e) => setForm({...form, gols: e.target.value})} />
            </div>
            <div className="flex-1">
              <label className="text-[10px] font-bold">Assists</label>
              <input className="w-full input-barca" type="number" value={form.assistencias} onChange={(e) => setForm({...form, assistencias: e.target.value})} />
            </div>
          </div>

          <button type="submit" className="w-full btn-barca py-3">Escalar no Campo</button>
          <button type="button" onClick={limparCampo} className="w-full text-[10px] uppercase opacity-50 hover:opacity-100 transition-opacity">Limpar Tudo</button>
        </form>
      </div>
    </div>
  );
}