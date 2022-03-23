import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

const Card = props => {
    return (
        <div className="Card"> 
          <Link to={props.linkTo}>
            <div className="Card-title">
              {props.cardTitle}
            </div>
          </Link>
        <div className="Card-text">
          <p>{props.children}</p>
        </div>
      </div>
    );
};

export default Card;