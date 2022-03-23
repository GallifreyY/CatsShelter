import React from "react";

import "./Adopt.css";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Section from "../../components/UI/Section/Section";
import Button from "../../components/UI/Button/Button"
import Img from "../../components/UI/Image/Img";
import imgCat1 from "../../assets/imgs/web-cats/vol_cat1.jpg";
import imgCat2 from "../../assets/imgs/web-cats/vol_cat2.jpg";
import imgCat3 from "../../assets/imgs/web-cats/vol_cat3.jpg";

const Adopt = props => {
    return (
        <Aux>
            <Section sectionType="Blue" displayType="Flex">
                <div className="Adopt-text">
                    <h1>Adopt from Cat Angels</h1>
                    <p>You can meet our kitties at our adoption facility, which is located at <a href="https://www.google.com/maps/place/Cat+Angels+Pet+Adoptions+Inc/@35.8014009,-78.7868544,17z/data=!3m1!4b1!4m5!3m4!1s0x89acf2be379cba99:0x25f02e6fce1d6be5!8m2!3d35.8013966!4d-78.7846657">959 N. Harrison Ave, Cary NC 27513.</a> The facility is in the Northwoods Shopping Center at NW Maynard Rd and N. Harrison Ave , next to Walmart Neighborhood Market.</p>
                    <p>Our adoption hours are: Thursday and Friday 3 - 6pm and Saturday 1 - 5pm. Other times by appointment. </p>
                    <p>Our adoption fee is $115* and includes all of the following:</p>
                    <p className="Adopt-text_small">* Adoption fee may be higher for purebred cat or kittens.</p>
                    <ul>
                        <li>Spay or neuter</li>
                        <li>HomeAgain microchip</li>
                        <li>Rabies vaccine</li>
                        <li>Feline FVRCP</li>
                        <li>Feline Leukemia vaccines</li>
                        <li>Feline Bordatella vaccines</li>
                        <li>FeLV/FIV test</li>
                        <li>Deworming</li>
                        <li>Flea treatments</li>
                        <li>Ringworm culture</li>
                        <li>Physical exams</li>
                        <li>Any additional medical treatment needed.</li>
                    </ul>
                    
                    <p>To be eligible to become an adopter, you must meet the following criteria:</p>
                    <ul>
                      <li>Be a resident of the United States</li>
                      <li>Be 21 years of age or older</li>
                      <li>If you have pets, they must be spayed/neutered and up-to-date on their vaccines.</li>
                      <li>Be able and willing to spend the time and money necessary to provide training, medical treatment and proper care for a pet for the entire life of that animal.</li>
                      <li>You must live within 50 miles of Cary, NC.</li>
                    </ul>
                    <p>To apply to become an adopter, fill out our online adoption application. A Cat Angels adoption counselor will contact you with 1-2 days of your submission. Please be patient as we are all volunteers. If you do not hear back after 2 days, please email us as a technical problem may have prevented delivery of your application. </p>
                    {/* <a href="https://secure.lglforms.com/form_engine/s/rwQeucie5SeXQh7qVoXVPQ"> */}
                        <Button disabled btnColor="Button-white">adoption application</Button>
                    {/* </a> */}
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