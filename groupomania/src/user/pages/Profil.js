import React from "react";
import Log from "../../admin/components/log";
//import logo from '../../assets/'

function Profil() {
    return (
        <div className="profil-page">
            <div className="log-container">
                <Log signin={false} signup={true} />
                <div class-name="img-container">
                <img src="../assets/icon.webp" alt="Logo groupomania" />
                </div>
            </div>
        </div>
    )
}

export default Profil;