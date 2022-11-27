import React from 'react';
import { useNavigate } from "react-router-dom";
import ErrorImage from './statics/img/notFoundImage.jpg'

const ErrorNotFound = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `home`;
        navigate(path);
    }
        return (
            <>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundImage: `url(${ErrorImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        height: '100vh',

                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'rgba(0,0,0,.9)',
                            borderRadius: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignContent: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',

                        }}
                    >
                        <p
                            style={{
                                fontSize: 200,
                                textAlign: 'center',
                                marginBottom: 1,
                                color: '#fff'
                            }}
                        >
                            404
                        </p>
                        <p
                            style={{
                                fontSize: 50,
                                textAlign: 'center',
                                marginBottom: 1,
                                color: '#fff',
                                marginLeft: 5,
                                marginRight: 5
                            }}
                        >
                            Pagina no encontrada
                        </p>
                        <button
                            style={{
                                textAlign: 'center',
                                marginBottom: 10,
                                borderRadius: 5,
                                fontSize: 20
                            }}
                            onClick={()=>routeChange()}
                        >
                            VOLVER
                        </button>
                    </div>
                </div>
            </>
        );
    }
    export default ErrorNotFound;