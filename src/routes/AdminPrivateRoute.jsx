import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminPrivateRoute = ({children}) => {

    const {user, loading} = useAuth();

    const [isAdmin, isAdminLoading] = useAdmin();


   if(loading || isAdminLoading ) {

        return <div className="flex justify-center items-center mt-16"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if(user && !isAdmin ){

        return <Navigate to='/authorizationError'></Navigate>

    } else if(user && isAdmin ){
        return children;
    }

    return <Navigate to='/'></Navigate>
};

export default AdminPrivateRoute;