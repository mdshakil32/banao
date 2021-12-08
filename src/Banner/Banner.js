import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import arrowBack from '../assets/arrow_back.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
                <Container className="banner-wrapper">
                    <div className="banner-text">
                        <Col className="d-flex justify-content-between align-items-center banner-arrow-btn p-3">
                          <img className="banner-arrow" src={arrowBack} alt="" />
                          <button className="banner-btn">Join Group</button>
                        </Col>

                        <h1 >Computer Engineering</h1>
                        <p >142,765 Computer Engineers follow this</p>
                    </div>
                </Container>
        </div>
    );
};

export default Banner;