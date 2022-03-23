import React from "react";
import { NavLink } from "react-router-dom";

import "./NavigationItem.css";

const NavitagionItem = props => {
    let attachedClasses = ["NavigationItem"];
    if (props.cta) {
        attachedClasses = ["NavigationItem", "NavigationItem-cta"];
    }
    return (
        <li className={attachedClasses.join(' ')}>
            <NavLink 
                to={props.link}
                exact={props.exact}
                className={props.active ? "active" : null}>{props.children}</NavLink>
        </li>
    );
};

export default NavitagionItem;