import React from 'react';
import './Navigation.css';
import searchIcon from '../assets/search.png';
import titleIcon from '../assets/title.png';
import pathIcon from '../assets/Path.png';
import ovalIcon from '../assets/Oval.png';
import rectangleIcon from '../assets/Rectangle.png';
import { Col, Container, Dropdown, Form, FormControl, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';


const Navigation = () => {

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

                <Col lg={4} md={3} className="float-start"> <img src={titleIcon} alt="" /> </Col>

                <Col lg={4} md={5}>
                    <form className="search-form text-center  d-flex text-info">
                        <span className="search-icon">
                            <img src={searchIcon} alt="" />
                        </span>
                        <input className="m-auto nav-search rounded-pill" type="text" placeholder="Search for your favorite groups in ATG" />
                    </form>
                </Col>

                <Col md={4}>
                    {/* <p className="float-end">register please</p> */}
                    <Dropdown className="float-end">
                    <Dropdown.Toggle className="nav-dropdown-btn" variant="success" id="dropdown-basic">
                        Create account.<span className="text-primary"> It's free!</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Register</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    
                </Col>

            </Row>

        </Container>
        </>
            
        
    );
};

export default Navigation;