import React from "react";

export const Product = (props) => {
    return (
        <div className="card v-crd mx-auto bg-smoke bdr-rad-sm">
        <div className="v-crd-hdr px-xs py-xs pos-rel">
            <img src={ props.product.imagePath } alt={ props.product.itemName } className="img-square bdr-rad-sm"/>
            <span className=" pos-abs top-rgt-5 material-icons bdr-rad-f px-xs py-xs txt-metal">favorite_border</span>
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
     
            <div className='py-xs'>
            <p className="px-xs py-xs bg-calm txt-smoke f-w-600 d-flex jc-c ai-c bdr-rad-sm">Add To Cart 
            <span className="material-icons">add_shopping_cart</span></p> 
            </div>
            
        </div>
    </div>
</div>

    );
}