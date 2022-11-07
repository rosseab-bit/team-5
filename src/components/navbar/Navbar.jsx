import { Link } from "react-router-dom";
import './navbar.css';


export default function NavBar() {
    return (
        <>
            <div className="App-navbar">
            
            <nav style={{ display: "flex", justifyContent: "space-around", }}>
                <Link to="/Inicio">Inicio</Link>
                <Link to="/Profile">Perfil</Link>
                <Link to="/Libros">Lista de Libros</Link>
                <Link to="/Autor">Autores</Link>                
                <Link to="/Categoría">Categorías</Link>
                <Link to="/"></Link>
            </nav>
            </div>
        </>
    );
}