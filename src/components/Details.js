import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import { ButtonContainer } from './button';
import{ Link } from 'react-router-dom';


export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
      {value=>{
      const{id,title,img,price,info,inCart,company}=value.detailProduct;
      return(
        <div className="container py-5">
          {/*title */}
          <div className="row">
           <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
               <h2>{title}</h2>
           </div>
          </div>
        {/*end of title */}
        {/*product info */}
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <img src={img} className="img-fluid" alt="product"/>
          </div>
            {/*product text */}
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <h2> Model:{title} </h2>
              <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
              made by : <span className="text-uppercase">
                {company}
              </span>
              </h4>
            
              <h4 className="text-blue">
                <strong>
                 price : <span>$</span> {price} 
                </strong>
               </h4>

                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                 some info about product :
                </p>
                <p className="text-muted lead">
                 {info}
                </p>
                {/*buttons */}
           <Link to="/">
             <ButtonContainer>
               Back to products
             </ButtonContainer>
           </Link>
           <ButtonContainer
            cart
            disabled={inCart?true:false}
            onClick={()=>{
              value.addToCart(id) 
              value.openModel(id)
            }}
           >
             {inCart?"in Cart":"add to cart"}
           </ButtonContainer>
          </div>
        </div>
        </div>
      
      
      )
      }}
      </ProductConsumer>
    )
  }
}
