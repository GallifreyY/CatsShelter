import React from "react";

import Logo from "../Logo/Logo";
import "./NavigationBar.css";
import NavigationItems from "./NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const NavigationBar = props => {
    return (
        <header className="NavigationBar">
            <Logo />
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <nav className="DesktopOnly">
                <NavigationItems />
            </nav>
        </header>
    );
};

export default NavigationBar;