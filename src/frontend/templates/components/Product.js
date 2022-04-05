import React from "react";
import { useUser } from "../../contexts/userContext";
import { addItemToCart, removeItemFromCart , updateItemInCart } from "../../services/cartService";
import { toastSuccess , toastError } from '../../services/toastService';
import { addItemToWishlist , removeItemFromWishlist } from '../../services/wishlistService';

export const Product = (props) => {

    const { userState , userDispatcher } = useUser();

    const ATW = async (myToken , productDetails) => {
        const wishlistProduct = { ...productDetails , inWishlist: true };
        const response = await addItemToWishlist(myToken , wishlistProduct);
        if(response.actionSuccess) {
            toastSuccess('Item Added to Wishlist!');
            if(Boolean(userState.foundUser.cart.find( x => x._id === wishlistProduct._id))) {
                const newCart = [...userState.foundUser.cart].map(x => x._id === wishlistProduct._id ? { ...x , inWishlist: true } : x );
                userDispatcher({ 
                    type: 'addItemToWishlist' , 
                    payload : { ...userState.foundUser , wishlist : [ ...userState.foundUser.wishlist , {...wishlistProduct }], cart: [...newCart]}   
                    });
            } else {
            userDispatcher({ 
            type: 'addItemToWishlist' , 
            payload : { ...userState.foundUser , wishlist : [ ...userState.foundUser.wishlist , {...wishlistProduct }]}   
            });
            }
        } else {
            toastError('Please Log In First!');
        }
    }

    const RFW = async (myToken, productDetails) => {
        const response = await removeItemFromWishlist(myToken , productDetails._id);
        if(response.actionSuccess) {
            toastSuccess('Item Removed from Wishlist!');
            if(Boolean(userState.foundUser.cart.find( x => x._id === productDetails._id))) {
                const newCart = [...userState.foundUser.cart].map(x => x._id === productDetails._id ? { ...x , inWishlist: false } : x );
                userDispatcher({ 
                    type: 'removeItemFromWishlist' , 
                    payload : { ...userState.foundUser , wishlist : userState.foundUser.wishlist.filter(product => product._id !== productDetails._id) , cart: [...newCart]}   
                });
            } else {
                userDispatcher({ 
                    type: 'removeItemFromWishlist' , 
                    payload : { ...userState.foundUser , wishlist : userState.foundUser.wishlist.filter(product => product._id !== productDetails._id)}   
                });
            }
        } else {
            toastError('Oops! Something went wrong');
        }
    }

    const RIFC = async (myToken , productDetails) => {
        const response = await removeItemFromCart(myToken , productDetails._id);
        if(response.actionSuccess) {
            toastSuccess('Item Removed from Cart!');
            if(Boolean(userState.foundUser.wishlist.find( x => x._id === productDetails._id))) {
                const newWishlist = [...userState.foundUser.wishlist].map(x => x._id === productDetails._id ? { ...x , inCart: false } : x );
                userDispatcher({ 
                    type: 'removeItemFromCart' , 
                    payload : { ...userState.foundUser , cart : userState.foundUser.cart.filter(product => product._id !== productDetails._id), wishlist : [...newWishlist] }   
            });
            } else {
                userDispatcher({ 
                    type: 'removeItemFromCart' , 
                    payload : { ...userState.foundUser , cart : userState.foundUser.cart.filter(product => product._id !== productDetails._id)}   
            });
            }
        } else {
            toastError('Oops! Something went wrong');
        }
    }

    const AITC = async (myToken , productDetails) => {
        const cartProduct = { ...productDetails , inCart: true };
        const response = await addItemToCart(myToken , productDetails); 
        if(response.actionSuccess) {
            toastSuccess('Item Added To Cart!');
            if(Boolean(userState.foundUser.wishlist.find( x => x._id === cartProduct._id))) {
                const newWishlist = [...userState.foundUser.wishlist].map(x => x._id === productDetails._id ? { ...x , inCart: true } : x );    
            userDispatcher({ 
                type: 'addItemToCart' , 
                payload : { ...userState.foundUser , cart : [ ...userState.foundUser.cart , { ...cartProduct , qty : 1 }] , wishlist : [...newWishlist] }   
            });
            } else {
                userDispatcher({ 
                    type: 'addItemToCart' , 
                    payload : { ...userState.foundUser , cart : [ ...userState.foundUser.cart , { ...cartProduct , qty : 1 }] }   
                });
            }
        } else {
            toastError('Please Log In First!');
        }
    }
    
    const incUIIC = async ( myToken , productDetails ) => {
        const response = await updateItemInCart(myToken , productDetails._id, 'increment');
        if(response.actionSuccess) {
            userDispatcher({ 
                type: 'updateItemInCart' , 
                payload : { ...userState.foundUser , cart : userState.foundUser.cart.map(product => product._id === productDetails._id ? { ...product , qty : product.qty + 1 } : product ) }   
            });
        }
    }

    const decUIIC = async ( myToken , productDetails ) => {
        const response = await updateItemInCart(myToken , productDetails._id, 'decrement');
        if(response.actionSuccess) {
            if ( productDetails.qty === 1 ) {
                RIFC(myToken , productDetails);
            } else {
                userDispatcher({ 
                    type: 'updateItemInCart' , 
                    payload : { ...userState.foundUser , 
                        cart : userState.foundUser.cart.map(product => product._id === productDetails._id ? { ...product , qty : product.qty - 1 } : product ) }   
                });
            }
        }
    }

    return (
        
        <div className="card v-crd mx-auto bg-smoke bdr-rad-sm">
        <div className="v-crd-hdr px-xs py-xs pos-rel">
            <img src={ props.product.imagePath } alt={ props.product.itemName } className="img-square bdr-rad-sm"/>
            { props.product.inWishlist ? 
            (<span onClick={() => RFW( userState.encodedToken , props.product )} 
                className=" pos-abs top-rgt-5 material-icons bdr-rad-f px-xs py-xs txt-fire">favorite</span>)
            :
            (<span onClick={() => ATW( userState.encodedToken , props.product )}
                className=" pos-abs top-rgt-5 material-icons bdr-rad-f px-xs py-xs txt-metal">favorite_border</span>)
            }
        </div>
        <div className="v-crd-ctnt ta-c px-xs">
            <div className="d-flex fd-col">
            <div>
                <p className="f-w-800 f-11x">{ props.product.itemName } </p><p><em> by { props.product.brand } { props.product.vendor } </em></p> <p></p>
            </div> 
            <div className="mx-auto d-flex ai-c jc-c">
                { props.product.rating }<span className="rating checked-sun material-icons">star</span>
                ( { props.product.totalRatings } Reviews )
            </div>
            <div>
                <p className="f-15x f-w-700 txt-eco"> &#8377;{ props.product.currentPrice } <del><span className="pl-xs fw-600 f-125x txt-fire"> &#8377;{ props.product.originalPrice }</span></del>  </p>
                <p className="f-w-800 f-11x txt-metal-dark">{ props.product.offerPercentage }% Off</p>
            </div>
            { props.fromCart && 
                <div className="d-flex py-xs f-125x ai-c jc-c fw-700">
                    <div className=" txt-over px-xs">Quantity</div>
                    <div onClick={() => decUIIC( userState.encodedToken , props.product )}  
                        className="material-icons">remove_circle</div>
                    <div className="px-xs"> { props.product.qty } </div>
                    <div onClick={() => incUIIC( userState.encodedToken , props.product )} 
                        className="material-icons">add_circle</div>
                </div>
            }
            <div className='py-xs'>
            {  props.product.inCart ?
            (<p onClick={() => RIFC( userState.encodedToken , props.product )} 
            className="px-xs py-xs bg-sun txt-over f-w-600 d-flex jc-c ai-c bdr-rad-sm">Remove From Cart 
            <span className="material-icons">remove_shopping_cart</span></p>)
            :
            (<p onClick={() => AITC( userState.encodedToken , props.product )} 
            className="px-xs py-xs bg-calm txt-smoke f-w-600 d-flex jc-c ai-c bdr-rad-sm">Add To Cart 
            <span className="material-icons">add_shopping_cart</span></p>) 
            }
            </div>
            
        </div>
    </div>
</div>

    );
}