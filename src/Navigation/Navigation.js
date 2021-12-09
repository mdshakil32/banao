import React, { useState } from 'react';
import './Navigation.css';
import searchIcon from '../assets/search.png';
import titleIcon from '../assets/title.png';
import pathIcon from '../assets/Path.png';
import ovalIcon from '../assets/Oval.png';
import guluguluIcon from '../assets/gulugulu.png';
import febuIcon from '../assets/febu.png';
import rectangleIcon from '../assets/Rectangle.png';
import loginBanner from '../assets/login-banner.png';
import userIcon from "../assets/post3.png";
import { Alert, Button, Col, Container, Dropdown, Form, FormControl, Modal, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';


const Navigation = () => {

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [isLogin, setisLogin] = useState(false);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

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

    // input email 
    const loginEmail =(e)=>{
        setEmail(e.target.value);
    }
    // input pass 
    const loginPass =(e)=>{
        setPass(e.target.value);
    }

    // log in 
    const handleLogin =()=>{

        if( email=="goyal@mail.com" && pass=="123456" ){
            setisLogin(true);
            setShowLogin(false);
        }
        console.log("login please",isLogin,email,pass);  
    }

    // log in 
    const handleLogout =()=>{
            setisLogin(false);
        
    }


 console.log(isLogin);
    return (


        <>
        <Container className="navigation-container-sm py-2">
            <Row className="d-flex sm-nav-img justify-content-end">
                <img src={rectangleIcon} alt="" />
                <img src={ovalIcon} alt="" />
                <img src={pathIcon} alt="" />
            </Row>
        </Container>

        <Container className="navigation-container-lg">
            <Row className=" navigation-lg my-3 ">

                <Col lg={4} md={3} className="float-start"> <img className='mt-2' src={titleIcon} alt="" /> </Col>

                <Col lg={4} md={5}>
                    <form className="search-form text-center  d-flex text-info">
                        <span className="search-icon">
                            <img src={searchIcon} alt="" />
                        </span>
                        <input className="m-auto nav-search rounded-pill" type="text" placeholder="Search for your favorite groups in ATG" />
                    </form>
                </Col>

                <Col md={4}>

                    {/* not login  */}
                    {
                        !isLogin? <Dropdown className="float-end">
                    <Dropdown.Toggle className="nav-dropdown-btn" variant="success" id="dropdown-basic">
                        Create account.<span className="text-primary"> It's free!</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={handleShowLogin} >Login</Dropdown.Item>

                        <Dropdown.Item onClick={handleShowRegister} >Register</Dropdown.Item>
                        

                        <Dropdown.Item  >Something else</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown> :
                    
                    <Dropdown className="float-end">
                    <Dropdown.Toggle className="nav-dropdown-btn" variant="success" id="dropdown-basic">
                        <img className='me-2' src={userIcon} alt="" />
                        Siddharth Goyal
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={handleLogout} >Logout</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    }
                    
                </Col>

            </Row>

        </Container>

{/* login modal  */}
      <Modal size="lg" show={showLogin} onHide={handleCloseLogin}>

        {/* modal header  */}
        <Modal.Header className='custom-modal-header' closeButton>
          Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
            
        </Modal.Header>

        {/* modal body  */}

        <Modal.Body>
            <Row>
                <Col md={12} className=' mb-2 d-flex justify-content-between align-items-center'>
                    <h1 className='modal-title-lg'>Sign In</h1>
                    <p  className="toggle-link-lg m-0" >Don’t have an account yet? <span onClick={goToRegister} className='text-primary'> Create new for free!</span> </p> 
                </Col>
                <Col md={6}>
                    
                    {/* form   */}
                    <Form >
                    <Form.Control onChange={loginEmail} className='rounded-0' type="email" placeholder="Email" />
                    <Form.Control onChange={loginPass} className='rounded-0' type="password" placeholder="Password" />
                        
                    </Form>

                    <Button onClick={handleLogin} className="w-100 my-4 rounded-pill  form-btn" variant="primary" type="submit">
                            Login
                        </Button>

                    {/* fb button  */}
                    <Button  className="fb-btn w-100" variant="outline-secondary">
                        <img src={febuIcon} alt="" />
                        Sign up with Facebook
                    </Button>
                    {/* gulugulu button  */}
                    <Button className="gulugulu-btn w-100" variant="outline-secondary">
                        <img src={guluguluIcon} alt="" />
                        Sign up with Gulugulu
                    </Button>

                    <p className='my-4 register-footer fw-bold mb-5'>Forgot Password?</p>
                </Col>

                {/* login Banner  */}
                <Col md={6}>
                    
                    <img src={loginBanner} alt="" />
                </Col>
            </Row>

            
        </Modal.Body>
      </Modal>


    {/* register modal  */}
        <Modal size="lg" show={showRegister} onHide={handleCloseRegister}>

        {/* modal header  */}
        <Modal.Header className='custom-modal-header' closeButton>
          Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼         
        </Modal.Header>

        {/* modal body  */}

        <Modal.Body>

             <Row>
                <Col md={12} className=' mb-2 d-flex justify-content-between align-items-center'>
                    <h1 className='modal-title-lg'>Create Account</h1>
                    <p  className="toggle-link-lg m-0" >Already have an account? <span onClick={goToLogin} className='text-primary'>Sign In</span> </p> 
                </Col>
                <Col md={6}>
                    
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
                <Button className="rounded-pill  form-btn w-100" variant="primary" type="submit">
                    Create Account
                </Button>
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

                </Col>

                {/* login Banner  */}
                <Col md={6}>
                    
                    <img src={loginBanner} alt="" />
                    <p className='modal-right-footer-lg'>
                       By signing up, you agree to our Terms & conditions, Privacy policy
                    </p>
                </Col>
            </Row>
        </Modal.Body>

        

      </Modal>
  
        </>          
        
    );
};

export default Navigation;