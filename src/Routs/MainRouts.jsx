import { createBrowserRouter } from "react-router-dom";
import HomeB from '../components/HomeB';

import About from "../components/About";
import Contact from '../components/Contact';
import Menu from '../components/Menu';
import Layouts from "../Layout/Layouts";


export const router = createBrowserRouter([
    {
        path: "/",
        element:<Layouts></Layouts>,
        children:[
          {
              path:"/Home",
              element:<HomeB></HomeB>
          },
          {
            path:"/About",
            element:<About></About>
        },
          {
              path:"/Contact",
              element:<Contact></Contact>
          },
          {
              path:"/Menu",
              element:<Menu></Menu>
          }
        ]
      },
]

)
    