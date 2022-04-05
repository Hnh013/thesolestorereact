import React, { createContext , useContext , useReducer, useState } from 'react';
import { handleAllFilters , initialFilters , productInCartWishlistChecker } from '../services/filtersService';
import axios from 'axios';
import { useUser } from './userContext';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [ products , setProducts] = useState([]);
    const { userState }  = useUser();
    axios.get('/api/products')
        .then( (response) => { 
            let pureProducts = response.data.products;
            let initialProducts = pureProducts.map(product => {
            return { ...product, inCart: false , inWishlist: false }; 
                })
            setProducts(initialProducts);
            })
    .catch((error) => console.log(error) );
 
    const configureFilters = (state, action) => {
        switch(action.type) {
            case 'category' : 
            return{ ...state, category : action.payload };
            case 'rating' : 
            return { ...state, rating : action.payload };
            case 'price' :
            return { ...state, price : action.payload };
            case 'sort' :
            return { ...state, sort : action.payload };
            case 'onlyFreeDelivery' :
            return { ...state, onlyFreeDelivery : action.payload };
            case 'includeOutOfStock' :
            return { ...state, includeOutOfStock : action.payload };
            case 'featured' :
            return { ...state, featured : action.payload };
            case 'clear':
            return { ...initialFilters };
            default :
            return { ...state};
        }
    }

    const [filtersState,filtersDispatcher] = useReducer(configureFilters,initialFilters);

    let filteredProducts = handleAllFilters(products , filtersState);
    
    if( userState.foundUser ) {
    filteredProducts = productInCartWishlistChecker( userState.foundUser.wishlist , filteredProducts , 'wishlist');
    filteredProducts = productInCartWishlistChecker( userState.foundUser.cart , filteredProducts , 'cart');
    }

    return (
        <DataContext.Provider value={{ filtersState, filtersDispatcher, filteredProducts }}>
          { children }
        </DataContext.Provider>
    );
}

const useData = () => useContext(DataContext);

export { useData , DataProvider };