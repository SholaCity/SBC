import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import './cart.css'
import { formatCurrency } from "../../utils";
import CartContext from '../../context/CartContext';
import  {dataBS, dataNA} from '../../components/products/productcontent'



const cart = () => {
  // Extract the cart state from the context
  const {cartItems, checkout, clearCart, total, removeFromCart , subTotal , estimated } = useContext(CartContext);
  const allProduct = dataBS.concat(dataNA)

        let filtered = [];
        filtered = allProduct.filter(ItemInCart =>{
            return !cartItems.find(restItem => {
                return restItem.id ===  ItemInCart.id
            });
        });
        const sortFiltered = (a , b)=>{
          return 0.5 - Math.random()
        }
        filtered.sort(sortFiltered)
        console.log(filtered.sort(sortFiltered));

    
      let previewCartCount = filtered.slice(0,5)
        console.log(previewCartCount);

      //   const filterByReference = (arr1, arr2) => {
      //     let res = [];
      //     res = arr1.filter(el => {
      //        return !arr2.find(element => {
      //           return element.id === el.id;
      //        });
      //     });
      //     return res;
      //  }
      //  console.log(filterByReference(arr1, arr2));
        console.log(cartItems);
  return <div className='cart'>
          <div className='container'>
          {cartItems.length === 0 ?  <div className='empty__wrap'>
            <h1 style={{textAlign: "center", width: "100%"}}>Your Bag Is Empty</h1>
            <p className='text'>Products Added will be displayed here.</p>
            <Link to='/'>
            <button>Start Shopping</button>
            </Link>
          </div> : <>
            <div className='cart-wrap'>
            <div className='cart-wrap_header'>
              <h1>Bag ({cartItems.length})</h1>
              <div className='clear' onClick={clearCart}>Empty Bag</div>
            </div>

            {cartItems.map((product)=>{
              return  <div className='cart-wrap_item'>
                  <Link to={`/preview/${product.id}`}>
                    <img src={product.image} className='cart__img'/>
                  </Link>
                  <div className='cart__item-info'>
                  <h4 className='cart__item-info_name'>{product.name}</h4>
                  <p className='cart__item-info_desc'>
                    It feature a new look with specialised component 
                    that let you play your fastest drom start to finish
                  </p>
                  <div className='cart-select'>
                    <p className='size'>Size: <span>42</span></p>
                    <p className='quantity'>Quantity: <span>{product.quantity}</span></p>
                    <p className='cart__item-price'>{product.quantity} X {formatCurrency(product.price)}</p>

                  </div>
                  <p className='delete'  onClick={() => removeFromCart(product)} >Remove</p>
                </div>
              </div> 
            })}
                        
            </div>
            <div className='summary'>
              <h4 className='i'>Order Summary</h4>
              <div className='subtotal i'>
                <p><span>Subtotal:</span> <span>{formatCurrency(subTotal)}</span></p>
                <p>Estimated delivery: <span>{formatCurrency(estimated)}</span></p>
                
              </div>
              <strong className='total i'>Total<span>{formatCurrency(total)}</span></strong>
              <div className='summary-btn' onClick={checkout}>proceed to checkout</div>
            </div> 
            </>}
          </div>
          {cartItems.length > 0 && (
            <div className='more__products'>
            <h2>shop other items</h2>
            <div className="products">
            {previewCartCount.map((product)=>{
              return  <div  className="item" key={product.id}>
                    <Link to={`/preview/${product.id}`} onClick={()=>window.scrollTo(0, 0)} >
                        <img src={product.image} className="product-img"/>
                        <p className="name">{product.name}</p>
                        <div className="price">
                          <p className="current">{formatCurrency(product.price)}</p>
                        </div>
                      </Link>
                     
                    </div>
                  })}
                </div>
              </div>)}
          
        </div>
};

export default cart