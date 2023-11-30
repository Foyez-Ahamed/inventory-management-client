import axios from "axios";

const axiosPublic = axios.create({

    baseURL:'https://king-gallery-server.vercel.app'

})

const useAxiosPublic = () => {

    return axiosPublic;
    
};

export default useAxiosPublic;