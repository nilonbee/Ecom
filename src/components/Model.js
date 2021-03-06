import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductConsumer } from '../Context'
import { ButtonContainer } from './button'
import { Link } from 'react-router-dom'

export default class Model extends Component {
  render() {

    return (
      <ProductConsumer>
      {(value)=>{
        const { modelOpen,closeModel } = value;
        const{ img,title,price } = value.modelProduct;

        if(!modelOpen){
          return null;
        }
        else{
          return( 
          <ModelContainer>
          <div className="container">
            <div className="row">
              <div id="model" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                <h5>Item added to the card</h5>
                <img src={img} className="img-fluid" alt="product"/>
                <h5>{title}</h5>
                <h5 className="text-muted"> price: $ {price}</h5>
                <Link to='/'>
                <ButtonContainer 
                 onClick={()=>closeModel()}
                 >
                  continue shopping
                </ButtonContainer>
                </Link>
                <Link to='/Cart'>
                <ButtonContainer 
                 onClick={()=>closeModel()}
                 cart
                >
                  go to cart
                </ButtonContainer>
                </Link>
              </div>
            </div>
          </div>
          </ModelContainer>)
         
        }
      }}
      </ProductConsumer>
    )
  }
}

const ModelContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom;
background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;
#model{
  background: var(--mainWhite)
}
`