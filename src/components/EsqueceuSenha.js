import { sendPasswordResetEmail } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom"

import './EsqueceuSenha.css'

import Footer from '../components/Footer';

const EsqueceuSenha = () => {

    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailVal = e.target.email.value;

        try {
            const auth = getAuth();
            await sendPasswordResetEmail(auth, emailVal);
            alert("Link enviado com sucesso !! Verifique seu e-mail");
            history("/login");
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <section>
            <div className="main_esqueceu_senha">
                
                <h1 className="title_page_esqueceu_senha">Recuperação de Senha</h1>
                
                <div>
                    <form className="form_esqueceu_senha" onSubmit={(e) => handleSubmit(e)}>
                        <input name="email" className="input_email_esqueceu_senha"/><br /><br />
                        <button className="btn_esqueceu_senha">Enviar</button>
                    </form>
                </div>
                
            </div>

            <Footer/>
        </section>
    );
}

export default EsqueceuSenha;
