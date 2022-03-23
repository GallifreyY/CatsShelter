import React from "react";

import "./Section.css";

const Section = props => {
    return(
        <div className={["Section", [props.sectionType], [props.displayType]].join(" ")}>
            {props.children}
        </div>
    );
};

export default Section;