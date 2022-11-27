import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FcReading } from 'react-icons/fc';
import { FcOpenedFolder } from 'react-icons/fc';
import { IoBookOutline } from 'react-icons/io5'
import { IoRadioButtonOnOutline } from 'react-icons/io5'

const FiltrosLibros = () => {
    return (
        <>
            <div
                style={{
                    marginTop: 10,
                    marginLeft: 65,
                }}
            >
                <p>
                    <IoBookOutline />  Categorias
                </p>
                <ul
                    style={{
                        listStyle: 'none',
                        marginTop: 1
                    }}
                >
                    <li>
                        <button
                            style={{
                                all: "unset",
                                cursor: "pointer"
                            }}
                        >
                            <IoRadioButtonOnOutline /> Terror
                        </button>
                    </li>
                    <li>
                    <button
                            style={{
                                all: "unset",
                                cursor: "pointer"
                            }}
                        >
                        <IoRadioButtonOnOutline />  Comedia
                        </button>
                    </li>
                    <li>
                    <button
                            style={{
                                all: "unset",
                                cursor: "pointer"
                            }}
                        >
                        <IoRadioButtonOnOutline /> Romance
                        </button>
                    </li>
                    <li>
                    <button
                            style={{
                                all: "unset",
                                cursor: "pointer"
                            }}
                        >
                        <IoRadioButtonOnOutline /> Historia
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default FiltrosLibros;