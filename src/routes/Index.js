import { createBrowserRouter } from "react-router-dom";
import PostDetails from "../views/PostDetails";
import ControllerBlog from "../controllers/ControllerBlog";

import { LayoutBlog, LayoutPortfolio } from "../views/Layouts"

export const routerBrowser = createBrowserRouter([
    {
        path : "/",
        Component : LayoutBlog,
        children : [
            {
                index : true,
                Component :  ControllerBlog,
            },
            {
                path : "post/:id",
                Component : PostDetails
            }
        ]
    },
    {
        path : "/portfolio",
        Component :  LayoutPortfolio
    },

]);