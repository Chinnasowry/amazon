import React from 'react';
import { useEffect, useState, useReducer } from 'react';
import Product from '../components/Product';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'FETCH_REQUST':
//             return {...state, loading: true};
//         case 'FETCH_SUCESS':
//             return {...state, data: action.payload, loading: false }
//         case 'FETCH_FAIL':
//             return {...state, loading: false, error: action.payload}
//         default:
//             return state;
         
//     }
// }

function Homescreen() {

    // const [data, setProducts] = useState([]);
    
    
    // useEffect(() => {
        
    //     const fetchData = async () => {
    //         const result = await axios.get("http://localhost:8080/api/products").then((res) => {
    //             setProducts(res.data);
    //             //console.log(res.data);
    //         })
    //     };
    //     fetchData();
    // }, [])

    // useEffect(() => {
        // const res = axios.get("http://localhost:8080/api/products").then((res) => {
        //      console.log(res.data)
        //     setProducts(res.data)
        //  })
        
    // }, [])

    // const [{loading, error, data}, dispatch] = useReducer(reducer, {
    //     data: [],
    //     loading: true,
    //     error: ''
    // })
     const [data, setUsers] = useState([]);
    //  useEffect(() => {
    //     const fetchData = async () => {
    //         dispatch({type: 'FETCH_REQUEST'});
    //         try {
    //             const result = await axios.get("http://localhost:8080/api/products");
    //             dispatch({type: 'FETCH_SCCUESS', payload: result.data});
    //         } catch (err) {
    //             dispatch({type: 'FETCH_FAIL', payload: err.message})
    //         }
    //     }; fetchData();
    //  }, [])
      useEffect(() => {
        loadUsers();
      },[]);

      const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/api/products");
        console.log(result)
        setUsers(result.data)
      }
     
      console.log("Hello", data)


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
            {/* {data.length != 0? (
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
            </div>  ) : (loadUsers)}       */}
            <Row>
            <div className='products'>
            {data.length != 0 ? (data.map( (data) => {
                return(
                    <Col key={data.slug} sm={6} md={4} lg={3}>
                    <div className='product'>
                        <Product src={require("../image/p1.jpg")} name={data.name} price={data.price} slug={data.slug} data={data} />
                    </div>
                    </Col>
                )
            })): (loadUsers)}
              </div>
              </Row>
        </main>
    </div>
  )
}

export default Homescreen