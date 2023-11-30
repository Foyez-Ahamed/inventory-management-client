import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllProducts = () => {

    const axiosSecure = useAxiosSecure();

    const { data : allProducts = [], refetch } = useQuery({
        queryKey : ['allProducts'],
        queryFn : async() => {
            const res = await axiosSecure.get(`/api/v1/getAllProduct`)

            return res.data;
        }
    })

    return [allProducts, refetch]
};

export default useAllProducts;