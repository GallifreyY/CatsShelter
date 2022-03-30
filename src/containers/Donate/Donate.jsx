import React from "react";

import "./Donate.css";
import Button from "../../components/UI/Button/Button";
import Img from "../../components/UI/Image/Img";
import amazonIcon from "../../assets/icons/amazon.png";
import paypalIcon from "../../assets/icons/paypal.png";
import agreementIcon from "../../assets/icons/agreement.png";

const Donate = props => {
    return (
        <div className="Donate-container">
            <div className="Donate-card">
                <div className="Donate-card-icon">
                    <Img src={amazonIcon} alt="amazon icon" />
                </div>
                <div className="Donate-card-text">
                    <p>We have created an Amazon Wish List to make donating supplies to us easier.</p>
                    <p>You can purchase items from Amazon and ship straight to the shelter. Thanks for your support.</p>
                </div>
                <div className="Donate-card-btn">
                    <a href="https://www.amazon.com/hz/wishlist/intro">
                        <Button btnColor="Button-blue">amazon wishlist</Button> 
                    </a>
                </div>
            </div>
            <div className="Donate-card">
                <div className="Donate-card-icon">
                    <Img src={paypalIcon} alt="amazon icon" />
                </div>
                <div className="Donate-card-text">
                    <p>Not supported yet. Coming soon...</p>
                </div>
                <div className="Donate-card-btn">
                    <Button disabled btnColor="Button-blue">paypal donation</Button>
                </div>
            </div>
            <div className="Donate-card">
                <div className="Donate-card-icon">
                    <Img src={agreementIcon} alt="amazon icon" />
                </div>
                <div className="Donate-card-text">
                    <p>Mail your gift - gifts by check may be mailed to the address of our Shelter.</p>
                    <p>Email us for more information.</p>
                </div>
                <div className="Donate-card-btn">
                    <Button disabled btnColor="Button-blue">MAIL GIFTS</Button>
                </div>
            </div>

        </div>
    );
};

export default Donate;