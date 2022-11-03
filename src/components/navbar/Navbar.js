import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <nav style={{ display: "flex", justifyContent: "space-around" }}>
                <Link to="/Inicio">Inicio</Link><br/>
                <Link to="/Libros">Libros</Link>
                <Link to="/categoria">Categoria</Link>
                <Link to="/acceso">Acceso</Link>
                <Link to="/Perfil">Perfil</Link>
            </nav>
        </>
    );
}