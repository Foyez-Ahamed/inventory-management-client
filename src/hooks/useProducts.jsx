import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useProducts = () => {
    const axiosSecure = useAxiosSecure();

    const {user} = useAuth();

    const { data : products = [], refetch } = useQuery({
        queryKey : ['products'],
        enabled : !!user?.email,
        queryFn : async() => {
            const res = await axiosSecure.get(`/api/v1/getProducts/${user?.email}`)

            return res.data;
        }
    })

    return [products, refetch]
}

export default useProducts;