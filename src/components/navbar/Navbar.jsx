import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {faHome} from "@fortawesome/free-solid-svg-icons";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faIdCardClip} from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

export default function NavBar(props) {
    return (
        <>
        
            <nav className="nav">
                        <FontAwesomeIcon icon={faHome} className="FirstIcon"/>
                        <Link className="navLink" to="/Login">Inicio</Link>
                        <FontAwesomeIcon icon={faBook} className="FirstIcon"/>
                        <Link className="navLink" to="/Libros">Lista de Libros</Link>
                        <FontAwesomeIcon icon={faUsers} className="FirstIcon"/>
                        <Link className="navLink" to="/Autor">Autores</Link>
                        <FontAwesomeIcon icon={faIdCardClip} className="FirstIcon"/>
                        <Link className="navLink" to="./Profile">Perfil</Link>
                        <FontAwesomeIcon icon={faBars} className="FirstIcon"/>
                        <Link className="navLink" to="/Categoría">Categorías</Link>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="FirstIcon"/>    
                        <label className="navLabel" for="txtTitulo">Título del Libro: </label>
                        <input type="text" className="input" placeHolder="Titulo"></input>
                        <Button type="submit" className="Enviar">Enviar</Button>{' '} 
                        <Link to="/"></Link>
                
            </nav>
        </>
    );
}


