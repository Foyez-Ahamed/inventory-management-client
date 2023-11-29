import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSales = () => {
    
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data : sales = [], refetch} = useQuery({
        queryKey : ['sales', user?.email],
        enabled: !!user?.email,
        queryFn : async() => {
            const res = await axiosSecure.get(`/api/v1/getSales/${user?.email}`)

            return res.data;
        }
    })

    return [sales, refetch];

};

export default useSales;