import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useShops = () => {

    const axiosSecure = useAxiosSecure();

    const { data : shops = [] , refetch } = useQuery({
        queryKey : ['shops'],
        queryFn : async() => {
            const res = await axiosSecure.get('/api/v1/getShop')

            return res.data;
        }
    })

    return[shops, refetch];
   
};

export default useShops;