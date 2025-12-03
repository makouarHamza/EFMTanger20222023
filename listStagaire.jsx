import Stagaire from "./stagaire";
import "./listStagaire.css";
import { useEffect, useState } from "react";
function ListStagaire({listS,suprimer,search,searchTerm}){
    
    return(
        <>
            <div>
                <input 
                    type="search" 
                    placeholder="Search..." 
                    className="form-control w-25 mx-auto my-3"
                    onChange={search}
                />
            </div>
            <h2>LIST DES STAGAIRES:</h2>
            {
                listS.length!==0?
            
            <div className="Slist">
                {
                    (searchTerm.length>0?searchTerm:listS).map((s,i)=><Stagaire fallback={<p>Something went wrong</p>} suprimer={suprimer} key={i} id={s.id} image={s.image} nom={s.nom}/>)
                }

            </div>
            :
            // <h1 className="alert alert-danger">No data available</h1>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div  class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span> 
                </div>
            </div>

            }
        </>
    )
    
}
export default ListStagaire;
