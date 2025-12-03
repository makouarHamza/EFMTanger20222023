import { NavLink, Router } from "react-router-dom";
import "./header.css";
function Header(){
    return(
        

        <header>
            <h1>EFM Tanger-Tetouan 2022-2023</h1>
            <ul>
                <li><NavLink to="/">Accueill</NavLink> </li>
                <li><NavLink to="/ListS">List des Stagaires</NavLink> </li>
                <li><NavLink to="/add">Ajouter Un stagaire</NavLink> </li>
                <li><NavLink to="/api/stagaires">API</NavLink> </li>
            </ul>
        </header>
        

    )
}
export default Header;