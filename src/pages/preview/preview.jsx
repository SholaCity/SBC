import React, {useContext, useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {FaPlus, FaMinus} from 'react-icons/fa'
import { arrowDown } from '../../components'

import './preview.css'
import  {dataBS, dataNA} from '../../components/products/productcontent'
import { arrowLeft,arrowRight } from '../../components'
import CartContext from '../../context/CartContext';
import { formatCurrency } from "../../utils";





const preview = () => {
    const { id } = useParams();
    const [product, setProduct]= useState(id)
    // console.log(id);
    let [imgCount, setImgCount] = useState(0)
    let [controlVisible, setControlVisible] = useState(false)

    const { addToCart, increase, decrease, cartItems, sumItems, removeFromCart } = useContext(CartContext);
    const isInCart = (product) => {
      return !!cartItems.find((item) => item.id === product.id);
    };

    useEffect(() => {
        if (product <= 4 ) {
            setProduct(dataBS[id - 1])
        } else {
            setProduct(dataNA[id - 5])
        }

        console.log(product);
     }, [])

     const increaseImgCount = ()=>{
        if (imgCount >= -3 ) {
            setImgCount(imgCount - 1)
        } else if (imgCount = 4){
            setImgCount(imgCount = 0)
        }
     } 
     const decreaseImgCount = ()=>{
        if (imgCount <= -1 ) {
            setImgCount(imgCount + 1)
        } else if (imgCount < 1){
            setImgCount(imgCount = -4)
        }
     }

     console.log("imgCount is " + imgCount);
     
    
 
     let previewCartCount = [];
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === id) {
                previewCartCount.push(cartItems[i]);
            }
        }
        // console.log(previewCartCount);
        const ButtonMinus = ({Decrease})=>{
            return  <button className="minus" onClick={Decrease}
            >
                        <FaMinus size={14} color='#fff'/>
                    </button>
        }
        const ButtonPlus = ({Increase})=>{
            
            return  <button className="plus" onClick={Increase}>
                        <FaPlus size={14} color='#fff'/>
                    </button>
        }
        const scroller = `translateX(${imgCount}00%)`
        console.log(scroller);
  return (
  <section id="preview" >
    <div className='img-container'>
        <div className='img-wrap' onMouseOver={()=>setControlVisible(true)} onMouseOut={()=>setControlVisible(false)}>
            <img src={product.imageprev0} alt="" className="preview-img" style={{transform: scroller}} />
            <img src={product.imageprev1} alt="" className="preview-img" style={{transform: scroller}} />
            <img src={product.imageprev2} alt="" className="preview-img" style={{transform: scroller}} />
            <img src={product.imageprev3} alt="" className="preview-img" style={{transform: scroller}}/>
            <img src={product.imageprev4} alt="" className="preview-img" style={{transform: scroller}}/>
            {controlVisible && <>
                <img src={arrowRight} className='arrow right fade-in' onClick={increaseImgCount}/>
            <img src={arrowLeft} className='arrow left fade-in' onClick={decreaseImgCount}/>
            </>
            }
            
        </div>
        <div className='preview-thumbnails'>
        <img src={product.imageprev0} alt="" className="thumbnail-img" onMouseOver={()=>setImgCount(imgCount = 0)} />
        <img src={product.imageprev1} alt="" className="thumbnail-img" onMouseOver={()=>setImgCount(imgCount = -1)} />
        <img src={product.imageprev2} alt="" className="thumbnail-img" onMouseOver={()=>setImgCount(imgCount = -2)} />
        <img src={product.imageprev3} alt="" className="thumbnail-img" onMouseOver={()=>setImgCount(imgCount = -3)} />
        <img src={product.imageprev4} alt="" className="thumbnail-img" onMouseOver={()=>setImgCount(imgCount = -4)} />
        </div>
    </div>

    <div className="cart-function">
        <h4>{product.name} </h4>
        <div className="price">
            <p className="current">{formatCurrency(product.price)}</p>
            <p className="former">{formatCurrency(product.oldprice)}</p>
        </div>
        <div className="selects">
            <div className="number-of-items">
                <p className="quant ity">Quantity</p>
                {isInCart(product) ? (
                    previewCartCount.map((product =>{
                        return <div className="quantity-counter">
                        {product.quantity === 0 && (
                                <>
                                <ButtonMinus/>
                                <p className="count"><strong>{product.quantity}</strong></p>
                                <ButtonPlus/>
                                </>
                            )}{product.quantity == 1 && (
                                <>
                                <ButtonMinus 
                                    Decrease={()=>{
                                        removeFromCart(product)
                                        }}
                                />
                                <p className="count"><strong>{product.quantity}</strong></p>
                                <ButtonPlus Increase={() => increase(product)}/>
                                </>
                            )}
                            {(product.quantity >= 2 && product.quantity <= 11) && (
                                <>
                                <ButtonMinus
                                    Decrease={() => decrease(product)}
                                />
                                <p className="count"><strong>{product.quantity}</strong></p>
                                <ButtonPlus
                                    Increase={() => increase(product)}
                                />
                                </>
                            )}{product.quantity == 12 && (
                                <>
                                <ButtonMinus
                                    Decrease={() => decrease(product)}
                                />
                                <p className="count"><strong>{product.quantity}</strong></p>
                                <ButtonPlus
                                /> 
                                </>
                            )}
                                
                            </div>
                        }))) : 
                        <div className="quantity-counter">
                            <ButtonMinus
                                
                            />
                            <p className="count"><strong>0</strong></p>
                            <ButtonPlus
                                    Increase={() => {
                                        addToCart(product)
                                        }}
                                />
                        </div>
                    }
            
            </div>
        </div>
        {/* <div className="size-wrap">
        <p> Sizes </p>
            <div className="sizes">

                <input type="radio" name="sizes" id="40" value="40"/>
                <label htmlFor="40">40</label>

                <input type="radio" name="sizes" id="41" value="41"/>
                <label htmlFor="41">41</label>

                <input type="radio" name="sizes" id="42" value="42"/>
                <label htmlFor="42">42</label>

                <input type="radio" name="sizes" id="43" value="43"/>
                <label htmlFor="43">43</label>

                <input type="radio" name="sizes" id="44" value="44"/>
                <label htmlFor="44">44</label>

                <input type="radio" name="sizes" id="45" value="45"/>
                <label htmlFor="45">45</label>
                
                <input type="radio" name="sizes" id="46" value="46"/>
                <label htmlFor="46">46</label>

                <input type="radio" name="sizes" id="47" value="47"/>
                <label htmlFor="47">47</label>
               
            </div>
        </div> */}
        <div className="btns">
                {isInCart(product) && (<>
                    <button
                    onClick={() => {
                        console.log(cartItems)
                    }}
                    className="btn add"
                    >
                    Added to Bag
                    </button>
                    <Link to="/cart">
                        <button className=" tobag">Proceed To Bag</button>
                    </Link>
                    </>
                )}

                {!isInCart(product) && (<>
                    <button className='add' onClick={() => addToCart(product)}>Add To Bag</button>
                    <button className=" tobag disable">Proceed To Bag</button>
                    </>
                )}
        </div>
    </div>
    <div id="description">

        <div className="wrap">

            <div className="description-texts">
            <h5>Product Description</h5>

                <p className="text-one"> {product.name} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero incidunt
                    quod
                    labore ullam aut
                    corrupti voluptates, doloribus amet repellat id. Commodi minima, sapiente corrupti dolore
                    veniam
                    voluptatibus distinctiodebitis, corporis blanditiis suscipit a hic magni in, atque dicta
                    fugiat
                    adipisci animi? Natus id quas corrupti corporis.</p>
                <p className="text-two"> {product.name} ipsum dolor sit, amet consectetur adipisicing elit. Libero incidunt
                    quod
                    labore ullam aut
                    corrupti voluptates, doloribus amet repellat id. Commodi minima, sapiente corrupti dolore
                    veniam
                    voluptatibus distinctiodebitis, corporis blanditiis suscipit a hic magni in, atque dicta
                    fugiat
                    adipisci animi? Natus id quas corrupti corporis.</p>
            </div>
            <div className="product-info-policy">
                <div className="textswrap">
                    <div className="text">
                        <p><strong>Year:</strong> {product.year}</p>
                    </div>
                    <div className="text">
                        <p><strong>Model:</strong> 230</p>
                    </div>
                    <div className='text'>
                        <div className="header ">
                            <p>Delivery and Return</p>
                            <img src={arrowDown} alt="" srcs=""/>
                        </div>
                        <div className="message">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                                ipsam
                                vel, error magnam aut amet tempora quia reprehenderit! Excepturi, saepe
                                cupiditate?
                                A, iste.</p>
                        </div>
                    </div>
                    <div className='text'>
                        <div className="header">
                            <p>Product Reviews <span>({product.review})</span></p>
                            <div className="stars">
                            {product.star}
                            <img src={arrowDown} alt="" srcs=""/>
                            </div>
                        </div>
                        <div className="message">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                                ipsam
                                vel, error magnam aut amet tempora quia reprehenderit! Excepturi, saepe
                                cupiditate?iste.
                            </p>
                    </div>
                </div>

            </div>

        </div>
    </div>


    </div>
    </section>
  )
}

export default preview