import React from "react";

import "./Img.css";

const Img = props => {
    return (
        <img className={["Img", [props.imgType]].join(" ")} src={props.src} alt={props.alt} />
    );
};

export default Img;