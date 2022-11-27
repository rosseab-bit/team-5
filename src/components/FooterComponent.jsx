import { RiHome2Line } from 'react-icons/ri'
import { FaAngleRight } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaAt } from 'react-icons/fa'
import { IoLogoFacebook } from 'react-icons/io5'
import FooterImage from './statics/img/bannerFooter.jpg'


const FooterComponent = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <div
                style={{
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    backgroundColor: '#7895B2',
                    color: 'black',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}
            >
                <div
                style={{
                    marginTop: 5
                }}
                >
                    <p
                    style={{
                        marginTop: 20
                    }}
                    >Sobre nosotros</p>
                    <ul
                        style={{
                            listStyle: 'none',
                        }}
                    >
                        <li><FaAngleRight /> Grupo 5</li>
                        <li><FaAngleRight /> Curso codo a codo 2022</li>
                        <li><FaAngleRight /> React JS</li>
                        <li><FaAngleRight /> App de libros</li>
                    </ul>
                </div>
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    marginTop: 5
                }}
                >
                    
                    <img src={FooterImage}
                        width='150px'
                        height='auto'
                        border='2'
                        style={{
                            'object-fit': 'cover',
                            'border-radius': '50%',
                            'height': '150px',
                            marginTop: 20
                        }}
                    />
                    <p
                    style={{
                        marginTop: 20
                    }}
                    >
                        {`Copyright © Upbeat Code ${year}`}
                    </p>
                </div>
                <div
                style={{
                    margionTop: 5
                }}
                >
                    <p
                    style={{
                        marginTop: 20
                    }}
                    >Nos puedes encontrar en</p>
                    <ul
                        style={{
                            listStyle: 'none'
                        }}
                    >
                        <li>
                            <FaInstagram /> Instagram
                        </li>
                        <li>
                            <FaTelegramPlane /> Telegram
                        </li>
                        <li>
                            <FaAt /> gigilibros@mail.com
                        </li>
                        <li>
                            <IoLogoFacebook /> Facebook
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default FooterComponent;