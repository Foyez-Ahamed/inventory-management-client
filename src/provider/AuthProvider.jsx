import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../config/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const axiosPublic = useAxiosPublic();

    const [user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);

     // for social login // 
     const googleProvider = new GoogleAuthProvider();
    // for social login // 

    const userRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const userLogout = () => {
        setLoading(true);
        return signOut(auth);
    }
    

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            
            // for jwt // 
            if(currentUser){
                // get token and store client //
                const userInfo = {email : currentUser.email};
                axiosPublic.post('/api/v1/jwt', userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                         setLoading(false);
                    }
                }) 
            } else {
                localStorage.removeItem('access-token')
                setLoading(false);
            }
        })

        return () => {
            return unSubscribe();
        }
    },[axiosPublic])




    const authInfo = {
        user,
        loading,
        userRegister,
        userLogin,
        googleLogin,
        userLogout
     }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;