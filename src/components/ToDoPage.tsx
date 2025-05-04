import {ReactElement} from "react";
import ToDoList from "./ToDoList.tsx";

const ToDoPage = (): ReactElement => {
    document.title = "ToDoList";
    return <>
        <ToDoList/>
    </>

}

export default ToDoPage