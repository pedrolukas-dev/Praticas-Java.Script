import './style.css'
import{ useState} from 'react'


function InfoCurso() {
    const [nome, setNome] = useState("joão silva");
    const [cargaHoraria, setCargaHoraria] = useState(90);
    const [local, setLocal] = useState("Unijorge");

    
    return (
        <div className='info-Curso'>
            <h2>Informações do Curso</h2>
            <p>Nome: {nome}</p>
            <p>Carga horaária: {cargaHoraria}</p>
            <p>Local: {local}</p>
        </div>
    )
}

export default InfoCurso