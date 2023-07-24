import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { formatCurrency } from "../utils";
import CartContext from '../context/CartContext';
import '../components/products/products.css'
import './search.css'
const search = ({allProduct}) => {

  const { addToCart, cartItems, removeFromCart } = useContext(CartContext);
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };
  // Function to handle when an item is being searched from the search bar 

  return (
    <section id="new-arrivals">

    <div className='search'>
    <h1> showing results for ...""</h1>
    <div className="products" >
                  {allProduct.map((product)=> {
                    return    <Link to={`/preview/${product.id}`} onClick={()=>window.scrollTo(0, 0)} className="item" key={product.id}>
                                <img src={product.image} className="product-img"/>
                                <p className="name">{product.name}</p>

                                <div className="price">
                                    <p className="current name">{formatCurrency(product.price)}</p>
                                </div>
                              </Link>
                  })}
                </div>
  </div>
  </section>
  )
}

export default search