import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

import { ball} from '../index'
const header = () => {
  return (
        <section id="hero-banner">
            <div className="text">
                <h1>Get the Nike Mercurial <br/>Superfly 8 FG 50% off</h1>
                <p className="paragraph">The NIkeMercurial Superfly 8 Elite FG Features
                    a new look with specialised components to let you play
                    your fastest from start to finish. To celebrate our 10years Anniversary,
                    we are selling this gem for
                    half the price
                </p>
                <Link to={`/preview/2`} >
                    <a href="" className="btn">Shop Now</a>
                </Link>
            </div>
            <div className="img">
                <img src={ball} alt="" className="ball"/>
            </div>
        </section>  
        )
}

export default header