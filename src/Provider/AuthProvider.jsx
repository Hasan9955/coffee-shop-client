import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import Auth from "../Firebase.config";
import { PropTypes } from "prop-types";





export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    
    
    
    
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const signUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }
    const [user, setUser] = useState(null)

    const AuthInfo = {
        user,
        createUser,
        loading,
        signUser

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;
