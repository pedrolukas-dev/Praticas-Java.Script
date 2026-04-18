import './style.css'

export default function FaleConosco()  {
    function handleSubmit(e){
        e.preventeDefault()
    }
return(
    <section>
        <h1>Fale conosco</h1>
        <p> Tire Dúvidas e peça um orçamento sem compromisso.</p>
        <form>onSubmit ={handleSubmit}
            <div>
                <label>
                    <span>Nome</span>
                    <input>type= "text" required placechol= "Seu nome"</input>
                </label>
            </div>

        </form>
    </section>
)
}