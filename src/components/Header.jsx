import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import WishList from '../pages/WishList';


function Header() {
  // to access state in store : useSelector() hook
  const count = useSelector((state) => state.wishlistReducer);
  const cartlist = useSelector((state)=>state.cartReducer)
  console.log("===111111")
  console.log(count)
  console.log(cartlist);
  console.log("===cart====");
  return (
    <>
   
    <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{zIndex:"1",height:"100px"}}>
      <Container>
        <Navbar.Brand href="#home" style={{color:"white",fontFamily:"-moz-initial"}}>
          <Link to='/'style={{color:"white",textDecoration:"none",fontFamily:"-moz-initial",}}> <h2><i class="fa-solid fa-cart-shopping me-3"></i> E-kart</h2> </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" style={{color:"white"}} className=' btn border rounded me-3'>
                <Link to='/wishlist' style={{color:"white",textDecoration:"none",fontFamily:"-moz-initial"}}>Wishlist<Badge bg="secondary" className='ms-2'>{count.length}</Badge></Link></Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}} className=' btn border rounded me-3'>
                <Link to='/cart' style={{color:"white",textDecoration:"none",fontFamily:"-moz-initial"}}>cart<Badge bg="secondary" className='ms-2'>{cartlist.length}</Badge></Link></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header