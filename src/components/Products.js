import React from 'react'
import './Products.css'
import Product from './Product'
function Products() {
    return (
        <div className="productbody">
            <h1>Products</h1>
            <div className="products">
                <Product />
            </div>
        </div>
    )
}

export default Products
