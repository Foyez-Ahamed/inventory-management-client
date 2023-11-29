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
            }
        ]
    },

    {
        path:'dashboard',
        element : <DashboardLayout></DashboardLayout>,
        children:[

            {
                path: 'systemAdmin',
                element : <SystemAdmin></SystemAdmin>
            },

            {
                path : 'manageShop',
                element : <ManageShop></ManageShop>
            },

            {
                path: 'adminSalesSummary',
                element : <AdminSalesSummary></AdminSalesSummary>
            },

            {
                path :'shopManager',
                element : <ShopManager></ShopManager>
            },
            {
                path: 'productManagement',
                element :<ProductManagement></ProductManagement>
            },

            {
                path :'addProduct',
                element: <AddProduct></AddProduct>
            },

            {
                path : 'updateProduct/:id',
                element : <UpdateProduct></UpdateProduct>,
                loader : ({params}) => fetch(`http://localhost:5000/api/v1/getSingleProduct/${params.id}`)
            },


            {
                path : 'checkout',
                element : <Checkout></Checkout>
                
            },

            {
                path:'offers',
                element : <Offers></Offers>
            },

            {
                path : 'payment',
                element : <Payment></Payment>
            },

            {
                path : 'salesCollection',
                element : <SalesCollection></SalesCollection>
            },

            {
                path : 'salesSummary',
                element : <SalesSummary></SalesSummary>
            },

            {
                path : 'subscription',
                element : <Subscription></Subscription>
            }
        ]
    }
])

export default Route;