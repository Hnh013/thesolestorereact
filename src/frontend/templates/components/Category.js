import React from 'react';

export const Category = (props) => {
    return ( 
        <div className='d-flex f-w-800 txt-calm fd-col jc-c ai-c gap-1'>
            <img className="avatar-round avatar-xl" src={props.categoryObj.imagPath} alt={props.categoryObj.categoryName}/>
            <p>{props.categoryObj.categoryName}</p>
        </div>
    );
};

