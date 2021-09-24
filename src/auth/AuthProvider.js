import { createContext, useState } from "react";
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
const[user, setUser] = useState(false);
    const contextValue = {
        login(param){
            if (param) {
                setUser(true)    
            }
            return user;
        }
    }
    return <AuthContext.Provider value={contextValue}> {children}</AuthContext.Provider>
}

export default AuthProvider;

