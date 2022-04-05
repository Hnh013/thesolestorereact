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
            case 'addItemToWishlist':
                return { ...state , foundUser : action.payload };
            case 'removeItemFromWishlist':
                return { ...state , foundUser : action.payload };
            case 'addItemToCart':
                return { ...state , foundUser : action.payload };
            case 'removeItemFromCart':
                return { ...state , foundUser : action.payload };
            case 'updateItemInCart':
                return { ...state , foundUser : action.payload };
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