import React from "react";

import "./SocialMedia.css";
import facebookLogo from "../../../assets/icons/facebook.png";
import instagramLogo from "../../../assets/icons/instagram.png";
import twitterLogo from "../../../assets/icons/twitter.png";
import youtubeLogo from "../../../assets/icons/youtube.png";


const SocialMedia = props => {

    return (
        <div className="SocialMedia"> 
            
            <a href="https://www.facebook.com/CatAngelsNC/"><img src={facebookLogo} alt="facebook icon" /></a>
            <a href="https://www.instagram.com/catangelsnc/?hl=en"><img src={instagramLogo} alt="instagram icon" /></a>
            <a href="https://twitter.com/catangelsnc?lang=en"><img src={twitterLogo} alt="twitter icon" /></a>
            <a href="https://www.youtube.com/channel/UCR3vaY3C-I31rRYK8CAhbqg"><img src={youtubeLogo} alt="youtube icon" /></a>
        </div>
    );
};

export default SocialMedia;