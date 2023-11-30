import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import CreateStore from "../pages/CreateStore/CreateStore";
import WatchDemo from "../pages/WatchDemo/WatchDemo";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import ProductManagement from "../pages/Dashboard/ProductManagement/ProductManagement";
import Offers from "../pages/Dashboard/Offers";
import Payment from "../pages/Dashboard/Payment";
import SalesCollection from "../pages/Dashboard/SalesCollection";
import SalesSummary from "../pages/Dashboard/SalesSummary";
import ShopManager from "../pages/Dashboard/ShopManager/ShopManager";
import SystemAdmin from "../pages/Dashboard/Admin/SystemAdmin";
import ManageShop from "../pages/Dashboard/Admin/ManageShop";
import AdminSalesSummary from "../pages/Dashboard/Admin/AdminSalesSummary";
import AddProduct from "../pages/Dashboard/ProductManagement/AddProduct";
import Subscription from "../pages/Dashboard/ProductManagement/Subscription";
import UpdateProduct from "../pages/Dashboard/ProductManagement/UpdateProduct";
import Checkout from "../pages/Dashboard/ProductManagement/Checkout";
import AuthorizationErrorPage from "../pages/ErrorPage/AuthorizationErrorPage";
import AmPrivateRoute from "./AmPrivateRoute";
import AdminPrivateRoute from "./AdminPrivateRoute";
import ManagerPrivateRoute from "./ManagerPrivateRoute";

const Route = createBrowserRouter([
    {
        path: '/',
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: 'createStore',
                element : <PrivateRoute><CreateStore></CreateStore></PrivateRoute>
            },

            {
                path: 'watchDemo',
                element : <WatchDemo></WatchDemo>
            },

            {
                path : 'register',
                element: <Register></Register>
            },

            {
                path : 'login',
                element : <Login></Login>
            },

            {
                path : 'authorizationError',
                element : <AuthorizationErrorPage></AuthorizationErrorPage>
            }

        ]
    },

    {
        path:'dashboard',
        element : <AmPrivateRoute><DashboardLayout></DashboardLayout></AmPrivateRoute>,
        children:[

            {
                path: 'systemAdmin',
                element : <AdminPrivateRoute><SystemAdmin></SystemAdmin></AdminPrivateRoute>
            },

            {
                path : 'manageShop',
                element : <AdminPrivateRoute><ManageShop></ManageShop></AdminPrivateRoute>
            },

            {
                path: 'adminSalesSummary',
                element : <AdminPrivateRoute><AdminSalesSummary></AdminSalesSummary></AdminPrivateRoute>
            },

            {
                path :'shopManager',
                element : <ManagerPrivateRoute><ShopManager></ShopManager></ManagerPrivateRoute>
            },
            {
                path: 'productManagement',
                element : <ManagerPrivateRoute><ProductManagement></ProductManagement></ManagerPrivateRoute>
            },

            {
                path :'addProduct',
                element: <ManagerPrivateRoute><AddProduct></AddProduct></ManagerPrivateRoute>
            },

            {
                path : 'updateProduct/:id',
                element : <ManagerPrivateRoute><UpdateProduct></UpdateProduct></ManagerPrivateRoute>,
                loader : ({params}) => fetch(`http://localhost:5000/api/v1/getSingleProduct/${params.id}`)
            },


            {
                path : 'checkout',
                element : <ManagerPrivateRoute><Checkout></Checkout></ManagerPrivateRoute>
                
            },

            {
                path:'offers',
                element : <ManagerPrivateRoute><Offers></Offers></ManagerPrivateRoute>
            },

            {
                path : 'payment',
                element : <ManagerPrivateRoute><Payment></Payment></ManagerPrivateRoute>
            },

            {
                path : 'salesCollection',
                element : <ManagerPrivateRoute><SalesCollection></SalesCollection></ManagerPrivateRoute>
            },

            {
                path : 'salesSummary',
                element : <ManagerPrivateRoute><SalesSummary></SalesSummary></ManagerPrivateRoute>
            },

            {
                path : 'subscription',
                element : <ManagerPrivateRoute><Subscription></Subscription></ManagerPrivateRoute>
            }
        ]
    }
])

export default Route;