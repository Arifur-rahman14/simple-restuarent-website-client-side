import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainStyleShit } from './MainStyleShit';
import Services from './Components/Services/Services';
import Product from './Components/Product/Product';
import { productData, productDataTwo } from './Components/Product/fakeData';
import Offer from './Components/Offers/Offer';
import Footer from './Components/Footer/Footer';
  

function App() {
  return (
    <div className="App">
      <Router>
        <MainStyleShit></MainStyleShit>
      <Services></Services>
      <Product heading='Choose your Favorite' data={productData}></Product>
      <Offer></Offer>
      <Product heading='Sweet treats for YOU' data={productDataTwo}></Product>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
