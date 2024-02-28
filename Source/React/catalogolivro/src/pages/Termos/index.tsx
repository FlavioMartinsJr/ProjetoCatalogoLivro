import { Tittle } from "../../components/Tittle";
import { ScrollToTop } from "../../hooks/Functions/GoToTop"
import "./termos.scss";



export function Termos(){

    ScrollToTop();

    return(
        <section className="fundo-termos">

            {Tittle("Home / Termos de Uso ","" ,"",false)}
            <div className="container termos">
                <h3>Termos de Uso</h3>
                <p>Nossos Termos de Uso estabelecem as regras e condições para o uso dos nossos serviços. Ao acessar o nosso site, você concorda em cumprir estes termos. O conteúdo disponível no site é protegido por direitos autorais e propriedade intelectual. Você concorda em usar o site apenas para fins legais e não infringir os direitos de terceiros. Não é permitido utilizar o site para atividades ilegais, prejudiciais ou que possam violar a privacidade de outros usuários. Reservamos o direito de modificar ou encerrar o serviço a qualquer momento, sem aviso prévio. O conteúdo gerado pelos usuários pode ser removido se violar estes termos. Não nos responsabilizamos por danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso do site. Ao usar o site, você concorda em isentar-nos de qualquer responsabilidade. Estes termos estão sujeitos a alterações sem aviso prévio. Recomendamos que você os revise regularmente.</p>
            </div>

        </section>
    )
}