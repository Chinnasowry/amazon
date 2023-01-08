import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Buttton from 'react-bootstrap/Button';
import Rating from './Rating';

function Product({src, name, price, slug, data}) {
  return (
    <Card>
    <div>

        <Link to={`/product/${slug}`}>
          <img className='card-img-top' src={src} alt=''/>
        </Link>
        <div className='product-info'>
          <Link to={`/product/${slug}`}>
            <Card.Title>{name}</Card.Title>
          </Link>
          <Card.Text>${price}</Card.Text>
          <Buttton>Add to Cart</Buttton>
          <Rating rating={data.rating} numReviews={data.numReviews} />
        </div>
    </div>
    </Card>
  )
}

export default Product