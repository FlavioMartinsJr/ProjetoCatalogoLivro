import { faGrip} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom"

import "./tittle.scss";

export function Tittle(path:string| any,tittle:string | any,textRight:string | any, icon:boolean){

    const navigate = useNavigate()

    function ToHome(){
        return navigate("/Inicio")
    }

    return(
        <div className="titulo">
            <div className="titulo-left">
                <h5 onClick={ToHome}>{path}</h5>
                <h2>{tittle}</h2>
            </div>
            <div className="titulo-right">
                <div className="titulo-right-result">
                    {icon==true?<FontAwesomeIcon className="titulo-right-result-icon" icon={faGrip}/>:<></>}
                    <span>  {textRight}</span>
                </div>
            </div>
        </div>
    )
}