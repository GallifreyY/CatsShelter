import React, {useState} from "react";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import NavigationBar from "./NavigationBar/NavigationBar";
import SideDrawer from "./SideDrawer/SideDrawer";

const Header = props => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    }

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }

    return (
        <Aux>
            <NavigationBar drawerToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer
                open={showSideDrawer}
                closed={sideDrawerClosedHandler} />
        </Aux>
    );
};

export default Header;