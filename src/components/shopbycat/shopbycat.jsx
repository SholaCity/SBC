
import React from 'react'
import {Cleats,Running, Indoor,Turf,Women,Kids} from "../index"
const shopbycat = () => {
  return (
<section id="shop-by-category">
            <h3>Shop By Category</h3>
            <div className="icon-wrap">
              <img src={Cleats} alt="category icon" className="items"/>
              <img src={Running} alt="category icon" className="items"/>
              <img src={Indoor} alt="category icon" className="items"/>
              <img src={Turf} alt="category icon" className="items"/>
              <img src={Women} alt="category icon" className="items"/>
              <img src={Kids} alt="category icon" className="items"/>
            </div>
        </section>  )
}

export default shopbycat