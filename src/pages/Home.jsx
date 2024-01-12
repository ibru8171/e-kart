import React from 'react'
import useFetch from '../hooks/useFetch'
import Card from 'react-bootstrap/Card';
import { Col,Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';
// import WishList from './WishList';
// import wishlistSlice from '../redux/slice/wishlistSlice';
// import { addToWishlist } from '../redux/slice/wishlistSlice';
function Home() {
  const data = useFetch("https://dummyjson.com/products");
  const dispatch = useDispatch();
  return (
   <>
   <Row classname='m-5'style={{marginTop:"100px"}}>
  {
    data?.length>0?
    data?.map((item)=>(
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
          <Button variant='outline-danger' onClick={()=>dispatch(addToWishlist(item))}> <i class='fa-solid fa-heart'></i> </Button>
          <Button variant='outline-success' onClick={()=>dispatch(addToCart(item))} > <i class='fa-solid fa-cart-plus'></i> </Button>
        </div>
        </Card.Body>
    </Card>
  
  </Col>
  ))
  :
  <p>No item to display</p>
    }

   </Row>
   </>
  )
}

export default Home