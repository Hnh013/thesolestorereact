import React, { useState } from 'react';
import '../../styles/components/navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const [navlinksClass, setNavlinksClass] = useState('nav-links');
    const [navSearchClass, setSearchClass] = useState('nav-g-search');

    const toggleNavBar = (e) => {
        navlinksClass === 'nav-links'
          ? setNavlinksClass('nav-links-responsive')
          : setNavlinksClass('nav-links');
        navSearchClass === 'nav-g-search responsive'
          ? setSearchClass('nav-g-search')
          : setSearchClass('nav-g-search responsive');
    };

    return (
    <nav className="navbar">
      <div className="nav-grid bg-smoke txt-over">
        <div className="nav-g-brand d-flex jc-sb">
          <div className="logo-container ">
            <Link to='/'>
            <span className="f-2x f-w-600 pos-rel d-flex">
              TSS
              <span className="pos-abs logo-fg-txt d-flex bg-smoke ta-c f-w-800">
                <span className="txt-calm">The</span>
                <span className="txt-bee">Sole</span>
                <span className="txt-fire">Store</span>
              </span>
            </span>
            </Link>
          </div>
          <div className="toggle-btn">
            <span className="material-icons" onClick={toggleNavBar}>
              menu
            </span>
          </div>
        </div>
        <div className={navSearchClass}>
          <input type="text" className="nav-search" />
          <span className="f-2x material-icons">search</span>
        </div>
        <div className={navlinksClass}>
          <span>
            <span className="f-2x material-icons">view_list</span>
          </span>
          <span className="pos-rel">
            <span>
              <span className="f-2x material-icons">favorite_border</span>
            </span>
           <span className="badge badge-md num-blip-md num-blip num-blip-fire">
              0
            </span> 
          </span>
          <span className="pos-rel">
            <span>
              <span className="f-2x material-icons">shopping_cart</span>
            </span>
            <span className="badge badge-md num-blip-md num-blip num-blip-fire">
             0
            </span>
          </span>
          <span>
            <span className="f-2x material-icons">login</span>
          </span> 
        </div>
      </div>
    </nav>
    );
}
