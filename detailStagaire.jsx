import { list } from "postcss";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DetailStagire({listS}){
    const nom = useParams().nom;
    const [s,setS]=useState({})
    useEffect(function(){
        const found = listS.find(s=>s.nom.toLowerCase().trim()===nom.toLowerCase().trim());
        if(found){
            setS(found)
        }
    },[listS,nom]);

    return(
        <div>
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Filiere</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">   
                        <tr  className="table-secondary">
                            <td>{s.id ? s.id:"undefind"}</td>
                            <td>
                                <img src={s.image ? "../images/" + s.image:"https://placehold.co/600x400"} style={{height:"50px",width:"50px"}} />
                            </td>
                            <td>{s.nom?s.nom:""}</td>
                            <td>{s.prenom?s.prenom:""}</td>
                            <td>{s.filiere?s.filiere:""}</td>
                        </tr>
                </tbody>
            </table>
            <div style={{display:"flex",justifyContent:"center"}}>
                <Link style={{color:"black"}} to="/ListS">Back</Link>
            </div>
        </div>
    )
}
export default DetailStagire;