import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserProvider = ({children})=>{
    const [account, setAccount] = useState('');

    return(
        <UserContext.Provider value={{
            account, 
            setAccount
        }}>
        {children}
        </UserContext.Provider>
    )
}

export default UserProvider;