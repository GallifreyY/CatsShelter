import React from "react";

import "./Adopt.css";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Section from "../../components/UI/Section/Section";
import Button from "../../components/UI/Button/Button"
import Img from "../../components/UI/Image/Img";
import imgCat1 from "../../assets/imgs/web-cats/vol_cat1.jpg";
import imgCat2 from "../../assets/imgs/web-cats/vol_cat2.jpeg";
import imgCat3 from "../../assets/imgs/web-cats/vol_cat3.jpg";
import {Link } from "react-router-dom";

const Adopt = props => {
    return (
        <Aux>
            <Section sectionType="Blue" displayType="Flex">
                <div className="Adopt-text">
                    <h1>Adopt from Cats Shelter</h1>
                    <p>You can meet our kitties at our adoption facility,
                        which is locate near the National University of Singapore.</p>
                    <p>Our adoption hours are: Monday and Friday 3 - 9pm and Saturday 3 - 5pm. Other times by appointment. </p>
                    <p>Our adoption fee is $150* and includes all of the following:</p>
                    <p className="Adopt-text_small">* Adoption fee may be higher for purebred cat or kittens.</p>
                    <ul>
                        <li>Spay or neuter</li>
                        <li>HomeAgain microchip</li>
                        <li>Necessary vaccinations</li>
                        <li>FeLV/FIV test</li>
                        <li>Deworming</li>
                        <li>Flea treatments</li>
                        <li>Any additional medical treatment needed.</li>
                    </ul>
                    
                    <p>To be eligible to become an adopter, you must meet the following criteria:</p>
                    <ul>
                      <li>Be 21 years of age or older</li>
                      <li>If you have pets, they must be spayed/neutered and up-to-date on their vaccines.</li>
                      <li>Be able and willing to spend the time and money necessary to provide training, medical treatment and proper care for a pet for the entire life of that animal.</li>
                      <li>Students are not allowed. You must have your own living place.</li>
                    </ul>
                    <p>To apply to become an adopter, fill out our online adoption application. 
                        We will contact you with 1-2 days of your submission. 
                        Please be patient as we are all volunteers. 
                        If you do not hear back after 2 days, please email us as a technical problem may have prevented delivery of your application. </p>
                    <Link to ='/a_application' >
                        <Button btnColor="Button-white">adoption application</Button>
                    </Link>
                </div>
                <div className="Adopt-img">
                    <Img src={imgCat1} imgType="Img-small-only" alt="image of a cat" />
                    <Img src={imgCat2} imgType="Img-small-only" alt="image of a cat" />
                    <Img src={imgCat3} imgType="Img-small-only" alt="image of a cat" />
                </div>
            </Section>
        </Aux>
    );
};

export default Adopt;