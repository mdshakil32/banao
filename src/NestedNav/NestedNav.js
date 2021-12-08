// import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Container, Nav, Row,Button, Dropdown, ButtonGroup, Modal, Form } from 'react-bootstrap';
import './NestedNav.css';
import joinIcon from "../assets/join.png";
import downArrow from "../assets/down-arrow.png";

const NestedNav = () => {

    const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div className="">
            <Row className="nested-nav-sm p-2">
            <Container className=" d-flex justify-content-between align-items-center">
                <p className="nested-nav-post"> Posts(368) </p>

                <div>
                <Dropdown className="">
                    <Dropdown.Toggle className="nested-nav-dropdown" variant="success" id="dropdown-basic">
                       Filter: All
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    </div>
            </Container>
            </Row>



            <Container className="nested-nav-wrapper mt-5 mb-3" >
                <Row className="nested-nav gx-1 ">
                    <Col md={7} className=" ps-0">

                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item >
                            <Nav.Link href="/home">All Post(32)</Nav.Link>
                        </Nav.Item>

                        <Nav.Item >
                            <Nav.Link eventKey="link-1">Article</Nav.Link>
                        </Nav.Item>

                        <Nav.Item >
                            <Nav.Link eventKey="link-2">Event</Nav.Link>
                        </Nav.Item>

                        <Nav.Item >
                            <Nav.Link eventKey="link-3">Education</Nav.Link>
                        </Nav.Item>

                        <Nav.Item >
                            <Nav.Link eventKey="link-4">Job</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    </Col>

                    <Col md={5} className=" pe-0">
                        <Col className="d-flex justify-content-end">
                        <Button onClick={handleShow} variant="light" className="write-post-btn me-3 ">
                            Write a Post 
                            <img className="ms-3" src={downArrow} alt="" />
                        </Button>

                        <Button className="join-grp-btn"  size="sm">
                            <img className="join-icon" src={joinIcon} alt="" /> Join Group</Button></Col>
                    </Col>
            </Row>

            {/* modal  */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="text-center" closeButton>
                <Modal.Title >Create Post</Modal.Title>
                </Modal.Header>

                <Modal.Body className="p-0">
                    <Form>  
                        <Form.Group  controlId="exampleForm.ControlTextarea1">
                            
                            <Form.Control placeholder="What's on your mind?" as="textarea" rows={5} />
                        </Form.Group>
                    </Form>

                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Post
                </Button>
                </Modal.Footer>
            </Modal>
            </Container>
        </div>
    );
};

export default NestedNav;