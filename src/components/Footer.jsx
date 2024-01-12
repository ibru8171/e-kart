import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (

        <>
            <div className='footer d-flex align-items-center justify-content-evenly w-100 bg-primary'>
                <div style={{ width: "300px" }}>
                    <h4 style={{ fontFamily: "-moz-initial",color:"white" }}>
                    <i class="fa-solid fa-cart-shopping me-3"></i> E-kart
                    </h4>
                    <h6 style={{ fontFamily: "-moz-initial",color:"white" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iusto
                        voluptas esse laboriosam alias molestias minus magni
                        incidunt, harum libero praesentium et, maxime ducimus voluptates
                        porro nihil nemo nam quis?</h6>
                </div>
                <div>
                    <h4 style={{fontFamily:"-moz-initial",color:"white"}}>Links</h4>
                   <h6>
               <Link to={'./'} style={{color:"white",textDecoration:"none",fontFamily:"-moz-initial"}}>Home</Link><br /><br />
               <Link to={'./wishlist'}  style={{color:"white",textDecoration:"none",fontFamily:"-moz-initial"}}>Wishlist</Link><br /><br />
               <Link to={'./cart'}  style={{color:"white",textDecoration:"none",fontFamily:"-moz-initial"}}>Cart</Link>

                    </h6>
                    </div>

                    <div style={{fontFamily:"-moz-initial",color:"white"}}>
                        <h4 style={{}}>Guides</h4>
                        <h6>React</h6>
                        <h6>React Bootstrap</h6>
                        <h6>BootsrtapWatch</h6>

                    </div>

                    <div>
                        <h4 style={{color:"white",fontFamily:"-moz-initial"}}>Contact Us</h4>
                        <div className='d-flex'>
                   <input type="text" placeholder='Enter Your Email' className='form-control'/>
                    <Button variant="warning ms-2">Subscribe</Button>{' '}
                   </div>
                        
                            {/* icons */}
                            <div className="icons mt-3 ms-5">
                                <a href="#"><i class="fab fa-facebook fa-lg ms-3"></i></a>
                                <a href="#"><i class="fab fa-twitter fa-lg ms-3"></i></a>
                                <a href="#"><i class="fab fa-instagram fa-lg ms-3"></i></a>
                                <a href="#"><i class="fab fa-linkedin fa-lg ms-3 "></i></a>
                            </div>
                    </div>


            </div>


            <div>
                {/* copyright */}
                <p className="text-center text-white mt-5">&copy; Copyright 2021. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer