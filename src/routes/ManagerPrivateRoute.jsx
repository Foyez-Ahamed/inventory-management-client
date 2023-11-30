import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useManager from "../hooks/useManager";


const ManagerPrivateRoute = ({children}) => {
    const {user, loading} = useAuth();

    const [isManager, isManagerLoading] = useManager();


   if(loading || isManagerLoading ) {

        return <div className="flex justify-center items-center mt-16"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if(user && !isManager ){

        return <Navigate to='/authorizationError'></Navigate>

    } else if(user && isManager ){
        return children;
    }

    return <Navigate to='/'></Navigate>
};

export default ManagerPrivateRoute;