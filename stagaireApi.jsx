function StagairesApi({listS}){
    return(
        <div style={{display:"grid",justifyContent:"center",gridTemplateColumns:"1fr",alignItems:"center",marginTop:"30px",marginBottom:"30px",marginLeft:"20px",marginRight:"20px"}}>
            <h2 style={{color: '#333', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', textAlign:"center"}}>StagairesApi</h2>
            {
                listS.length!==0?<table className="table table-bordered" >
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
                    {
                        listS.map((st,i)=>
                        <tr key={i} className="table-secondary">
                            <td>{st.id}</td>
                            <td>{st.image}</td>
                            <td>{st.nom}</td>
                            <td>{st.prenom}</td>
                            <td>{st.filiere}</td>
                        </tr>)
                    }
                </tbody>
                </table>:
                // <h1 className="alert alert-danger">No data available</h1>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div  class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span> 
                    </div>
                </div>
            }
        </div>
    )
}
export default StagairesApi;