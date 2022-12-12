import { useContext } from "react";
import { MainContext } from "../Context/MainContext"; 
import { LANGUAGES } from "./languaje";
import { app } from "../Firebase/firebaseApp";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import SocialLogin from "./SocialLogin";
import './Login.css';
import backgroundLogin from './statics/img/backgroundLogin.jpg'
import Button from 'react-bootstrap/Button';




export default function Login() {
        
    let { current_language } = useContext(MainContext);

    function placeHolderFunction ( event ) {
        event.preventDefault(); // evitar la propagacion del evento..
        const email = "joselus62@yahoo.com.ar";
        const password = "7410miremont";
        const auth = getAuth(app);
        const user = signInWithEmailAndPassword(auth, email, password)
        .then((credentials) => {
            // Si llegamos aca... es porque se logeo..
            const firebase_user = credentials.user;
            console.log(firebase_user);
        })
        .catch( (error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        } );

        console.log("placeholder");
    }

    return (
    <>
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                alignContent: 'center',
                backgroundImage: `url(${backgroundLogin})`,
                "background-repeat": 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                height: '945px'

                }}
            >
            
            <form onSubmit={ (event) =>  placeHolderFunction(event)} className="form">
            <p className="titulo">DigiLibros</p>
                    <div className="d-grid gap-2">
                    <label >{ LANGUAGES[current_language].REGISTER.INPUT_EMAIL }</label>
                    <input
                        type="text"
                        aria-label="Email field"
                        name="email"
                        onChange={() =>  placeHolderFunction()}/>
                    </div>
                    <div >
                    <label >{ LANGUAGES[current_language].REGISTER.INPUT_PASS }</label>
                    </div>
                    <div>
                    <input
                        type="password"
                        aria-label="Password field"
                        name="password"
                        onChange={() =>  placeHolderFunction()} />
                    </div>
                    <div>
                    <Button type="submit" variant="secondary" size="lg" >
                        { LANGUAGES[current_language].LOGIN.HEADING_LOGIN }
                    </Button>
                    </div>
                          
                
                <div className="socialLogin">
                    <SocialLogin></SocialLogin>
                </div>
            </form>
                    
        </div>

    </>

    );
    
}

