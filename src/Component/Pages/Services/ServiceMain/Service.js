import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FecthHook from '../../../../hooks/FecthHook';
import servicImg13 from '../../../../images/serviceimg/Asset-5ldpi.png';
import './Service.css'


const Service = () => {
    const { servicehead, services } = FecthHook();

    return (
        <div className='service-banner '>
            <Container className='p-2'>

                {

                    servicehead.map(item => <Row key={item._id} className="d-flex justify-content-between align-items-center py-5">
                        <Col sm={12} md={6}>
                            <div className="service-text">
                                <h5>{item.subtitle}</h5>
                                <h1 className='py-3'>{item.title}</h1>
                                <h5 className='servicbennerh5'>{item.des}</h5>
                                <div className="service-btn btn bg-dark top-btn"><Link className='fs-5' to={'/quate'}>Get A Quote</Link></div>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <div className="service-right-img">
                                <img src={item.img} alt="" />
                            </div>
                        </Col>
                    </Row>)
                }
                {/* service section  start*/}

                {
                    services.length === 0 ? <Spinner className='loaderservice' animation="border" variant="danger" /> : services.map(service => <div key={service._id}>
                        <Row className="d-flex  justify-content-between align-items-center py-5">
                            <Col sm={12} md={6}>
                                <div className="service-right-img">
                                    <img className="img-fluid" src={service.img} alt="" />
                                </div>
                            </Col>
                            <Col sm={12} md={6}>
                                <div className="service-text">
                                    <div className="servic-icon">
                                        <i className={service.icon}></i>
                                    </div>
                                    <h2>{service.title}</h2>
                                    <h5>{service.des}</h5>
                                    <div className="service-btn btn   rounded-pill "><Link className='text-dark' to={'/quate'}>Get A Quote <i class="far fa-arrow-alt-circle-right"></i></Link></div>
                                </div>
                            </Col>
                        </Row>
                        {/* small pallat section  start*/}
                        <Row className="d-flex justify-content-between align-items-center py-5">
                            <Col sm={12} md={6}>
                                <div className="service-text w-75 mx-auto">
                                    <div className="servic-icon">
                                        <i className={service.icon2}></i>
                                    </div>
                                    <h2>{service.title2}</h2>
                                    <h5>{service.des2}</h5>
                                    <div className="service-btn btn border border-dark rounded-pill "><Link className='text-dark' to={'/quate'}>Get A Quote <i class="far fa-arrow-alt-circle-right"></i></Link></div>
                                </div>
                            </Col>
                            <Col sm={12} md={6}>
                                <div className="service-right-img">
                                    <img className="img-fluid" src={service.img2} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </div>)
                }


                {/* Contact us  section  start*/}
                <Row className="d-flex justify-content-center align-items-center py-5">
                    <Col sm={12} md={6}>
                        <div className="service-text w-75 mx-auto">
                            <h2 className='phontitle'>Contact us with any questions</h2>
                            <h5 className='phonenumber'>
                                Phone – 07415 344 198<br />
                                Email - <a className='text-danger' href="#f">info@zembargo.co.uk</a>
                            </h5>
                            <div className="fs-5 mt-4 "><a className='p-1 text-danger' href="#k">Send Us Message <i class="far fa-arrow-alt-circle-right"></i></a></div>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="service-right-img">
                            <img className="img-fluid" src={servicImg13} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Service;