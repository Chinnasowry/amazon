import React from 'react';
import Product from '../components/Product';
import data from '../data';

function Homescreen() {
  return (
    <div>
        <main>
            <h1>Featured Products</h1>
            {/* {data.map((product) => {
            return(
            <div>
                <img src={product.image} alt={product.name} />
                <Product src={require('./image/p1.jpg')} />
                <p>{product.name}</p>
                <p>{product.price}</p>
            </div>
            )
            })} */}
            <div className='products'>
                <div className='product'>
                    <Product src={require("../image/p1.jpg")} name={data[0].name} price={data[0].price} slug={data[0].slug} />
                </div>
                <div className='product'>
                    <Product src={require("../image/p2.jpg")} name={data[1].name} price={data[1].price} slug={data[1].slug} />
                </div>
                <div className='product'>
                    <Product src={require("../image/p3.jpg")} name={data[2].name} price={data[2].price} slug={data[2].slug}/>
                </div>
                <div className='product'>
                    <Product src={require("../image/p4.jpg")} name={data[3].name} price={data[3].price} slug={data[3].slug} />
                </div>
            </div>        
        </main>
    </div>
  )
}

export default Homescreen