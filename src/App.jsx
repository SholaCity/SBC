import React from 'react';
import ReactDOM  from 'react-dom/client';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css'
import './index.css'
import { Navbar,Footer} from './components';
import {Home ,Preview , Cart,Search} from './pages';
import CartState from './context/CartState';
import  {dataBS, dataNA}  from "./components/products/productcontent"





 const App = ()=> {
    
        const Items1 = dataBS;
        const Items2 = dataNA;
        const allProduct =Items1.concat(Items2)
        console.log(allProduct);
   
    return <div className='App'>
            <CartState>
                <Router>
                    <Navbar/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='/preview/:id' element={<Preview/>}/>
                        <Route path='/search' element={<Search allProduct={allProduct}/>}/>
                    </Routes>
                    <Footer/>
                </Router> 
            </CartState>
        </div>
 }


ReactDOM.createRoot(document.getElementById("root")).render(<App/>)