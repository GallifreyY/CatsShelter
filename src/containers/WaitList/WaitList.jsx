import React from "react";

import "./WaitList.css";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Section from "../../components/UI/Section/Section";
import Img from "../../components/UI/Image/Img";
import WaitListCatImg from "../../assets/imgs/web-cats/waitList_cat1.jpg";

const WaitList = props => {
    return (
        <Aux>
            <Section sectionType="Blue" displayType="Flex">
                <div className="WaitList-text">
                    <h1>Cat Angels Wait List</h1>
                    <h3>We are full and not accepting cats into our program at this time.</h3>
                    <p>Please go to <a href="https://www.petfinder.com/" >petfinder.com</a> and in The area where it says "Search for Rescues" enter Your zip code.</p>
                    <p>A list of many rescue groups that are close to that zip code will be displayed. Please contact all of them to help with the placement of your cat or kitten.</p>
                </div>
                <div className="WaitList-img">
                    <Img src={WaitListCatImg} alt="cat image" imgType="Img-sizing" />
                </div>

            </Section>
        </Aux>
    );
};

export default WaitList;