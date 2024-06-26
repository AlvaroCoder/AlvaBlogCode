import { createBrowserRouter } from "react-router-dom";
import PostDetails from "../views/PostDetails";
import LayoutBlog from "../views/LayoutBlog";
import ControllerBlog from "../controllers/ControllerBlog";

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
    }

]);