import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCarts = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data : carts = [], refetch} = useQuery({
        queryKey : ['cart', user?.email],
        enabled: !!user?.email,
        queryFn : async() => {
            const res = await axiosSecure.get(`/api/v1/getCarts/${user?.email}`)

            return res.data;
        }
    })

    return [carts, refetch];
};

export default useCarts;