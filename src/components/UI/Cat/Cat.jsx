import React, {useState} from "react";

import "./Cat.css";
import Button from "../Button/Button";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Modal from "../Modal/Modal";

const Cat = props => {

    const [moreInfo, setMoreInfo] = useState(false);
    
    const buttonHandler = () => {
        setMoreInfo(true);
    }

    const cancelMoreInfo = () => {
        setMoreInfo(false);
    }

    const cat = (
        <div className="Cat">
        <div className="Cat-img">
            <img src={props.src} alt={props.alt} />
        </div>
        <div className="Cat-info">
            <ul className="Cat-info-list">
                <li>Name</li>
                <li>Sex</li>
                <li>Breed</li>
                <li>Color</li>
                <li>Coat</li>
                <li>Altered</li>
                <li>Age</li> 
            </ul>
            <ul className="Cat-info-list">
                <li>{props.name}</li>
                <li>{props.sex}</li>
                <li>{props.breed}</li>
                <li>{props.color}</li>
                <li>{props.coat}</li>
                <li>{props.altered}</li>
                <li>{props.age}</li> 
            </ul>
        </div>
        <div className="Cat-description">
            <Button clicked={buttonHandler} btnColor="Button-white">more informations</Button>
        </div>
    </div>
    );

    const catInfo = (
        <div className="Cat">
            <div className="Cat-description">
                {props.description}
            </div>
        </div>
    );

    return (
        <Aux>
            <Modal show={moreInfo} modalClosed={cancelMoreInfo}>
                {catInfo}
            </Modal>
            {cat}
        </Aux>
        
    );
};

export default Cat;