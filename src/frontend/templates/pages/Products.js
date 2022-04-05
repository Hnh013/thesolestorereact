import React, { useState } from 'react';
import { useData } from '../../contexts/dataContext';
import '../../styles/pages/products.css';
import { Product , Filters } from '../components';

export const Products = () => {

    const { filteredProducts } = useData();

    let [asideClass, setAsideClass] = useState('bg-smoke aside o-09');

    const toggleAside = () => {
        asideClass === 'bg-smoke aside o-09'
          ? setAsideClass('bg-smoke aside o-09 responsive')
          : setAsideClass('bg-smoke aside o-09');
    };

    return (
        <main className='main-grid'>
            <aside className={asideClass}>
                <div onClick={() => toggleAside()} className="px-xs py-sm pos-rel close-aside">
                    <span className="px-sm py-sm f-2x pos-abs top-rgt-0 txt-over material-icons close-btn">clear</span>
                </div>
                <Filters/>
            </aside>
            <div className='main-content pos-rel' >
                <button className='btn-fab btn-over top-lft-5 close-aside' onClick={() => toggleAside()} >
                    <span className='material-icons txt-smoke'>add</span>
                </button>
                <div className="px-xs py-xs d-flex jc-sb gap-1 fw-wrap">
                    { filteredProducts.map( (product, index) => <Product product={product} key={index} />)}
                </div>
            </div> 
        </main>
    );
}
