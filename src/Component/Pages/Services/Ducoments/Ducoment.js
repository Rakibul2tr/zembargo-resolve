import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import servicImg2 from '../../../../images/serviceimg/Asset-2ldpi.png';
import servicImg3 from '../../../../images/ducoment/delivery-man.jpg';
import servicImg13 from '../../../../images/serviceimg/Asset-5ldpi.png';
import '../ServiceMain/Service.css'
import { useParams } from 'react-router-dom';
import FecthHook from '../../../../hooks/FecthHook';


const Ducoment = () => {
    const {servicSingle}=FecthHook();
    const paramid=useParams();

   const ami = servicSingle.filter(item=>{ return item._id == paramid.id;
   })
   let a=(ami[0]);
        // console.log(a.des1);
    return (
        <div className='service-banner pt-3'>
            <Container className='p-1'>
                <Row className="d-flex justify-content-between align-items-center py-5">
                    <Col sm={12} md={6}>
                       {/* {
                           single.map(item=>console.log(item.title1))
                       } */}
                        <div className="service-text p-2">
                            <h5 className='ps-3'>{a?.subtitle1}</h5>
                            <h1 className='fs-1 p-3'>{a?.title1}</h1>
                            <h5>{a?.des1}</h5>
                            <div className="service-btn btn bg-dark top-btn"><a className='fs-5' href="#k">Get A Quote</a></div>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="service-right-img">
                            <img className="img-fluid" src={a?.img1} alt="" />
                        </div>
                    </Col>
                </Row>
                {/* ducoment Reliability section2  start*/}
                <Row className="d-flex  justify-content-center align-items-center pt-5">
                    <Col sm={12} md={12}>
                    <div className="service-text w-75 mx-auto">
                            <h2 className='fw-bold pb-3 fs-2'>{a?.title2}</h2>
                            <h5 className='lh-base mb-5'>{a?.des2}</h5>
                        </div>
                    </Col>
                </Row>
                {/* ducoment Reliability section2  start*/}
                <Row className="d-flex  justify-content-center align-items-center pb-5">
                    <Col sm={12} md={6}>
                        <div className="service-right-img">
                            <img className="img-fluid" src={a?.img2} alt="" />
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="service-text w-75 text-start">
                            <div className="servic-ducoment">
                               <li><i className="fas fa-arrow-circle-right"></i>{a?.list_0}</li>
                                <li><i className="fas fa-arrow-circle-right"></i>{a?.list_1}</li>
                                <li><i className="fas fa-arrow-circle-right"></i>{a?.list_2}</li>
                                <li><i className="fas fa-arrow-circle-right"></i>{a?.list_3}</li>
                                <li><i className="fas fa-arrow-circle-right"></i>{a?.list_4}</li>
                                <li><i className="fas fa-arrow-circle-right"></i>{a?.list_5}</li>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/*  Our First Priority sectio3  start*/}
                <Row className="d-flex justify-content-center align-items-center py-5">
                   <Col sm={12} md={6}>
                        <div className="service-text w-75 mx-auto">
                            <h2 className='fw-bold pb-2 fs-2'>{a?.title3}</h2>
                            <h5>{a?.des3}</h5>
                            
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="service-right-img">
                            <img className="img-fluid" src={a?.img3} alt="" />
                        </div>
                    </Col>
                </Row>
             {/* Get your items section  start*/}
                <Row className="d-flex justify-content-between align-items-center  p-5">
                     <Col sm={12} md={6}>
                     <div className="">
                        <h5 className='lh-base mb-2'>Get Your Product At Your Door</h5>
                        <h2 className='fw-bold fs-1'>Get your items picked up and delivered using Zembargo.</h2>
                     </div>
                     </Col>
                    <Col sm={12} md={6}>
                    <div className="text-center">
                        <div className="service-btn btn border border-dark rounded-pill "><a className='text-dark' href="#k">Get A Quote <i className="fas fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    </Col>
                </Row>
               
                 {/* Contact us  section  start*/}
                 <Row className="d-flex justify-content-center align-items-center py-5">
                   <Col sm={12} md={6}>
                        <div className="service-text w-75 mx-auto">
                            <h2 className='fw-bold fs-1'>Contact us with any questions</h2>
                            <h5>
                            Phone – 07415 344 198<br/>
                            Email - <a href="#f">info@zembargo.co.uk</a>
                            </h5>
                            <div className="service-btn btn border border-dark rounded-pill "><a className='text-dark' href="#k">Get A Quote <i className="fas fa-arrow-circle-right"></i></a></div>
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

export default Ducoment;