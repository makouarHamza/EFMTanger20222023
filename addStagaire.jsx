import axios from "axios";
import { use, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

function AddStagire({listS,ajouter,modifier}){
    const [newS,setNewS]=useState({id:"",image:"",nom:"",prenom:"",filiere:""});
    
    const [btn,setBtn]=useState("Ajouter");

    const statusImgInput = newS.image.trim() === "" ? "is-invalid" : "is-valid";
    const statusNomInput = newS.nom.trim() === "" ? "is-invalid" : "is-valid";
    const statusPreInput = newS.prenom.trim()==="" ?"is-invalid" : "is-valid";
    const statusFieInput = newS.filiere.trim()===""? "is-invalid" : "is-valid";

    const idM = useParams().id;

    useEffect(function(){
        if(idM){
            setBtn("Modifier");
            const ns = listS.find(s=>s.id===idM);
            setNewS(ns);
        }
    },[]);

    const handleAdd = () =>{
        if(btn==="Ajouter"){
            if(newS.image.trim()=="" || newS.prenom.trim()==""){
                alert("vouillez enterz tout les chans");
                return;
            }
            ajouter(newS);

        }else{
            if(newS.image=="" || newS.prenom==""){
                alert("vouillez enterz tout les chans");
                return;
            }
            modifier(newS);
            setBtn("Ajouter");
            
        }
        setNewS({id:"",image:"",nom:"",prenom:"",filiere:""});

    };
    return(
        <div>
            <form className="d-flex flex-column gap-3 w-50 mx-auto mt-5">
                <div className="d-flex flex-column">
                    <input className={"form-control "+statusImgInput} type="text" onChange={(e)=>setNewS({...newS,image:e.target.value})} value={newS.image}  placeholder="Saiser le lien de l'image" />
                </div>
                <div className="d-flex flex-column">
                    <input className={"form-control "+statusNomInput} type="text" onChange={(e)=>setNewS({...newS,nom:e.target.value})} value={newS.nom} placeholder="Saiser le nom" />
                </div>
                <div className="d-flex flex-column">
                    <input className={"form-control "+statusPreInput} type="text" onChange={(e)=>setNewS({...newS,prenom:e.target.value})} value={newS.prenom} placeholder="Saiser le prenom" />
                </div>
                <div className="d-flex flex-column">
                    <input className={"form-control "+statusFieInput} type="text" onChange={(e)=>setNewS({...newS,filiere:e.target.value})} value={newS.filiere} placeholder="Saiser le fliere" />
                </div>
                <div className="d-flex flex-column">
                    {
                    (btn==="Modifier")?
                    <button  
                        
                        onClick={handleAdd}
                        >
                            <Link to="/ADD" style={{fontSize:"1.8rem",backgroundColor:"black",color:"white",borderRadius:"12px",padding:"12px"}}>
                                {idM?"Modifier":"Ajouter"}
                                <i className="bi bi-pencil-square"></i>
                            </Link>
                    </button>
                    
                    :
                    <input className="btn btn-success"
                        value={idM?"Modifier":"Ajouter"}
                        type="button" 
                        onClick={handleAdd}/>
                    
                }
                    
                </div>
            </form>
        </div>
    )
}
export default AddStagire;