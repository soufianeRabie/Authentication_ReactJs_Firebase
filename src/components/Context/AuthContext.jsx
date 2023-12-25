import React, { createContext, useContext, useEffect, useState} from 'react';
import { createUserWithEmailAndPassword  , onAuthStateChanged ,
    signOut , signInWithEmailAndPassword , sendPasswordResetEmail ,
    updatePassword , updateEmail} from 'firebase/auth'
import auth from "../firebase/firbase";


const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)

    const signup = (email , password) => {
       return   createUserWithEmailAndPassword(auth , email , password)
    }
    const logout = () => {
     return signOut(auth)
    }
    const login = (email , password)=>{
       return  signInWithEmailAndPassword(auth , email, password)
    }
    const resetPassword = (email)=>
    {
        return sendPasswordResetEmail(auth , email)
    }
    const updateUserEmail = (email)=>{
        return updateEmail(auth.currentUser , email)
    }

    const updateUserPassword = (password)=>{
        return updateEmail(auth.currentUser , password)
    }
    useEffect(() => {
       const unsbcribe =  onAuthStateChanged(auth , (user)=>{
            setCurrentUser(user)
            setLoading(false)
        })
        return () =>{
           unsbcribe()
        }
    }, []);

    return (
        <AuthContext.Provider value={{currentUser , signup , logout , login , resetPassword , updateUserEmail , updateUserPassword}}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = ()=>{
    return useContext(AuthContext)
}

