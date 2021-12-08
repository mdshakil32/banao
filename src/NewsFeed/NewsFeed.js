import React from 'react';
import { ButtonGroup, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import articleImage1 from "../assets/postImage2.png";
import articleImage2 from "../assets/postImage1.png";
import articleImage3 from "../assets/postImage3.png";
import location from "../assets/location.png";
import pen from "../assets/pen.png";
import locationWarning from "../assets/warning.png";
import dot from "../assets/dot.png";
import postImg1 from "../assets/post1.png";
import postImg2 from "../assets/post2.png";
import postImg3 from "../assets/post3.png";
import postImg4 from "../assets/post4.png";
import shareImg from "../assets/share.png";
import calender from "../assets/calender.png";
import bag from "../assets/bag.png";
import './NewsFeed.css';

const NewsFeed = () => {


    return (
        <Container className="newsFeed "> 
        {/* post 1  */}
            <Row className=" px-2">

                <Col md={7} lg={8} className=" mb-4">

                    {/* post 1  */}

                    <Row className="mb-3 border rounded">
                        {/* image  */}
                        <Col sm={12} className="newsFeed-img p-0">
                            <img src={articleImage2} alt="" />
                        </Col>
                        
                        {/* post-info  */}
                        <Col className="post-info">
                           <p className="post-category"> ✍️ Article</p>

                           <Row>
                                <Col sm={10} >

                                {/* post title  */}
                                <h1 className="post-title">What if famous brands had regular fonts? Meet RegulaBrands!</h1>
                                </Col>

                                {/* 3 dot dropdown  */}
                                <Col sm={2} className=" align-self-start"  >
                                   <div className="dropdown-section">
                                        <Dropdown className="float-end">
                                        <Dropdown.Toggle className="post-dropdown-btn" variant="success" id="dropdown-basic">
                                            <span className="fw-bold">...</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </Col>

                                {/* post detail  */}
                                <Col sm={12}>
                                    <p className="post-detail mt-2" >I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                                </Col>

                                {/* post  bottom  */}
                                <Row className="my-3 pe-0">

                                    {/* user name  */}
                                    <Col sm={6} className="d-flex align-items-center" >
                                        <img src={postImg1} alt="" className="post-user-img " />
                                        <h2 className="post-user-name">
                                            Sarthak Kamra <br />
                                            <span className="post-views-sm">1.4k views</span>
                                        </h2>
                                    </Col>

                                    {/* views  */}
                                    <Col sm={6} className="d-flex align-items-center justify-content-end pe-0">
                                        <p className="post-views-lg">
                                            <i className="far fa-eye me-2"></i>
                                            1.4k views
                                        </p>
                                        <div>
                                            <button className="share-btn">
                                                
                                                <img src={shareImg} alt="" />
                                                <span className="share-text">Share</span>
                                            </button>
                                        </div>
                                    </Col>
                                </Row>

                           </Row>
                        </Col>
                    </Row>
                    {/* post 1 end  */}


                    {/* post 2  */}
                    <Row className="mb-3 border rounded">

                        {/* image  */}
                        <Col sm={12} className="newsFeed-img p-0">
                            <img src={articleImage1} alt="" />
                        </Col>
                        
                        {/* post info  */}
                        <Col className="post-info">
                           <p className="post-category">🔬️ Education</p>

                           <Row>
                                <Col sm={10}>

                                    {/* post title  */}
                                <h1 className="post-title">Tax Benefits for Investment under National Pension Scheme launched by Government</h1>
                                </Col>

                                {/* 3 dot dropdown  */}
                                <Col sm={2} className=" align-self-start"  >
                                   <div className="dropdown-section">
                                       <Dropdown className="float-end">
                                        <Dropdown.Toggle className="post-dropdown-btn" variant="success" id="dropdown-basic">
                                        <span className="fw-bold">...</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </Col>

                                {/* post detail  */}
                                <Col sm={12}>
                                    <p className="post-detail mt-2" >I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                                </Col>


                                <Row className="my-3 pe-0">

                                    {/* post user  */}
                                    <Col sm={6} className="d-flex align-items-center" >
                                        <img src={postImg2} alt="" className="post-user-img " />
                                        <h2 className="post-user-name">
                                            Sarah West <br />
                                            <span className="post-views-sm">1.4k views</span>
                                        </h2>
                                    </Col>

                                    {/* post views  */}

                                    <Col sm={6} className="d-flex align-items-center justify-content-end pe-0">
                                        <p className="post-views-lg">
                                            <i className="far fa-eye me-2"></i>
                                            1.4k views
                                        </p>
                                        <div>
                                            <button className="share-btn">
                                                <img src={shareImg} alt="" />
                                                <span className="share-text">Share</span>
                                            </button>
                                        </div>
                                    </Col>
                                </Row>

                           </Row>
                        </Col>
                    </Row>
                    {/* post 2 end  */}


                    {/* post 3  */}
                    <Row className="mb-3 border rounded">

                        {/* image  */}
                        <Col sm={12} className="newsFeed-img p-0">
                            <img src={articleImage3} alt="" />
                        </Col>
                        
                        {/* post info  */}
                        <Col className="post-info">
                           <p className="post-category">🗓️ Meetup</p>

                           <Row>
                                <Col md={11}>

                                    {/* post title  */}
                                <h1 className="post-title">Finance & Investment Elite Social Mixer @Lujiazui</h1>
                                </Col>

                                {/* 3 dot dropdown  */}
                                <Col md={1} className=" align-self-start"  >
                                   <div className="dropdown-section">
                                       <Dropdown className="float-end">
                                        <Dropdown.Toggle className="post-dropdown-btn" variant="success" id="dropdown-basic">
                                        <span className="fw-bold">...</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </Col>

                                {/* post detail  */}
                                <Col sm={12} className="d-flex">
                                    
                                    {/* post date  */}
                                    <p className="post-date"><img src={calender} /> Fri, 12 Oct, 2018</p>

                                    {/* post location  */}
                                    <p className="post-location"><img src={location} /> Ahmedabad, India</p>
                                </Col>

                                <Col sm={12}>
                                    <button className="w-100 visit-btn">Visit Website</button>
                                </Col>


                                <Row className="my-3 pe-0">

                                    {/* post user  */}
                                    <Col sm={6} className="d-flex align-items-center" >
                                        <img src={postImg4} alt="" className="post-user-img " />
                                        <h2 className="post-user-name">
                                            Sarah West <br />
                                            <span className="post-views-sm">1.4k views</span>
                                        </h2>
                                    </Col>

                                    {/* post views  */}

                                    <Col sm={6} className="d-flex align-items-center justify-content-end pe-0">
                                        <p className="post-views-lg">
                                            <i className="far fa-eye me-2"></i>
                                            1.4k views
                                        </p>
                                        <div>
                                            <button className="share-btn">
                                                <img src={shareImg} alt="" />
                                                <span className="share-text">Share</span>
                                            </button>
                                        </div>
                                    </Col>
                                </Row>

                           </Row>
                        </Col>
                    </Row>
                    {/* post 3 end  */}


                    {/* post 4  */}
                    <Row className="mb-3 border rounded">

                        {/* image  */}
                        <Col sm={12} className="newsFeed-img p-0">
                            {/* <img src={articleImage3} alt="" /> */}
                        </Col>
                        
                        {/* post info  */}
                        <Col className="post-info">
                           <p className="post-category">💼️ Job</p>

                           <Row>
                                <Col md={11}>

                                    {/* post title  */}
                                <h1 className="post-title">Software Developer</h1>
                                </Col>

                                {/* 3 dot dropdown  */}
                                <Col md={1} className=" align-self-start"  >
                                   <div className="dropdown-section">
                                        <Dropdown className="float-end">
                                        <Dropdown.Toggle className="post-dropdown-btn" variant="success" id="dropdown-basic">
                                        <span className="fw-bold">...</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </Col>

                                {/* post detail  */}
                                <Col sm={12} className="d-flex">
                                    
                                    {/* post date  */}
                                    <p className="post-date"><img src={bag} /> Innovaccer Analytics Private Ltd.</p>

                                    {/* post location  */}
                                    <p className="post-location"><img src={location} /> Ahmedabad, India</p>
                                </Col>

                                <Col sm={12}>
                                    <button className="w-100 visit-btn text-success">Apply on Timesjobs</button>
                                </Col>


                                <Row className="my-3 pe-0">

                                    {/* post user  */}
                                    <Col sm={6} className="d-flex align-items-center" >
                                        <img src={postImg3} alt="" className="post-user-img " />
                                        <h2 className="post-user-name">
                                            Sarah West <br />
                                            <span className="post-views-sm">1.4k views</span>
                                        </h2>
                                    </Col>

                                    {/* post views  */}

                                    <Col sm={6} className="d-flex align-items-center justify-content-end pe-0">
                                        <p className="post-views-lg">
                                            <i className="far fa-eye me-2"></i>
                                            1.4k views
                                        </p>
                                        <div>
                                            <button className="share-btn">
                                                <img src={shareImg} alt="" />
                                                <span className="share-text">Share</span>
                                            </button>
                                        </div>
                                    </Col>
                                </Row>

                           </Row>
                        </Col>
                    </Row>
                    {/* post 4 end  */}

                    

                </Col>

              

                {/* news feed search box  */}
                <Col  md={5} lg={4} className="pe-0 post-right-side ">
                    {/* <Col md={5} lg={4} className="pe-0 "> */}
                        <form className="input-location ms-auto ">
                            <span><img  src={location} alt="" /> </span>
                            <input type="text" defaultValue="Noida, India" />
                            <span><img src={pen} alt="" /> </span>
                        </form>
                        <div className="location-warning ms-auto">
                            <div className="d-flex">
                            <img className="warning-img" src={locationWarning} alt="" />
                            <p className="warning-text">Your location will help us serve better and extend a personalised experience.</p>
                            </div>
                        </div>
                        {/* </Col> */}
                </Col>
            </Row>
        

        </Container>
    );
};

export default NewsFeed;