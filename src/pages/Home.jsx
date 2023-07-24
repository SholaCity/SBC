import React from 'react'
import  {dataBS, dataNA}  from "../components/products/productcontent"

import {Header, Products} from '../components/index';

    const Home = ()=>{
    const Items1 = dataBS;
    const Items2 = dataNA;
    
        return(
            <main>
            <Header/>
                <Products Items1={Items1} Items2={Items2}/>
        </main>
        )
    }


export default Home