import React, { useState } from 'react';
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import arrowBack from '../assets/arrow_back.png';
import guluguluIcon from '../assets/gulugulu.png';
import febuIcon from '../assets/febu.png';
import './Banner.css';

const Banner = () => {

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () =>setShowLogin(true) ;
        

    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);

    const goToRegister = () =>{
        setShowLogin(false);
        setShowRegister(true);
    } 
    const goToLogin = () =>{
        setShowRegister(false);
        setShowLogin(true);
    } 

    return (
        <div className="banner">
                <Container className="banner-wrapper">
                    <div className="banner-text">
                        <Col className="d-flex justify-content-between align-items-center banner-arrow-btn p-3">
                          <img className="banner-arrow" src={arrowBack} alt="" />
                          <button onClick={handleShowLogin} className="banner-btn">Join Group</button>
                        </Col>

                        <h1 >Computer Engineering</h1>
                        <p >142,765 Computer Engineers follow this</p>
                    </div>
                </Container>

        {/* login modal  */}
      <Modal show={showLogin} onHide={handleCloseLogin}>

        {/* modal header  */}
        <Modal.Header closeButton>
          <Modal.Title>Welcome back!</Modal.Title>
        </Modal.Header>

        {/* modal body  */}

        <Modal.Body>

            {/* form   */}
            <Form>
            <Form.Control className='rounded-0' type="email" placeholder="Email" />
            <Form.Control className='rounded-0' type="password" placeholder="Password" />
            
            <Col className=" my-4 d-flex justify-content-between align-items-center ">
                <Button className="rounded-pill  form-btn" variant="primary" type="submit">
                    Create Account
                </Button>
                <p onClick={goToRegister} className="toggle-link" >or, Create Account</p> 
            </Col>
            </Form>

            {/* fb button  */}
            <Button className="fb-btn w-100" variant="outline-secondary">
                 <img src={febuIcon} alt="" />
                 Sign up with Facebook
            </Button>
            {/* gulugulu button  */}
            <Button className="gulugulu-btn w-100" variant="outline-secondary">
                 <img src={guluguluIcon} alt="" />
                 Sign up with Gulugulu
            </Button>

            <p className='mt-2 register-footer fw-bold mb-5'>Forgot Password?</p>
        </Modal.Body>
      </Modal>



        {/* register modal  */}
        <Modal show={showRegister} onHide={handleCloseRegister}>

        {/* modal header  */}
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>

        {/* modal body  */}

        <Modal.Body>

            {/* form   */}
            <Form>
                <Col className='d-flex'>
                    <Form.Control className='rounded-0' type="text" placeholder="First Name" />
                    <Form.Control className='rounded-0' type="text" placeholder="Last Name" />
                </Col>         

            <Form.Control className='rounded-0' type="email" placeholder="Email" />
            <Form.Control className='rounded-0' type="password" placeholder="Password" />
            <Form.Control className='rounded-0' type="password" placeholder="Confirm Password" />
            
            <Col className=" my-4 d-flex justify-content-between align-items-center ">
                <Button className="rounded-pill  form-btn" variant="primary" type="submit">
                    Create Account
                </Button>
                <p onClick={goToLogin} className="toggle-link" >or, Sign In</p> 
            </Col>
            </Form>

            {/* fb button  */}
            <Button className="fb-btn w-100" variant="outline-secondary">
                 <img src={febuIcon} alt="" />
                 Sign up with Facebook
            </Button>
            {/* gulugulu button  */}
            <Button className="gulugulu-btn w-100" variant="outline-secondary">
                 <img src={guluguluIcon} alt="" />
                 Sign up with Gulugulu
            </Button>

            <p className='mt-2 register-footer '>By signing up, you agree to our Terms & <br /> conditions, Privacy policy</p>
        </Modal.Body>

        

      </Modal>
        </div>
    );
};

export default Banner;