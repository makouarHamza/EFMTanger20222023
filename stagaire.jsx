import { Link } from "react-router-dom";
import "./stagaire.css";
function Stagaire({id,nom,image,suprimer}){
    const handleSup = (idS) => {
        if(window.confirm("Es tait sur de suprimer?")){
            suprimer(idS)
        }
       
    }
    return(
        <div className="card" style={{width: "28rem"}}>
            <Link className="St" to={nom.toLowerCase()}>
                <img src={image ?("./images/"+image) : "https://placehold.co/600x400" } alt={nom}/>
            </Link>
            <div>
                <h4>{nom}</h4>
            </div>
            <div>
                <button className="btn btn-danger" onClick={()=>handleSup(id)}>Suprimer</button>
                <Link to={"/add/"+id} className="btn btn primary" style={{backgroundColor:"lightblue",color:"white"}}>
                    Modifier
                </Link>
            </div>
        </div>
    )
}
export default Stagaire;
