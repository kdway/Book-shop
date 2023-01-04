import React from 'react';
import { Link } from "react-router-dom";

import ProductAlerts from './ProductAlerts';

import {products} from './products';
import './styles/ebook.css'
    


const EBOOK = ({ name, match }) => {
  const share = () => {
    window.alert('The product has been shared!');
  }

  const onNotify = () => {
    window.alert('You will be notified when the product goes on sale');
  }

  return (
    <>

<div className='container shadow-lg mb-5 rounded w-100 bg-light flyer'>
            <div className='row'>
                <div className='col-6 image'>
                   <img src='./book5.jpg'></img>
                </div>
                <div className='col-6 mt-5'>
                    <h3 className='head' style={{textAlign:'center'}}>Marketing Book For Success Business</h3>
                    <p className='para mt-5 me-3 text-align-center' style={{fontSize:'25px'}}>Leadership: How Legendary Leaders Speak: 451 Proven Communication Strategies of the World's Top Leaders (Speak for Success)</p>
                   
               
                     
                 

              </div>
                </div>

              
               
                
               

            </div>







<div className="product-list shadow-lg" style={{marginTop:'10em'}}>
    

    {products.map((product, index) => {
      return (
        <div className="card">
          <h3>
            <Link to={`${match.url}products/${index}`} title={`${product.name} details`}> 
             
              <img className='image h-100' src={ product.img}></img>
            </Link>
          </h3>
          {product.description && <p style={{fontSize:'22px'}}>{`Description: ${product.description}`}</p>}
          <button onClick={share}>
            Share
          </button>
          <ProductAlerts product={product} notify={onNotify} />
        </div>
      )
    })}
  </div>


  <div class="card-group mt-5 justify-contenent-space-between">
  <div class="card m-2 rounded shadow-md">
    <img src="./book5.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Marketing Book For Success Business</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <div className='rating ms-5'>
      <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star"></span>
     <span class="fa fa-star"></span>

      </div>
   
      <h3 class="price ms-3 mb-3">18 £</h3>
      <div class="card-footer ms-5">
      <button>Buy Now</button>
    </div>
    </div>
  
  </div>
  <div class="card m-2">
    <img src="./book5.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className='rating ms-5'>
      <span class="fa fa-star checked s-2"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star "></span>

      </div>
   
      <h3 class="price ms-3 mb-3">18 £</h3>
      <div class="card-footer ms-5">
      <button>Buy Now</button>
    </div>
  </div>
  <div class="card m-2">
    <img src="./book5.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div className='rating ms-5'>
      <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked "></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star"></span>
     <span class="fa fa-star"></span>

      </div>
   
      <h3 class="price ms-3 mb-3">18 £</h3>
      <div class="card-footer ms-5">
      <button>Buy Now</button>
    </div>
  </div>
</div>


<div class="card-group mt-5 justify-contenent-space-between">
  <div class="card">
    <img src="./book5.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className='rating ms-5'>
      <span class="fa fa-star checked s-2"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star"></span>
     <span class="fa fa-star"></span>

      </div>
   
      <h3 class="price ms-3 mb-3">18 £</h3>
      <div class="card-footer ms-5">
      <button>Buy Now</button>
    </div>
  </div>
  <div class="card">
    <img src="./book5.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className='rating ms-5'>
      <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star"></span>
     <span class="fa fa-star"></span>

      </div>
   
      <h3 class="price ms-3 mb-3">18 £</h3>
      <div class="card-footer ms-5">
      <button>Buy Now</button>
    </div>
  </div>
  <div class="card">
    <img src="./book5.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div className='rating ms-5'>
      <span class="fa fa-star checked s-2"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>

      </div>
   
      <h3 class="price ms-3 mb-3">18 £</h3>
      <div class="card-footer ms-5">
      <button>Buy Now</button>
    </div>
  </div>
</div>



    
    </>
    
    
  )
};

export default EBOOK;