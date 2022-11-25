import ImageBook from '../statics/img/el-ultimo-graduado-el-ultimo-graduado.jpg'


const CardItem = () => {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: 'column',
                    backgroundColor: "rgba(174, 189, 202, .5)",
                    width: '160px',
                    borderRadius: 10,
                    boxShadow: "5px 5px 5px #7895B2"
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
                        El utlimo Graduado
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
                        height="150px"
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
                        Precio: $2000
                    </p>
                </div>

            </div>
        </>
    );
}
export default CardItem;