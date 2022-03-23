import React from "react";

import "./NavigationItems.css"
import NavigationItem from "./NavitagionItem/NavitagionItem";


const NavitagionItems = props => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/" exact>HOME</NavigationItem>
            <NavigationItem link="/volunteer">VOLUNTEER</NavigationItem>
            <NavigationItem link="/adopt">ADOPT</NavigationItem>
            <NavigationItem link="/animals">ANIMALS</NavigationItem>
            <NavigationItem link="/waitList">WAIT LIST</NavigationItem>
            <NavigationItem link="/shop">THRIFT SHOP</NavigationItem>
            <NavigationItem cta link="/donate">DONATE</NavigationItem>
        </ul>
    );
};

export default NavitagionItems;