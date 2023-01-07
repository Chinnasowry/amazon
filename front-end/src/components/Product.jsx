import React from 'react';
import './Product.css';
import data from '../data';
import { Link } from 'react-router-dom';

function Product({src, name, price, slug}) {
  return (
    <div key={data[0].slug}>
        <Link to={`/product/${slug}`}>
          <img src={src} alt=''/>
        </Link>
        <div className='product-info'>
          <Link to={`/product/${slug}`}>
            <p>{name}</p>
          </Link>
          <p><strong>${price}</strong></p>
          <button>Add to cart</button>
        </div>
    </div>
  )
}

export default Product