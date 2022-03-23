import React from "react";

import "./Volunteer.css";
import Section from "../../components/UI/Section/Section";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Img from "../../components/UI/Image/Img";
import AdoptImg from "../../assets/imgs/web-cats/adopt_cat1.jpg";
import Button from "../../components/UI/Button/Button";

const Volunteer = props => {
   
    return (
        <Aux>
            <Section sectionType="Blue" displayType="Flex">
                <div className="Volunteer-text">
                    <h1>Volunteer at Cat Angels</h1>
                        <p>Cat Angels is an all-volunteer run organization, which means we need lots of help to keep our cats happy and healthy.</p>
                        <p>Do you love cats and kittens? Do you want to have a cat or kitten of your own to love but your living situation won't allow you to have one? Cat Angels Pet Adoptions needs people like you! </p>
                        <p>We need help scooping litter boxes, filling bowls with food and water, cleaning the community cat rooms and assisting with other duties around the facility, but the most important thing of all is to love all of the cats as if they were your own. We have two shifts per day. Morning shifts start at about 8am and evening shifts start between 4-6pm. Shifts are about 2-3 hours.</p>
                        <p>We also need volunteers to help with our adoption events and at our Thrift Store.</p>
                        <p>If mobility issues prohibit you from helping at our adoption facility but you would still like to give back, volunteering at the Thrift Store is a wonderful way to help!</p>
                        <p>Have a special talent such as photography, accounting, web design, marketing, or fundraising? We would LOVE your help. We have lots of opportunities for people with different skills.</p>
                        <p>Fill out an application and our Volunteer Coordinator will be in touch soon to discuss. If you would like to volunteer with us, please complete the </p>
                    <a href="https://secure.lglforms.com/form_engine/s/rwQeucie5SeXQh7qVoXVPQ">
                        <Button btnColor="Button-white">VOLUNTEER APPLICATION</Button>
                    </a>
                </div>
                <div className="Volunteer-img">
                    <Img src={AdoptImg} alt="cat image" imgType="Img-sizing" />
                </div>
            </Section>
        </Aux>
    );
};

export default Volunteer;