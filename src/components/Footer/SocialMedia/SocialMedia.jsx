import React from "react";

import "./SocialMedia.css";
import facebookLogo from "../../../assets/icons/facebook.png";
import instagramLogo from "../../../assets/icons/instagram.png";
import twitterLogo from "../../../assets/icons/twitter.png";
import youtubeLogo from "../../../assets/icons/youtube.png";


const SocialMedia = props => {

    return (
        <div className="SocialMedia"> 
            
            <a href="https://www.facebook.com/"><img src={facebookLogo} alt="facebook icon" /></a>
            <a href="https://www.instagram.com/"><img src={instagramLogo} alt="instagram icon" /></a>
            <a href="https://twitter.com/"><img src={twitterLogo} alt="twitter icon" /></a>
            <a href="https://www.youtube.com/"><img src={youtubeLogo} alt="youtube icon" /></a>
        </div>
    );
};

export default SocialMedia;