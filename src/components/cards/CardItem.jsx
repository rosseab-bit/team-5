
import React from 'react';
import ImageBook from '../statics/img/el-ultimo-graduado-el-ultimo-graduado.jpg'


const CardItem = ({dataBaseBooks}) => {
    const [onHover, setOnHover] = React.useState(false);
    const handleMouseEnter = () =>{
        setOnHover(true);
    }
    const handleMouseLeave = ()=>{
        setOnHover(false);
    }
    const dataBook = {
        "title": "El ultimo graduado",
        "description": "La amenaza de la graduación cobra un peso significativo al tiempo que la innovadora trilogía de Naomi Novik, superventas del New York Times, continúa con la asombrosa secuela de 'Una educación mortal'. «El conocimiento otorga protección.» Ese es el lema oficial de la Escolomancia.",
        "bannerBook": "Imagen del libro",
        "precio": 200,
        "categoria": "terror"
    }
    return (
        <>
        <button
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        style={{
            "all": "unset",
            "cursor": "pointer",
            marginLeft: 15,
            marginTop:10,
            marginBottom: 5
        }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: 'column',
                    backgroundColor: "rgba(255, 255, 255, .5)",
                    width: '214px',
                    borderRadius: 10,
                    boxShadow: onHover ? "5px 5px 5px #737373" : "5px 5px 5px #7895B2"
                }}
            >
                <div
                    style={{
                        marginTop: 1,
                        marginBottom: 0
                    }}
                >
                    <p
                        style={{
                            textAlign: 'center'
                        }}
                    >
                        {dataBook.title}
                    </p>
                    <img
                        style={{
                            borderRadius: "5px 5px 5px 5px",
                            marginLeft: 5,
                            marginRight: 5,
                            marginTop:0
                        }}
                        src={ImageBook}
                        alt=""
                        height="200px"
                        width="auto"
                    />
                </div>
                <div
                    style={{
                        marginBottom: 1
                    }}
                >
                    <p
                        style={{
                            textAlign: 'center'
                        }}
                    >
                        Precio: ${dataBook.precio}
                    </p>
                </div>
                <button
                style={{
                    borderRadius: 5,
                    backgroundColor: 'rgb(174, 189, 202)',
                    marginLeft: 5,
                    marginRight: 5,
                    marginBottom: 5,
                    borderWidth: '0px'
                }}
                >
                    IR
                </button>

            </div>
            </button>
        </>
    );
}
export default CardItem;