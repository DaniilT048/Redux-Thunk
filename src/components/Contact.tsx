import {NavigateFunction, useNavigate} from "react-router";
import {ReactElement} from "react";

const Contact = ():ReactElement => {
    document.title = "Contact";
    const navigate:NavigateFunction = useNavigate();

    const handleClick = ():void => {
        navigate("/");
    }
    return(
        <>
            <h1>
                Contact Page
            </h1>
            <button onClick={handleClick}>Go Home</button>
        </>


    )

}

export default Contact