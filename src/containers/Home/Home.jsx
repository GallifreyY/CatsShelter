import React from "react";

import "./Home.css";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Section from "../../components/UI/Section/Section";
import Button from "../../components/UI/Button/Button";
import Img from "../../components/UI/Image/Img";
import catImg from "../../assets/imgs/web-cats/home_cat1.jpg";
import Card from "../../components/UI/Card/Card";

const Home = props => {
    
    return (
        <Aux>
            <Section sectionType="White" displayType="Flex" >
                {/* Don't have access to their YT account */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/gfA1KZ5V1Fw" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
                <div className="Home-quote">
                    <q>
                    As part of living in a civilized society, it is our obligation to look after those who are weak, sick, or powerless. Our responsibility includes our domestic animals, whom we took from the wild and made dependent on us.
                    </q>
                    <p>
                        - Margaret R. Slater, Author of 'Community Approaches to Feral Cats'.
                    </p>
                    <Button btnColor="Button-blue"> 
                        <a href="#Home-cards">TAKE ACTION</a>
                    </Button>
                </div>
            </Section>
            <Section sectionType="Blue" displayType="Flex">
            <div className="Home-text">
                <h1>About Us</h1>
                    <p>Cat Shelters is a cat rescue and adoption platform in Singpore. 
                        We are a student team from National University of Singapore and our mission is to help homeless, abandoned, and/or abused cats and kittens find safe, loving, permanent homes, 
                        and reduce the number of unwanted pets destroyed at kill shelters.</p>
                    <p>To accomplish our mission, Cat Shelters provides platform and online tools to help rescue homeless cats and kittens, 
                        search for appropriate adoptive homes, call for volunteers and donations. 
                        We also coorperate with Singapore local volunteer organizations for the care and rescue of kittens.</p>
            </div>
            <div className="Home-img">
                <Img src={catImg} imgType="Img-sizing" alt="Angel Cat" />
            </div>
            </Section>
            <div id="Home-cards">
                <Section sectionType="White" displayType="Flex">
                    <Card cardTitle="VOLUNTEER" linkTo="/volunteer">
                        Fill in the form and join us today!
                    </Card>
                    <Card cardTitle="ADOPT" linkTo="/adopt">
                    Browse and adopt a lovely cat!
                    </Card>
                    <Card cardTitle="DONATE" linkTo="/donate">
                    Every gift is meaningful. We appreciate your kindness.
                    </Card>
                </Section>
            </div>

        </Aux>
        
            

        
    );
};

export default Home;