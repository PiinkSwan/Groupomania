import React, { useState } from "react";
import SignUpForm from "./Signup";
import SignInForm from "./Login";

const Log = (props) => {
    const [signUpModal, setSignUpModal] = useState(props.signup);
    const [signInModal, setSignInModal] = useState(props.signin);
    const handleModals = (e) => {
        if (e.target.id === "register") {
            setSignInModal(false);
            setSignUpModal(true);
        } else if (e.target.id === "login") {
            setSignUpModal(false);
            setSignInModal(true);
        }
    }
    return (
        <div className="connct-form">
            <ul>
                <li onClick={handleModals}
                    id="register"
                    className={signUpModal ? "active-btn" : null}
                >
                    S'inscrire
                </li>
                <li onClick={handleModals}
                    id="login"
                    className={signInModal ? "active-btn" : null}
                >
                    Se connecter
                </li>
            </ul>
            {signUpModal && <SignUpForm />}
            {signInModal && <SignInForm />}
        </div>
    )
}

export default Log;