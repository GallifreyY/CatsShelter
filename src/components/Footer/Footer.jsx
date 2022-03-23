import React from "react";

import Address from "./Address/Address";
import Hours from "./Hours/Hours";
import SocialMedia from "./SocialMedia/SocialMedia";
import "./Footer.css";

const Footer = props => {
    return (
        <div className="Footer" >
            <div className="Footer-components">
                <Address />
                <SocialMedia />
                <Hours />
            </div>  
        </div>
        
    );
};

export default Footer;