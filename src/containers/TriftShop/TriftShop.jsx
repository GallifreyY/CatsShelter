import React from "react";

import "./TriftShop.css";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Section from "../../components/UI/Section/Section";
import Img from "../../components/UI/Image/Img";
import TriftShopCatImg from "../../assets/imgs/web-cats/store_cat1.jpg"

const TriftShop = props => {
    return (
        <Aux>
            <Section sectionType="Blue" displayType="Flex">
                <div className="Shop-text">
                    <h1>Cat Angels Thrift Store</h1>
                    <p>We pride ourselves on providing a well-organized, and beautifully arranged boutique-like store. You can often find brand new items - still with the tags on them - at yard-sale prices!! 100% of the proceeds go to help our Cat Angels cats and kittens!</p>
                    <p>The Thrift Store has a Facebook page! Our terrific volunteers put photos of our items for sale on our <a href="https://www.facebook.com/catangelsthriftstore/">Facebook</a> page. Please check it out and LIKE US! </p>
                    <p>After your neighborhood yard sales, please consider donating the remaining unsold items to our Thrift Store. We need donations all the time (except for furniture and old computers) - and we give our donors a tax donation receipt. </p>
                    <p>What? You say you haven't been there yet? Come on down! It's open 6 days a week from 10 am to 5 pm! And, yes - we take credit cards!</p>
                    <p>Cat Angels Thrift Store is located at 2436 SW Cary Parkway in the <a href="https://www.google.com/maps/place/Cat+Angels+Thrift+Store/@35.7637544,-78.8204437,15z/data=!4m2!3m1!1s0x0:0x59a34b6bd1ee225b?sa=X&ved=2ahUKEwjxotDlsoTmAhVCiOAKHaxsB5oQ_BIwE3oECAwQCA">Parkway Pointe Shopping Center</a> in Cary. </p>
                </div>
                <div className="Shop-img">
                    <Img src={TriftShopCatImg} alt="cat image" imgType="Img-sizing" />
                </div>
            </Section>
        </Aux>
    );
};

export default TriftShop;