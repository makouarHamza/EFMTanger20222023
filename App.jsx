import axios from "axios";
import { useEffect, useState } from "react";
import ListStagaire from "./listStagaire";
import Header from "./header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddStagire from "./addStagaire";
import StagairesApi from "./stagaireApi";
import DetailStagire from "./detailStagaire";

function App(){
    const [stData,setStData]=useState([]);
    const [searchTerm,setSearchTerm]=useState([]);
    useEffect(
        function(){
            axios.get("http://localhost:8001/stagires").then(res=>setStData(res.data)).catch(err=>console.log(err));
        }
        ,[]);
        const search = (e)=>{
            let val = e.target.value.toLowerCase();
            const fData = stData.filter(s=>s.nom.toLowerCase().includes(val));
            // console.log(fData);
            setSearchTerm(fData);
            if(val===""){
                setSearchTerm([]);
            }
        }
        const suprimer = async (id) =>{
            let newDa = stData.filter((st)=>st.id!==id);
            setStData(newDa);
            await axios.delete("http://localhost:8001/stagires/"+id).then(res=>alert("Stagire suprimer: "+res.data.nom))
                .catch(err=>alert(err.message));
        };
        const modifier=async(s)=>{
            let indexS = stData.findIndex(st=>st.id==s.id);
            // console.log(indexS);
            const t =[...stData];
            t.splice(indexS,1,s);
            setStData(t);
            try{
                await axios.put("http://localhost:8001/stagires/"+s.id,s)
                .then(res=>console.log(res.data)
                );
                alert("Modifier avec sucsser");

            }catch(err){
                console.log(err)
            }
        };
        const ajouter=async(newS)=>{
            try{
                newS={...newS,id:Math.random().toString(36).substring(2,6)};
                setStData([...stData,newS]);
                await axios.post("http://localhost:8001/stagires",newS).then(res=>console.log(res.data));
                alert("stagire ajouter");
                
            }catch(err){
                console.log(err);
                alert("Erreur d'ajout");
            }
        };
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<div><h2>EFM 2022-2023 Tanger Tetoune 
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam quam sint hic. Enim architecto velit esse voluptate pariatur atque, maxime cum totam molestias animi, harum omnis nisi commodi, aperiam voluptatem?</p>
                </h2></div>}></Route>
                <Route path="/listS/" >
                    <Route index element={<ListStagaire suprimer={suprimer} listS={stData} searchTerm={searchTerm} search={search}/>} />
                    <Route path=":nom" element={<DetailStagire listS={stData}/>} />
                </Route>
                <Route path="ADD" >
                    <Route index element={<AddStagire ajouter={ajouter}  />}/>
                    <Route path=":id" element={<AddStagire listS={stData} modifier={modifier}/>}/>
                </Route>
                <Route path="api/stagaires" element={<StagairesApi listS={stData} />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;