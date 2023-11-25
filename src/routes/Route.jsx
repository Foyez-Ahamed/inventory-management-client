import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import CreateStore from "../pages/CreateStore/CreateStore";
import WatchDemo from "../pages/WatchDemo/WatchDemo";
import Register from "../pages/Register/Register";

const Route = createBrowserRouter([
    {
        path: '/',
        element : <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: 'createStore',
                element : <CreateStore></CreateStore>
            },

            {
                path: 'watchDemo',
                element : <WatchDemo></WatchDemo>
            },

            {
                path : 'register',
                element: <Register></Register>
            }
        ]
    }
])

export default Route;