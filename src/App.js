import React, { useState , useEffect } from 'react';
import "./App.css";
import { Home , Login , Signup, Products } from './frontend/templates/pages'; 
import { Navbar , Footer } from "./frontend/templates/components";
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { getCategories } from './frontend/services/categoryService';
import { getFeaturedProducts, getProducts } from './frontend/services/productsService';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getData = async () => { 
        let responseCategories = await getCategories();
        setCategories(responseCategories.actionResponse.data.categories);
        let responseProducts = await getProducts();
        let featuredProducts = getFeaturedProducts(responseProducts.actionResponse.data.products);
        setFeaturedProducts(featuredProducts);
  }
  getData();
}, []);

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
                  <Route path="/" element={<Home categories={categories} products={featuredProducts} />}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/signup" element={<Signup/>}/>
                  <Route path="/products" element={<Products/>}/>
              </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  </>
  );
}

export default App;
