import React, { useState , useEffect } from 'react';
import "./App.css";
import { Home } from './frontend/templates/pages'; 
import { Navbar , Footer } from "./frontend/templates/components";
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { getCategories } from './frontend/services/categoryService';
import { getFeaturedProducts, getProducts } from './frontend/services/productsService';

function App() {

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let responseCategories = await getCategories();
        setCategories(responseCategories.actionResponse.data.categories);
        let responseProducts = await getProducts();
        let featuredProducts = getFeaturedProducts(responseProducts.actionResponse.data.products);
        setFeaturedProducts(featuredProducts);
      } 
      catch (error) {
        console.log(error);
      }
    })();
  }, [categories,featuredProducts]);

  return (
   <>
      <div className="grid-container">     
    <BrowserRouter>   
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home categories={categories} products={featuredProducts} />}/>
            </Routes>
        <Footer/>
    </BrowserRouter>
    </div>
   </>
  );
}

export default App;
