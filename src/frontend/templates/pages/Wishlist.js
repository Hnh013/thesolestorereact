import React from 'react';
import { useUser } from '../../contexts/userContext';
import { removeItemFromWishlist , addItemToWishlist } from '../../services/wishlistService';
import '../../styles/pages/wishlist.css';
import { Product } from '../components';

export const Wishlist = () => {
    const { userState , userDispatcher } = useUser();
    
    const ATW = async (myToken , productDetails) => {
        console.log('in wishlist');
        const response = await addItemToWishlist(myToken , productDetails);
        console.log(response);
        // userDispatcher({ 
        //     type: 'addItemToWishlist' , 
        //     payload : { ...userState.foundUser , wishlist : response.actionResponse.data.wishlist}   
        // });
        
    }

    const RFW = async (myToken, productDetails) => {
        const response = await removeItemFromWishlist(myToken , productDetails._id);
        console.log(response);
        // userDispatcher({ 
        //     type: 'removeItemFromWishlist' , 
        //     payload : { ...userState.foundUser , wishlist : response.actionResponse.data.wishlist }   
        // });
        
    }

    return (
        <main className="main px-xs py-xs d-flex fd-col gap-1">
            <div className="px-sm d-flex jc-c ai-c">
              {  userState.foundUser && (userState.foundUser.wishlist.length > 0) ? 
               (<p className="f-3x f-w-600 txt-over">My Wishlist ( {userState.foundUser.wishlist.length } ) </p>) : (<p className="f-3x f-w-600 txt-over">Wishlist is Empty</p>)
              }
            </div>
            <div className="d-flex fw-wrap jc-c gap-1 pb-md">
                { userState.foundUser &&                
                 <> { userState.foundUser.wishlist.map( (product,index) => <Product product={product} key={index} RFW={RFW} ATW={ATW} />)} </>
                }
            </div>
        </main>
    );
}

