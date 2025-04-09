import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/MenuPage/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/shared/Secret/secret";
import DashBoard from "../Layout/DashBoard";
import Cart from "../pages/dashboard/Cart/Cart";
import AllUsers from "../pages/dashboard/AllUsers/AllUsers";
import AddItems from "../pages/dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../pages/dashboard/manageItems/manageItems";
import UpdateItem from "../pages/dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/dashboard/Payment/Payment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/menu',
                element: <Menu></Menu>,
            },
            {
                path: '/order/:category',
                element: <Order></Order>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
            {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>,
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            // normal user routes
            {
                path: 'cart',
                element: <Cart></Cart>,
            },
            {
                path: 'payment',
                element: <Payment></Payment>,
            },

            // admin only routes
            {
                path: 'addItems',
                element: <AdminRoutes><AddItems></AddItems></AdminRoutes>,
            },
            {
                path: 'users',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>,
            },
            {
                path: 'manageItems',
                element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>,
            },
            {
                path: 'UpdateItem/:id',
                element: <AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
            },
        ]
    }
]);
