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
                <iframe 
                    title="Cat Angels video"
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/_eaps__lNxc" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
                <div className="Home-quote">
                    <q>
                        I also wanna help the public from schools up. I want young people to understand - they are going to be pet owners of the future - we want them to understand, being humane and kind person, it's the right thing to do.
                    </q>
                    <p>
                        - Deborah Fox, President and Founder of Cat Angels Pet Adoptions
                    </p>
                    <Button btnColor="Button-blue"> 
                        <a href="#Home-cards">HELP US SUPPORT OUR MISSION </a>
                    </Button>
                </div>
            </Section>
            <Section sectionType="Blue" displayType="Flex">
            <div className="Home-text">
                <h1>About Us</h1>
                    <p>Cat Angels Pet Adoptions is a cat and kitten rescue and adoption organization and no-kill shelter in Cary, North Carolina. We are a 501(c)(3) public charity and our mission is to help homeless, abandoned, and/or abused cats and kittens
                      find safe, loving, permanent homes, and reduce the number of unwanted pets destroyed at kill shelters.</p>
                    <p>To accomplish our mission, Cat Angels rescues homeless, abused or abandoned cats and kittens; provides veterinary care, including, but not limited to, spaying or neutering and vaccinating; provides foster care for all the animals in our
                      care; searches for appropriate adoptive homes and oversees the adoption of all animals in our care; educates the public on proper care of pets, why it is important to spay or neuter your pets, and to abide by vaccination and leash laws;
                      provides assistance and advice to those wanting to place their unwanted pets in new homes; supports local Trap Neuter Return (TNR) efforts to reduce feral cat populations including bringing kittens into the program; works with other rescue
                      groups to help in crisis situations affecting large numbers of animals such as hoarders, back yard breeders, animal fighting, natural disasters, etc.. While waiting for their forever homes, our cats and kittens live in a friendly, home-like
                      environment.</p>
                    <p>Adopt one cat and save two. When you adopt from Cat Angels Pet Adoptions, you open a spot so that we can take another cat or kitten from a kill shelter. You save the cat you adopt and guarantee that a second cat will have a chance at a
                      forever home in our no-kill shelter - for as long as it takes.</p>
                    <p>We have a Lifetime Return Policy for all of our cats and kittens. For whatever reason, we will gladly accept any of our cats and kittens back into our program.</p>
            </div>
            <div className="Home-img">
                <Img src={catImg} imgType="Img-sizing" alt="Angel Cat" />
            </div>
            </Section>
            <div id="Home-cards">
                <Section sectionType="White" displayType="Flex">
                    <Card cardTitle="VOLUNTEER" linkTo="/volunteer">
                        Do you love cats and kittens? Do you want to have a cat or kitten of your own to love but your living situation won't allow you to have one? Cat Angels Pet Adoptions needs people like you!
                    </Card>
                    <Card cardTitle="ADOPT" linkTo="/adopt">
                    To apply to become an adopter, fill out our online adoption application. Our adoption hours are: Thursday and Friday 3 - 6pm and Saturday 1 - 5pm. Other times by appointment.
                    </Card>
                    <Card cardTitle="DONATE" linkTo="/donate">
                    Cat Angels runs entirely on donations from supporters like you. Every gift is meaningful and keeps our cats healthy and our doors open. Please give today!
                    </Card>
                </Section>
            </div>

        </Aux>
        
            

        
    );
};

export default Home;