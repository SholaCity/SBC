import React,{useContext} from 'react'
import {Link} from 'react-router-dom'

import { formatCurrency } from "../../utils";
import CartContext from '../../context/CartContext';
import './products.css'
import '../../pages/preview/preview.css'
 

const products = ({Items1,Items2}) => {  

  const { addToCart, cartItems, removeFromCart } = useContext(CartContext);
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (<>
          <section id="best-sellers">
                <div className="head">
                    <h3>Best Sellers</h3>
                </div>
                <div className="products" >
                  {Items1.map((product)=> {
                    return ( 
                            <Link to={`/preview/${product.id}`} onClick={()=>window.scrollTo(0, 0)} className="item" key={product.id}>
                                <img src={product.image} className="product-img"/>
                                <p className="name">{product.name}</p>
                                <div className="rating">
                                    <div className="stars">
                                    {product.star}
                                    </div>
                                    {product.review} Reviews
                                </div>

                                <div className="price">
                                    <p className="current name">{formatCurrency(product.price)}</p>
                                </div>
                              </Link>
                    )
                  })}
                </div>
              </section>
            <section id="new-arrivals">
              
                <h3>New Arrivals</h3>
                <div className="products ">
                {Items2.map((product)=> {
                return (
                    <Link to={`/preview/${product.id}`} onClick={()=>window.scrollTo(0, 0)} className="item" key={product.id}>
                        <img src={product.image} className="product-img"/>
                        <p className="name">{product.name}</p>
                        <p className="type">{product.year}</p>
                        <div className="price">
                          <p className="current">{formatCurrency(product.price)}</p>
                        </div>
                      </Link>
                  )})}
                </div>
            </section>
          </>
    )
}

export default products