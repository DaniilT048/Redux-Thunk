import HeaderMenu from "./HeaderMenu.tsx";
import {Outlet} from "react-router";
import FooterText from "./FooterText.tsx";
// import {ThemeProvider} from "../contexts/ThemeContext.tsx";
import {ReactElement} from "react";


const Layout = (): ReactElement =>{

    return (
        <>
            <div className="layout-wrapper">
                <HeaderMenu/>
                <div className="content">
                    <Outlet/>
                </div>
                <FooterText/>
            </div>
        </>

    )


}

export default Layout;