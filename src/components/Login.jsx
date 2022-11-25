import Button from 'react-bootstrap/Button';
import BackgroundLogin from './statics/img/backgroundLogin.jpg'
import { Link } from "react-router-dom";
const Login = () => {
    const goHome = () => {
        return(
            <Link to= "/home">Ingresar</Link>
        );
    }
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    alignContent: 'center',
                    backgroundImage: `url(${BackgroundLogin})`,
                    "background-repeat": 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    height: '945px'

                }}
            >
                <div
                    style={{
                        marginTop: '20%',
                        height: '300px',
                        width: '300px',
                        backgroundColor: 'rgba(0,0,0,.8)',
                        borderRadius: '10%',
                        color: '#fff'
                    }}
                >
                    <p
                    style={{
                        textAlign: 'center',
                        fontSize: '25px'
                    }}
                    >
                        DigiLibros
                    </p>
                    <form action="" style={{
                        marginTop: '40px',
                        color: '#fff',
                        marginLeft: '10px',
                        marginRight: '10px'
                    }}
                        className="d-grid gap-2"
                    >
                        <label htmlFor="">Usuario</label>
                        <input type="text" />
                        <label htmlFor="">Contraseña</label>
                        <input type="text" />
                        <Button variant="secondary" size="lg"
                        >
                            <Link to= "/home"
                            style={{
                                textDecoration: 'none',
                                color: '#fff'
                            }}
                            >
                                Ingresar
                                </Link>
                        </Button>
                    </form>

                </div>
            </div>
        </>
    );
}
export default Login;