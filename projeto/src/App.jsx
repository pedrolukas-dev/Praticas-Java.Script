import { useState } from "react";
import './index.css';

const LINK_IMAGEM_CAMPO = "https://static.vecteezy.com/system/resources/previews/009/482/455/non_2x/soccer-football-field-pitch-field-background-vector.jpg";

export default function App() {
  const [jogador, setJogador] = useState(null);
  const [form, setForm] = useState({ nome: "", posicao: "", gols: "" });

  const handleAdicionar = (e) => {
    e.preventDefault();
    if (!form.nome) return alert("Digite o nome!");
    setJogador({ ...form, top: "50%", left: "50%" });
    setForm({ nome: "", posicao: "", gols: "" });
  };

  return (
    <div className="flex h-screen w-full bg-[#004D98] overflow-hidden text-white font-sans">
      <div className="relative flex-grow h-full bg-cover bg-center border-r-4 border-black"
           style={{ backgroundImage: `url('${LINK_IMAGEM_CAMPO}')` }}>
        
        {jogador && (
          <div className="group absolute ponto-jogador" style={{ top: jogador.top, left: jogador.left }}>
            <div className="w-12 h-12 bg-[#A50044] rounded-full flex items-center justify-center border-4 border-[#EDBB00]">
              <span className="text-white font-black text-2xl">⚽</span>
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 tooltip-jogador opacity-0 group-hover:opacity-100 transition-opacity w-48 text-center">
              <h2 className="text-lg font-bold text-[#EDBB00]">{jogador.nome}</h2>
              <p className="text-xs">{jogador.posicao} | {jogador.gols} Gols</p>
            </div>
          </div>
        )}
      </div>

      <div className="w-96 h-full menu-lateral p-8 flex flex-col gap-6">
        <h2 className="text-3xl font-black text-[#EDBB00] border-b-4 border-[#EDBB00] pb-2">FC BARCELONA</h2>
        <form onSubmit={handleAdicionar} className="space-y-4">
          <input className="w-full input-barca" placeholder="Nome do Jogador" value={form.nome} onChange={(e) => setForm({...form, nome: e.target.value})} />
          <input className="w-full input-barca" placeholder="Posição" value={form.posicao} onChange={(e) => setForm({...form, posicao: e.target.value})} />
          <input className="w-full input-barca" placeholder="Gols" type="number" value={form.gols} onChange={(e) => setForm({...form, gols: e.target.value})} />
          <button type="submit" className="w-full btn-barca">Escalar Jogador</button>
        </form>
      </div>
    </div>
  );
}