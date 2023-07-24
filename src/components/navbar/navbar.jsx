import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {logoDark, searchIcon, person, bag} from '../index'
import CartContext from '../../context/CartContext'

const navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleSearch, setToggleSearch] = useState(false)

  const { cartItems } = useContext(CartContext);

  const NavItems = (props)=> <Link className={`nav__link-text ${props.className}`} to={props.to}>{props.name} </Link>

  const Menu = ()=>{
    return  <div  className={!toggleMenu ? 'nav-items' : 'nav-items active-nav'} >
               <NavItems name='sign in'/>
              <Person/>
              <NavItems name='products'
                to="/"
              />
              <NavItems name='API'/>
              <NavItems name='help'/>    
          </div>
  }

  const SearchIcon = ()=>
      <img src={searchIcon} alt='search-icon' className='search-icon nav-icon' onClick={()=>{
        setToggleMenu(false)
        setToggleSearch(!toggleSearch)
        }}
        />
  const SearchInput = ({className})=><Link to="/search">
  <input type='text' placeholder='Search for a cleat,shoe,brand...' className={className}/></Link>;
       
    
  const Person = ()=><img src={person} alt='profile icon' className='profile-img nav-icon'/>

  return (
<nav>
        <div id="navbar" className='wrapper'>
            <div className={!toggleMenu ? 'mb-hamburger': 'mb-hamburger  active'} onClick={()=>{

              setToggleMenu(!toggleMenu)
              setToggleSearch(false)
              }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Link to='/'>
                <img src={logoDark} alt='' className='icon-wrap'/>
            </Link>
            <Menu/>
            <div className='search-input'>
               <SearchInput className={toggleSearch ? "active" : ""}/> 
                <SearchIcon/>
            </div>
            <div className='profile-bag'>
                <SearchIcon/>
                <NavItems name='sign in' className='desk'/>
                <Person/>
                <Link to="/cart"  onClick={()=>window.scrollTo(0, 0)} className='bag'>
                  {cartItems.length > 0 && (
                    <div className='counter pop_in'>{cartItems.length}</div>
                  )}
                  <img src={bag} alt='shopping bag icon' className='nav-icon '/>
                </Link>
            </div>
        </div>
    </nav>
  )
}


export default navbar

// // {}

// sxwqsx