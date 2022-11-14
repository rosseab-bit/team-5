import { Link } from "react-router-dom";



export default function NavBar() {
    return (
        <>
            <nav
            style={{ 
                display: "flex", 
                justifyContent: "space-around",
                textDecorationColor:"black",
                fontSize:"x-large",
                fontStyle:"italic",
                backgroundColor:"#AEBDCA",
                fontFamily:"initial",
                textDecorationLine:"none",
                paddingLeft:"10%"
                }}
                >
                <Link style={{textDecorationLine:"none" }} to="/Inicio">Inicio</Link>
                <Link style={{textDecorationLine:"none"}}to="/Libros">Lista de Libros</Link>
                <Link style={{textDecorationLine:"none"}}to="/Autor">Autores</Link>
                <Link style={{textDecorationLine:"none"}}to="/Categoría">Categorías</Link>
                <Link to="/"></Link>
            
            </nav>
        </>
    );
}