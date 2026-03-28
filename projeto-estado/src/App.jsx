import './App.css'
import InfoAluno from './assets/components/InfoAluno/index.jsx'
import InfoCurso from './assets/components/InfoCurso/index.jsx'

function App() {


  return (
  <div className="app-container"> {/* ESSA LINHA É A CHAVE! */}
    <h1>Olá Mundo</h1>
    <InfoAluno />
    <InfoCurso />
  </div>
)
}

export default App
