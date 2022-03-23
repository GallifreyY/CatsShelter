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
                    <p>You can purchase items from Amazon and ship straight to the shelter. Wish list items include cat food, medication, gloves, trash bags, paper towels, and other items we need to keep the shelter activities running smoothly.</p>
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
                    <p>Make a one-time gift or set up recurring donations securely online. Make your gift by credit card, debit card, or e-checks through PayPal. You do not have to have to log on to PayPal or have a PayPal account to use this service.</p>
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
                    <p>Consider a gift of stock, a rollover IRA, or set up a bequest for Can Angels! Email us for more information.</p>
                    <p>Mail your gift - gifts by check may be mailed to the address of our Shelter.</p>
                    <p>2020 Cat Angels Calendars are here! Order Yours:</p>
                </div>
                <div className="Donate-card-btn">
                    <Button disabled btnColor="Button-blue">cat angels calendar</Button>
                </div>
            </div>

        </div>
    );
};

export default Donate;