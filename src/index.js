import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './BOOKS/Footer';
import TopBar from './BOOKS/TopBar';
import EBOOK from './BOOKS/EBOOK';
import Contact from './BOOKS/Contact';
import ProductDetails from './BOOKS/ProductDetails';
import BuyProduct from './BOOKS/BuyProduct';
import Paypal from './BOOKS/Paypal';
import Pricing from './BOOKS/Pricing'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';



class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Router>
        <TopBar />

          <Route path="/Contact" component={Contact} />
          <Route path="/BuyProduct" component={BuyProduct} />
          <Route path="/Paypal" component={Paypal}/>
          <Router path="/Pricing" component={Pricing} />

          <div className='container'>
          <Route exact path="/" component={EBOOK} />
          <Route path="/products/:productId" component={ProductDetails} />

          </div>
     
        
        <Footer />
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));