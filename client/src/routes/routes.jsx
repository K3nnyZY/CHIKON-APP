import routerAdmin from "./routes.admin";
import routerClient from "./routes.client";
import { Error404 } from "../pages";
import { BasicLayout } from "../layouts";

const routes = [
    ...routerAdmin, 
    ...routerClient, 
    {
    layout: BasicLayout,
    component: Error404,
    path: "*" //catch all
}];   

export default routes;