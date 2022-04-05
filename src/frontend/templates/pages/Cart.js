import React  from 'react';
import { useUser } from '../../contexts/userContext';
import '../../styles/pages/cart.css';
import { Product } from '../components';

export const Cart = () => {
    const { userState } = useUser();
    
    return (
        <main className="pos-rel px-sm py-sm">
        <div className="py-sm d-flex fd-col fw-wrap jc-c ai-c gap-1">
        { userState.foundUser && userState.foundUser.cart.length > 0 ?  
        (<>
            <div className="card bdr-rad-md flt-rgt bg-smoke mx-auto top-rgt-5 px-sm py-sm">
                <div className="px-xs pt-xs d-flex fd-col">
                    <div className="f-125x f-w-800">Price Details</div>   
                </div>
                <hr/>
                <div className=" d-flex fd-col">
                    { userState.foundUser.cart.map( product =>
                    <div className="d-flex fd-row ai-c jc-sb f-11x f-w-400 py-xs">
                        <div>{ product.itemName }</div>
                        <div>{product.currentPrice} ({product.qty})</div>
                    </div>
                    )}
                    <div className="d-flex fd-row ai-c jc-sb f-11x f-w-400 py-xs">
                        <div>Discount</div>
                        <div>0</div>
                    </div>
                    <div className="d-flex fd-row ai-c jc-sb f-11x f-w-400 py-xs">
                        <div>Delivery Charge</div>
                        <div>0</div>
                    </div>
                </div>
                <hr/>
                <div className=" d-flex fd-col">
                <div className="d-flex fd-row ai-c jc-sb">
                    <div className="f-125x f-w-800">Total Charges</div>
                    <div className="f-125x f-w-600">
                    { userState.foundUser.cart.reduce( ( accu , curr ) => accu += curr.currentPrice*curr.qty , 0) }
                    </div>
                </div>
                </div>
                <hr/>
                <div className=" py-sm f-11x f-w-600 f-125x ta-c">
                    You saved 200 Euros on this order
                </div>
                <div className="d-flex fd-row jc-c py-sm">
                    <button className="btn btn-calm w-75 bdr-rad-md jc-c">
                        <span className="f-w-600">Place Order
                        </span>
                    </button>
                </div>
            </div> 
            { userState.foundUser.cart.map((product,index) => <Product fromCart={true} product={product} key={index} />)}
        </>) : (<p className="f-3x f-w-600 txt-over">Cart Is Empty</p>)
        }
        </div>
                

        </main>
    );
}
