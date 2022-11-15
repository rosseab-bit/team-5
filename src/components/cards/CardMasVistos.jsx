import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import UltimoGraduado from '../statics/img/el-ultimo-graduado-el-ultimo-graduado.jpg';
const CardMasVistos = () => {
    return (
        <>
            <div
                style={{
                    display: "grid",
                    "grid-template-columns": "auto auto",
                    borderRadius: 2
                }}
            >
                <div
                    style={{
                        backgroundColor: "#E8DFCA",
                    }}
                >
                    <img src={UltimoGraduado} height="220px" width="auto" />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#E8DFCA",
                        height: "220px",
                        width: "200px"


                    }}
                >
                    <p
                        style={{
                            fontSize: "15px",
                            textAlign: "center"
                        }}
                    >
                        El ultimo graduado
                    </p>
                    <p
                        style={{
                            fontSize: "12px",
                            marginLeft: "10px",
                            marginRight: "10px",
                            textAlign: "center"
                        }}
                    >
                        La amenaza de la graduación cobra un peso significativo al tiempo que la innovadora trilogía de Naomi Novik, superventas del New York Times, continúa con la asombrosa secuela de "Una educación mortal". «El conocimiento otorga protección.» Ese es el lema oficial de la Escolomancia.
                    </p>

                </div>
            </div>
        </>
    );
}
export default CardMasVistos;