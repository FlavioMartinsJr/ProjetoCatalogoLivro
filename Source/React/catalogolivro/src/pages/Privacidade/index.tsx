import { Tittle } from "../../components/Tittle";
import { ScrollToTop } from "../../hooks/Functions/GoToTop"
import "./privacidade.scss";



export function Privacidade(){

    ScrollToTop();

    return(
        <section className="fundo-privacidade">

            {Tittle("Home / Privacidade ","" ,"",false)}
            <div className="container privacidade">
                <h3>Politica e Privacidade</h3>
                <p>Nossa política de privacidade visa proteger os dados dos usuários. Coletamos informações pessoais apenas quando fornecidas voluntariamente. Esses dados são utilizados exclusivamente para os fins informados no momento da coleta, como processamento de pedidos e comunicações sobre promoções. Adotamos medidas de segurança para proteger as informações contra acesso não autorizado. Não compartilhamos informações pessoais com terceiros sem consentimento, exceto por obrigações legais. Utilizamos cookies para melhorar a experiência do usuário, os quais podem ser desativados nas configurações do navegador. Reservamo-nos o direito de atualizar esta política periodicamente e incentivamos os usuários a revisá-la regularmente.</p>
            </div>

        </section>
    )
}