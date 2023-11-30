import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import useManager from "../hooks/useManager";

const AmPrivateRoute = ({children}) => {

    const { user, loading } = useAuth();

    const [isAdmin, isAdminLoading] = useAdmin();

    const [isManager, isManagerLoading] = useManager();

    if(loading || isAdminLoading || isManagerLoading) {
        return <div className="flex justify-center items-center mt-16"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if(user && !isAdmin && !isManager){
        return <Navigate to='/authorizationError'></Navigate>
    }
    else if(user && (isAdmin || isManager)){
        return children;
    }

    return <Navigate to='/'></Navigate>
};

export default AmPrivateRoute;