import React from 'react';

export const Featured = (props) => {
    return ( 
        <div className="card img-crd-v pos-rel">
            { props.product.isBestSeller ? <div className="custom-badge pos-abs d-flex ai-c jc-c f-w-600">BestSeller</div> : ''  } 
            <img src={props.product.imagePath} alt={props.product.itemName} className="img-square"/>
            <span className='pos-abs btm-rgt-5 d-flex ai-c jc-c px-xs bdr-rad-f bg-over'>
                <span className='txt-sun f-w-600'>{props.product.rating}</span>
                <span className='material-icons checked-sun '>star</span>
            </span>
        </div>
    );
};

