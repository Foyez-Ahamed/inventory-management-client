import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const Route = createBrowserRouter([
    {
        path: '/',
        element : <MainLayout></MainLayout>
    }
])

export default Route;