import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Order from "../Pages/Order";
import PrivateRouter from "../privatRoute/PrivateRouter";
import Login from "../log-reg/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/order",
                element: <PrivateRouter><Order/></PrivateRouter>
            },
            {
                path: "/login",
                element: <Login/>
            }
        ]
    }
])

export default router;