import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <nav 
            style={{ 
                display: "flex", 
                justifyContent: "space-around",
                }}
                >
                <Link to="/Inicio">Inicio</Link>
                <Link to="/Libros">Lista de Libros</Link>
                <Link to="/Autor">Autores</Link>
                <Link to="/Categoría">Categorías</Link>
                <Link to="/"></Link>
            </nav>
        </>
    );
}