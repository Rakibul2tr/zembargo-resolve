import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import about8 from '../../../images/About/Asset-5ldpi.png';
import './About.css'
import FecthHook from '../../../hooks/FecthHook';


const About = () => {
    const { aboutpage, aboutheader } = FecthHook();
    return (
        <div className='service-banner pt-5'>
            <Container className='p-1'>
                {
                    aboutheader.map(headeritem => <Row key={headeritem._id} className="d-flex justify-content-between align-items-center py-5">
                        <Col sm={12} md={6}>
                            <div className="about-text">
                                <h5>{headeritem.subtitle}</h5>
                                <h1>{headeritem.title}</h1>
                                <h5>{headeritem.des}</h5>
                                <div className="about-btn btn bg-dark top-btn"><a className='fs-5' href="#k">Get A Quote</a></div>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <div className="about-right-img">
                                <img className="" width={'100%'} src={headeritem.img} alt="" />
                            </div>
                        </Col>
                    </Row>)
                }

                {/* Reliability section  start*/}
                {
                    aboutpage.length === 0 ? <Spinner className='loaderservice' animation="border" variant="danger" /> : aboutpage.map(item => <div key={item._id}>
                        <Row className="d-flex  justify-content-center align-items-center py-5">
                            <Col sm={12} md={6}>
                                <div className="about-right-img">
                                    <img className="img-fluid" src={item.img} alt="" />
                                </div>
                            </Col>
                            <Col sm={12} md={6}>
                                <div className="about-textallsec ">
                                    <h2>{item.title}</h2>
                                    <h5>{item.des}</h5>
                                </div>
                            </Col>
                        </Row>
                        {/*High-quality section  start*/}
                        <Row className="d-flex justify-content-center align-items-center py-5">
                            <Col sm={12} md={6}>
                                <div className="about-textallsec mx-auto">
                                    <h2>{item.title2}</h2>
                                    <h5>{item.des2}</h5>
                                </div>
                            </Col>
                            <Col sm={12} md={6}>
                                <div className="about-right-img">
                                    <img className="img-fluid" src={item.img2} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </div>)
                }

                {/* Contact us  section  start*/}
                <Row className="d-flex justify-content-center align-items-center py-5">
                    <Col sm={12} md={6}>
                        <div className="about-textallsec mx-auto">
                            <h2 className='phontitle'>Contact us with any questions</h2>
                            <h5 className='phonenumber'>
                                Phone – 07415 344 198<br />
                                Email - <a href="#f">info@zembargo.co.uk</a>
                            </h5>
                            <div className=""><a className='text-danger' href="#k">Send Us Massege <i className="fas fa-arrow-circle-right"></i></a></div>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="about-right-img">
                            <img className="img-fluid" src={about8} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;