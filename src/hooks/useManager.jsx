
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useManager = () => {
    
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data : isManager, isPending : isManagerLoading } = useQuery({
        queryKey: ['isManager', user?.email],
        enabled: !loading,
        queryFn : async() => {
            const res = await axiosSecure.get(`/api/v1/user/manager/${user.email}`)
            return res.data?.manager
        }
    })

   return [isManager, isManagerLoading];

};

export default useManager;