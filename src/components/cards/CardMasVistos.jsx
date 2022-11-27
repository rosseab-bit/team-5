import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import UltimoGraduado from '../statics/img/el-ultimo-graduado-el-ultimo-graduado.jpg';
const CardMasVistos = ({dataBooks}) => {
    const [onHover, setOnHover] = React.useState(false);
    const handleMouseEnter = () =>{
        setOnHover(true);
    }
    const handleMouseLeave = ()=>{
        setOnHover(false);
    }
    return (
        <>
        <button
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        style={{
            "all": "unset",
            "cursor": "pointer",
            marginLeft: 10
        }}
        >
            <div
                style={{
                    display: "grid",
                    "grid-template-columns": "auto auto",
                    boxShadow: onHover ? "5px 5px 5px #7895B2" : "5px 5px 5px #F5EFE6",
                    borderRadius: "10px 10px 10px 10px"
                }}
            >
                <div
                    style={{
                        backgroundColor: "#E8DFCA",
                        borderRadius: "10px 0px 0px 10px"
                    }}
                >
                    <img 
                    src={dataBooks.bannerBook} 
                    height="220px" 
                    width="auto" 
                    style={{
                        borderRadius: "10px 0px 0px 10px"
                    }}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#E8DFCA",
                        height: "220px",
                        width: "200px",
                        borderLeftStyle: "solid",
                        borderRadius: "0px 10px 10px 0px"


                    }}
                >
                    <p
                        style={{
                            fontSize: "15px",
                            textAlign: "center"
                        }}
                    >
                        {dataBooks.title}
                    </p>
                    <p
                        style={{
                            fontSize: "12px",
                            marginLeft: "10px",
                            marginRight: "10px",
                            textAlign: "center"
                        }}
                    >
                        {dataBooks.description}
                    </p>

                </div>
            </div>
            </button>
        </>
    );
}
export default CardMasVistos;