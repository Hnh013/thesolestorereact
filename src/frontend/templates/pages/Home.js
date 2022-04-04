import React, { useRef} from 'react';
import '../../styles/pages/home.css';
import { Category , Featured } from "../components";

export const Home = (props) => {
    const category = useRef(null);
    const categories = props.categories;
    const products = props.products;
    const scroll = (scrollOffset) => {
    category.current.scrollLeft += scrollOffset;
    }

    return (
        <main className='main-home'>
            <section>
                <div>
                    <span className='f-w-800 f-2x txt-sun d-flex jc-c py-sm'>Shop By Category</span>
                </div>
                <div className='d-flex fw-wrap ai-c jc-sa gap-1 py-sm px-sm'>
                    {categories.map((categoryObj,index) => 
                    <Category key={index} categoryObj={categoryObj} /> )}
                </div>
            </section>
            <section className="banner-container">
                <div className="banner-image-div">
                    <img className="banner-image" src="https://source.unsplash.com/random/?shoes,running" alt="hero-section-banner" />
                </div>
                <div className="banner-overlay-div"></div>
                <div className="banner-text-div d-flex ai-c jc-c">       
                    <button
                    className='btn btn-calm bdr-rad-sm'>Shop Now</button>
                </div>
            </section>
            <section>
                <div>
                    <span className='f-w-800 f-2x txt-fire d-flex jc-c py-sm'>Featured Products</span>
                </div>
                <div className="category-row d-flex ai-c mx-auto px-sm py-sm">   
                    <div className="d-flex ai-c">
                        <button onClick={() => scroll(-200)} className="material-icons arrow-left btn-fab btn-over">
                            keyboard_arrow_left
                        </button>
                    </div>
                    <div ref={category} className="row-category d-flex ai-c gap-1 hide-scrollbar">
                        {products.map((product,index) => <Featured key={index} product={product}/> )}   
                    </div>
                    <div className="d-flex ai-c">
                        <button onClick={() => scroll(+200)} className="material-icons arrow-right btn-fab btn-over">
                            keyboard_arrow_right
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
