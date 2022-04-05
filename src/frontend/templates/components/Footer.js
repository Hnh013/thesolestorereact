import React from 'react';
import '../../styles/components/footer.css';
import { Link } from 'react-router-dom';
import { useUser } from '../../contexts/userContext';

export const Footer = () => {
  const { userState } = useUser();

    return (
        <footer className="footer">
        <div className='footer-area bg-smoke'>
        <div className='footer-left'>
        <div className="logo-container px-sm py-sm d-flex fd-col gap-1">
            <div>
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
            <div className='d-flex gap-1 ai-c'>
                <div className="social-icon"><span className='f-125x txt-fire'><i className="fa fa-envelope-o"></i></span></div>
                <div className="social-icon"><span className='f-125x txt-cool'><i className="fa fa-facebook-square"></i></span></div>
        <div className="social-icon"><span className='f-125x txt-sun'><i className="fa fa-instagram"></i></span></div>
        <div className="social-icon"><span className='f-125x txt-calm'><i className="fa fa-twitter-square"></i></span></div>
    
            </div>
          </div>
        </div>
        <div className='footer-right d-flex fd-col py-sm'>
        <Link to='/'><span className='f-w-800 txt-calm'>Home</span></Link>
        <Link to='/products'><span className='f-w-800 txt-over'>Products </span></Link>
        { userState.foundUser ?
        (<Link to='/wishlist'><span className='f-w-800 txt-over'>Wishlist</span></Link>)
        :
        (<Link to='/login'><span className='f-w-800 txt-over'>Wishlist </span></Link>)
        }
         { userState.foundUser ?
        (<Link to='/cart'><span className='f-w-800 txt-over'>Cart</span></Link>)
        :
        (<Link to='/login'><span className='f-w-800 txt-over'>Cart </span></Link>)
        }
        </div>
        </div>
    </footer>
    );
}

