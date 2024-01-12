import React from 'react'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import { Col,Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../redux/slice/wishlistSlice';
import { Link } from 'react-router-dom';
function WishList() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer);
  console.log("=====array=====");
  console.log(wishlistArray);
  // dispatch function to be used in the handleClick event of each button
  const dispatch = useDispatch();



  return (
   <>
   <Row className='p-5' style={{marginTop:"50px"}}>
    <Col md={12}>
      <h3 style={{fontFamily:"-moz-initial"}}>My Wish List</h3>
      </Col>
      
    {
    wishlistArray?.length>0?
    wishlistArray?.map((item)=>(
      <Col className='mb-5'>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item?.thumbnail} style={{height:"200px"}} />
      <Card.Body>
        <Card.Title style={{fontFamily:"-moz-initial"}}>{item?.title}</Card.Title>
        <Card.Text>
        <p style={{fontFamily:"-moz-initial"}}>{item.description.slice(0,50)}...</p>
        <p style={{fontFamily:"-moz-initial"}}>{item.price} $</p>
        </Card.Text>
        <div className='d-flex align-items-center justify-content-between'>
          <Button variant='outline-danger' onClick={() => dispatch(removeFromWishlist(item.id))}> <i class="fa-solid fa-trash"></i> </Button>
          <Button variant='outline-success' > <i class='fa-solid fa-cart-plus'></i> </Button>
        </div>
        <div className='d-flex align-items-center justify-content-between'>
          
        </div>
        </Card.Body>
    </Card>
  
  </Col>
  ))
  :
  <p>No item to display</p>
    }

<Link to={'/'} style={{textDecoration:"none",color:"red"}} className='m-3'><i class="fa-solid fa-arrow-left"> Back To Home</i></Link>
   
   </Row>
   
   
   
   
   </>
  )
}

export default WishList