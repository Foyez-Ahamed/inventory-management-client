import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useAdmin = () => {
    
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data : isAdmin, isPending : isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn : async() => {
            const res = await axiosSecure.get(`/api/v1/user/admin/${user.email}`)    
            return res.data
        }
    })

   return [isAdmin, isAdminLoading];

};

export default useAdmin;