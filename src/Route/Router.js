
import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import About from "../Page/About/About";
import Home from "../Page/Home";
import Resorce from "../Page/Resorce/Resorce";


export const router= createBrowserRouter([

    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
              path: "/home",
              element: <Home/>,
            },
            {
                path: "/",
                element: <Home/>,
              },
            {
                path: "/resorce",
                element: <Resorce/>,
              },
           
           
              {
                path:"about",
                element:<About></About>
              },
           
              

        ]
    }
])