import './App.css'
import routes from "./routes.jsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./components/Layout.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import NotFound from "./components/NotFound.tsx";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {RootState} from "./store/store.ts";



const router = createBrowserRouter ([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children:[
      ...routes,
      {
        path: "*",
        element: <NotFound/>,
      }
    ]
  }
],{
      basename: "/Redux-Thunk",
    }
    );

const App = () =>{
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(():void => {
    const root = document.getElementById("root");
    if (root) {
      root.classList.remove("light-theme", "dark-theme");
      root.classList.add(`${theme}-theme`);
    }
  }, [theme]);

  return <RouterProvider router={router} />;
};

export default App
