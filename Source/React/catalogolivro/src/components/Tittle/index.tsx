import { faGrip} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./tittle.scss";

export function Tittle(path:string| any,tittle:string | any,textRight:string | any, icon:boolean){

    return(
        <div className="titulo">
            <div className="titulo-left">
                <h5>{path}</h5>
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