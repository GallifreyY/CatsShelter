import React from "react";

import "./Logo.css";
import logoImg from "../../../assets/imgs/logo.jpg";

const Logo = props => {
    return (
        <div>

        <div className="Logo">
            <img src={logoImg} alt="logo"/>
        </div>  

        </div>
         
    );
};

export default Logo;