import { app } from "../Firebase/firebaseApp";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";


export default function SocialLogin (props) {

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider()

    function doLogin(provider) {
        const auth = getAuth(app);
        signInWithPopup(auth, provider)
        .then( (credentials) => {
            const firebase_user = credentials.user;
            console.log(firebase_user);
           
           
           
        })
        .catch( (error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        } );
    }

    return (
        <>
            <button onClick={ ()=> doLogin(googleProvider) }>
                
                <FontAwesomeIcon icon={ faGoogle } className="google"/>
            </button>
            <button onClick={ ()=> doLogin(facebookProvider) }>
                
                <FontAwesomeIcon icon={ faFacebook } className="facebook"/>
            </button>
        </>
    );
}
