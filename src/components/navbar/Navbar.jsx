import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from 'react-bootstrap/Button';


export default function NavBar(props) {
    return (
        <>
        
            <nav className="nav">
                        <Link className="navLink" to="/Login">Inicio</Link>
                        <Link className="navLink" to="/Libros">Lista de Libros</Link>
                        <Link className="navLink" to="/Autor">Autores</Link>
                        <Link className="navLink" to="./Profile">Perfil</Link>
                        <Link className="navLink" to="/Categoría">Categorías</Link>
                        <div>
                            <label className="navLabel" for="txtTitulo">Título del Libro: </label>
                            <input type="text" className="input"></input>
                          
                        </div>
                        <Button type="submit" className="Enviar">Enviar</Button>{' '} 
                        <Link to="/"></Link>
                
            </nav>
        </>
    );
}


