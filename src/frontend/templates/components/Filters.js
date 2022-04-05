import React from "react";
import { useData } from "../../contexts/dataContext";

export const Filters = () => {

    const { filtersState , filtersDispatcher } = useData();

    return (

        <div className="d-flex fd-col">
            <div className="d-flex jc-sb px-xs pt-sm">
                <p className="f-125x f-w-800 d-flex ai-c"><span className="material-icons">filter_list</span>Filters </p>
                <p className="f-125x f-w-600" onClick={() =>   filtersDispatcher({ type: 'clear' })} ><u>Clear</u></p>
            </div>
            <div className="d-flex fd-col px-xs pt-xs">
                <p className="f-11x f-w-700 d-flex ai-c">Price</p>
                <div className="d-flex jc-sb px-sm fd-col">
                    <div className="d-flex ai-c jc-sb"><p>0</p><p>500</p><p>1000</p><p>1500</p><p>2000</p></div>
                    <input onChange={(e) => filtersDispatcher({ type: 'price', payload: { ...filtersState.price , maxPrice: e.target.value } })} 
                        type='range' name='range' min='0' max='2000' value={ filtersState.price.maxPrice } /> 
                </div>
            </div>
            <div className="d-flex fd-col px-xs pt-xs">
                <p className="f-11x f-w-700 d-flex jc-fs ai-c">Category</p>
                <div className="px-xs pt-xs d-flex fw-wrap jc-sb ai-fs">
                    <label className='d-flex px-xs ai-c gap-1'> 
                    <input onChange={() => filtersDispatcher({ type: 'category', payload: { ...filtersState.category , formals: !filtersState.category.formals } })} type='checkbox' name='formals' checked={filtersState.category.formals} /> 
                    Formals
                    </label> 
                    <label className='d-flex px-xs ai-c gap-1'>
                    <input onChange={() => filtersDispatcher({ type: 'category', payload: { ...filtersState.category , boots: !filtersState.category.boots } })} type='checkbox' name='boots' checked={filtersState.category.boots} /> 
                    Boots
                    </label>
                    <label className='d-flex px-xs ai-c gap-1'> 
                    <input onChange={() => filtersDispatcher({ type: 'category', payload: { ...filtersState.category , sneakers: !filtersState.category.sneakers } })} type='checkbox' name='sneakers' checked={filtersState.category.sneakers} /> 
                    Sneakers
                    </label>
                    <label className='d-flex px-xs ai-c gap-1'> 
                    <input onChange={() =>  filtersDispatcher({ type: 'category', payload: { ...filtersState.category , sports: !filtersState.category.sports } })} type='checkbox' name='sports' checked={filtersState.category.sports} /> 
                    Sports
                    </label>
                    <label className='d-flex px-xs ai-c gap-1'> 
                    <input onChange={() =>  filtersDispatcher({ type: 'category', payload: { ...filtersState.category , hiking: !filtersState.category.hiking } })} type='checkbox' name='hiking' checked={filtersState.category.hiking} /> 
                    Hiking
                    </label>    
                </div>
            </div>
            <div className="d-flex fd-col px-xs pt-xs">
                <p className="f-11x f-w-700 d-flex fw-wrap jc-sb ai-c">Rating</p>
                <div className="px-xs pt-xs">
                    <label className='d-flex px-xs ai-c gap-1'>  
                    <input onChange={() =>  filtersDispatcher({ type: 'rating', payload: { ...filtersState.rating , minRating: 1 } })}  
                     id='1' type='radio' name='ratings' checked={filtersState.rating.minRating === 1} /> 1 or More 
                    </label>    
                    <label className='d-flex px-xs ai-c gap-1'>   
                    <input onChange={() =>  filtersDispatcher({ type: 'rating', payload: { ...filtersState.rating , minRating: 2 } })}  
                     id='2' type='radio' name='ratings' checked={filtersState.rating.minRating === 2} /> 2 or More
                    </label> 
                    <label className='d-flex px-xs ai-c gap-1'> 
                    <input onChange={() =>  filtersDispatcher({ type: 'rating', payload: { ...filtersState.rating , minRating: 3 } })}  
                    id='3' type='radio' name='ratings' checked={filtersState.rating.minRating === 3} /> 3 or More 
                    </label> 
                    <label className='d-flex px-xs ai-c gap-1'> 
                    <input onChange={() =>  filtersDispatcher({ type: 'rating', payload: { ...filtersState.rating , minRating: 4 } })}  
                     id='4' type='radio' name='ratings' checked={filtersState.rating.minRating === 4} /> 4 or More
                    </label>         
                </div>
            </div>
            <div className="d-flex fd-col px-xs pt-xs">
                <p className="f-11x f-w-700 d-flex ai-c">Sort By</p>
                <div className="px-xs pt-xs">
                    <label className='d-flex px-xs ai-c gap-1'> 
                    <input onChange={() =>  filtersDispatcher({ type: 'sort', payload: { ...filtersState.sort , sortBy: 'highlow' } })}  
                    id='highlow' type='radio' name='sort' checked={filtersState.sort.sortBy === 'highlow'} /> 
                    Sort High To Low 
                    </label> 
                    <label className='d-flex px-xs ai-c gap-1'> 
                    <input onChange={() =>  filtersDispatcher({ type: 'sort', payload: { ...filtersState.sort , sortBy: 'lowhigh' } })}  
                     id='lowhigh' type='radio' name='sort' checked={filtersState.sort.sortBy === 'lowhigh'} /> 
                    Sort Low to High
                    </label>       
                </div>
            </div>
            <div className="d-flex fd-col px-xs pt-xs">
            <p className="f-11x f-w-700 d-flex ai-c">Others</p>
                <div className="px-xs pt-xs">
                    <label className='d-flex px-xs ai-c gap-1'> 
                    <input onChange={() =>  filtersDispatcher({ type: 'includeOutOfStock', payload: !filtersState.includeOutOfStock })} type='checkbox' name='includeOutOfStock' checked={filtersState.includeOutOfStock} /> 
                    Include Out of Stock
                    </label>
                    <label className='d-flex px-xs ai-c gap-1'> 
                    <input onChange={() =>  filtersDispatcher({ type: 'onlyFreeDelivery', payload: !filtersState.onlyFreeDelivery })} type='checkbox' name='onlyFreeDelivery' checked={filtersState.onlyFreeDelivery} /> 
                    Free Delivery
                    </label>
                    <label className='d-flex px-xs ai-c gap-1'> 
                    <input onChange={() =>  filtersDispatcher({ type: 'featured', payload: !filtersState.featured })} type='checkbox' name='featured' checked={filtersState.featured} /> 
                    Featured
                    </label>
                </div>
            </div>
        </div>

    );
}