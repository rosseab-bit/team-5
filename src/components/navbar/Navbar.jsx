import { Link } from "react-router-dom";
import "./Navbar.css";
import '../../App.css'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faIdCardClip } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function NavBar(props) {
    return (
        <>
            <nav className="nav">

                <Link className="navLink" to="/home">
                    <FontAwesomeIcon icon={faHome} className="FirstIcon" />
                    Inicio
                </Link>
                <Link className="navLink" to="/Libros">
                    <FontAwesomeIcon icon={faBook} className="FirstIcon" />
                    Lista de Libros
                </Link>

                <Link className="navLink" to="/Autor">
                    <FontAwesomeIcon icon={faUsers} className="FirstIcon" />
                    Autores
                </Link>

                <Link className="navLink" to="./Profile">
                    <FontAwesomeIcon icon={faIdCardClip} className="FirstIcon" />
                    Perfil
                </Link>

                <Link className="navLink" to="/Categoría">
                    <FontAwesomeIcon icon={faBars} className="FirstIcon" />
                    Categorías
                </Link>

                <label className="navLabel" for="txtTitulo">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="FirstIcon" />
                    Título del Libro: </label>
                <input type="text" className="input" placeHolder="Titulo"></input>
                <Button type="submit" className="Enviar">Enviar</Button>{' '}
                <Link to="/"></Link>
            </nav>
        </>
    );
}


