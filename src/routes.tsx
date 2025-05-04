import Home from "./components/Home.tsx";
import Contact from "./components/Contact.tsx";
import {JSX} from "react";
import ToDoPage from "./components/ToDoPage.tsx";


interface RoutesType {
    path: string;
    element: JSX.Element;
    label: string;
}

const routes: RoutesType[] = [
    {
        path: "/",
        element: <Home/>,
        label: "Home",
    },
    {
        path: "/todo",
        element: <ToDoPage/>,
        label: "ToDo Page",
    },
    {
        path: "/contact",
        element: <Contact/>,
        label: "Contact",
    },
];

export default routes;