import React from 'react'
import './navbar.css'
function Navbar({toggler}) {
    return (
        <div className="Navbar">
            <div className="Navbar__logo">
            <a href="/"><i class="fas fa-cash-register fa-5x"></i></a>
            </div>
            <ul className="Navbar__links">
                <li>
                    <span className="cart__link">
                        <a href="/cart"><i class="fas fa-shopping-cart"></i>Cart</a>
                        <span className="Number"> 0</span>
                    </span>
                </li>
                <li>
                        <a href="/">Shop</a>
                </li>
            </ul>
            <div className="Mobile-Menu" onClick={toggler} >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Navbar;
