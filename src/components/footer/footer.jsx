import React from 'react'
import { logoWhite } from '..'

const footer = () => {
  return (
<footer>
        <div className="wrap">
            <ul className="item-box">
                <li className="head"><img src={logoWhite} alt="" className="logo-white"/></li>
                <ul className="ft-item-links">
                    <li className="items">SoccerBoots Collection is a Registered Nigerian Company aimed at providing
                        consumers
                        with original soccer/football footwears for all gender and age groups</li>
                    <li className="items"><a href="#"></a></li>
                </ul>
            </ul>
            <ul className="item-box">
                <li className="head">Our Products</li>
                <ul className="ft-item-links">

                    <li className="items"><a href="#">Firm-Ground Cleats</a></li>
                    <li className="items"><a href="#">Women's Shoes</a></li>
                    <li className="items"><a href="#">Kid's Shoes</a></li>
                    <li className="items"><a href="#">Indoor-Court Shoes</a></li>
                    <li className="items"><a href="#">Running Shoes</a></li>
                    <li className="items"><a href="#">Brand Shoes</a></li>
                </ul>
            </ul>
            <ul className="item-box">
                <li className="head">Links</li>
                <ul className="ft-item-links">

                    <li className="items"><a href="#">About Us</a></li>
                    <li className="items"><a href="#">Contact Us</a></li>
                    <li className="items"><a href="#">Frequently Asked Questions</a></li>
                    <li className="items"><a href="#">Become An Agent</a></li>
                </ul>
            </ul>
            <ul className="item-box">
                <li className="head">Subscribe to NewsLetter</li>
                <ul className="ft-item-links">
                    <li className="items">Be the first tpo get notifications on our latest products and offers.
                        We promise
                        not to spam you.</li>
                    <form id="subscribe" className="items">
                        <input type="email" name="subscribe" id="subscribe" placeholder="your email"/>
                        <button disabled="disabled">Subscribe</button>
                    </form>
                </ul>
            </ul>
        </div>

    </footer>  )
}

export default footer