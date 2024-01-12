import React from 'react'
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';

import { addToWishlist } from '../redux/slice/wishlistSlice';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../redux/slice/cartSlice';

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer);
  console.log("=====cartarray=====");
  console.log(cartArray);
  const dispatch = useDispatch();
  let totalPrice=0;
  if(cartArray.length>0){
    for(let i=0; i<cartArray.length; i++){
      totalPrice= totalPrice+cartArray[i].price;
    }
  }
  const handleCheckout = ()=>{
    alert("Thank you for shopping with us! Your order has been successfully placed.")
  }

  return (
    <div style={{ marginTop: "150px", fontFamily: "-moz-initial" }}>
      <div className='row w-100 d-flex justify-content-center' >
        <div className='col-lg-6 col-md-6 m-6'>
          <table className='table shadow border'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cartArray?.length > 0 ?
                  cartArray.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td><img src={item.thumbnail} alt="" style={{ height: "150px" }} /></td>
                      <td>${item.price}</td>
                      <td><Button variant='outline-danger'
                        onClick={() => dispatch(removeFromCart(item.id))}><i class="fa-solid fa-trash"></i></Button></td>
                    </tr>
                  ))
                  :
                  <p>No item to display</p>
              }
            </tbody>
          </table>
        </div>
        <div className='col-lg-6 m-5'>
              <div className='col-lg d-flex justify-content-center align-itmes-center flex-column'>
                <div className='border shadow p-5'>
                  <h3 className='text-primary'>Order Summary</h3>
                  <h6>Total Number Of Products:<span className='fw-bolder fs-2 text-warning'> {cartArray.length}</span></h6>
                  <h6>Total Price:<span className='fw-bolder fs-2 '> $ {totalPrice}</span></h6><br /><br />
                  <button className='btn btn-outline-success rounded-pill fs-5 fw-bold' onClick={handleCheckout}>
                    Proceed To CheckOut &rarr;

                  </button>

                  
                </div>

              </div>
        </div>
      </div>
    </div>
  )
}

<Link to={'/'} style={{ textDecoration: "none", color: "red" }} className='m-3'><i class="fa-solid fa-arrow-left"> Back To Home</i></Link>



export default Cart