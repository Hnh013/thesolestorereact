import React, { useContext , createContext, useReducer } from 'react';

const UserContext = createContext();

const user = { foundUser: null , encodedToken : null };

const UserProvider = ({children}) => {

    const userStateUpdater = (state, action) => {
        switch(action.type) {
            case 'login': 
                return { ...state, ...action.payload };
            case 'logout':
                return { ...state , ...user };
            default:
                return { ...state};
        }
    }

    const [userState,userDispatcher] = useReducer(userStateUpdater,user);

    return (
        <UserContext.Provider value={{ userState , userDispatcher }}>
            { children }
        </UserContext.Provider>
    );
}

const useUser = () => useContext(UserContext);

export { useUser , UserProvider };