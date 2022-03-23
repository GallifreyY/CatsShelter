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
                    <h1>Volunteer Recruitment</h1>
                        <p>We are a non-profit and all-volunteer run organization.</p>
                        <p>If you love cats and enjoy their company, but can't have you own cat due to the living situations or other constrains. The cats' shelter is the right place for you!</p>
                        <p>Your Responsibilities:</p>
                        <ul>
                            <li>Feed the cats</li>
                            <li>Clean the rooms</li>
                            <li>Scoop litter boxes</li>
                            <li>Play with the cats</li>
                        </ul>
                        <p>We hope you can:</p>
                        <ul>
                            <li>Be nice and responsible</li>
                            <li>Be patient</li>
                            <li>Respect animals</li>
                        </ul>
                        <p>And most importantly, LOVE the cats. Some cats might not be as adorable as others, we hope you can still be nice to them and stay patient.</p>
                        <p>Have a special talent such as photography, accounting, web design, marketing, or fundraising? We have lots of opportunities for people with different skills.</p>
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