import React from "react";

import "./Copyright.css";

const Copyright = props => {
    const year = new Date().getFullYear();
    
    return (
        <div className="Copyright">
            Copyright @ {year} Makki The Cat
        </div>
    );
};

export default Copyright;