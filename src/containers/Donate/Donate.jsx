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
                    <a href="https://www.amazon.com/gp/registry/wishlist/AA1MMN7XY0J5?ref_=cm_sw_em_r_z_g__wb&pldnSite=1">
                        <Button btnColor="Button-blue">amazon wishlist</Button> 
                    </a>
                </div>
            </div>
            <div className="Donate-card">
                <div className="Donate-card-icon">
                    <Img src={paypalIcon} alt="amazon icon" />
                </div>
                <div className="Donate-card-text">
                    <p>Not Suppoorted.</p>
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
                    <p>Consider a gift of stock, a rollover IRA, or set up a bequest for Cats Shelter! Email us for more information.</p>
                    <p>Mail your gift - gifts by check may be mailed to the address of our Shelter.</p>
                    <p>Not Supported.</p>
                </div>
                <div className="Donate-card-btn">
                    <Button disabled btnColor="Button-blue">cats shelter</Button>
                </div>
            </div>

        </div>
    );
};

export default Donate;