import React from 'react';
import "./App.css";
import { Home , Login , Signup, Products, Wishlist } from './frontend/templates/pages'; 
import { Navbar , Footer } from "./frontend/templates/components";
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
  <>
    <ToastContainer
      position="top-left"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <div className="grid-container">     
      <BrowserRouter>   
          <Navbar/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/signup" element={<Signup/>}/>
                  <Route path="/products" element={<Products/>}/>
                  <Route path="/wishlist" element={<Wishlist/>}/>
              </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  </>
  );
}

export default App;
