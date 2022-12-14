import React from "react";
import { Accordion, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import FecthHook from "../../../hooks/FecthHook";
import servicImg13 from '../../../images/serviceimg/Asset-5ldpi.png'
import './Faqpage.css'

const FaqAccordion = () => {
    const { faqpage } = FecthHook();
    return (
        <div className="faq-section pt-5">
            <div className="faqshadow">
                <Container>
                    <Row className=" justify-content-center align-items-center">
                        <Col sm={12} md={6}>
                            <div className="faq-title p-3">
                                <h6 style={{ color: '#EA4D2E' }}>Need Help?</h6>
                                <h2 className=" fw-bold">Frequently Asked Questions</h2>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <div className="faqserch text-center w-75  d-flex justify-content-center align-items-center mx-auto">
                                <i class="fas fa-search"></i>
                                <input className="w-100 border-0" type="search" name="search" id="" placeholder="Dose Zembargo Offer.." />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row className="py-5 faqQuesrow">
                    <Accordion>
                        {
                            faqpage.length === 0 ? <Spinner className='loaderservice' animation="border" variant="danger" /> : faqpage.map(item => <Accordion.Item key={item._id} eventKey={item._id} id="accrdionItem">
                                <Accordion.Header className="ms-4">{item.title}</Accordion.Header>
                                <Accordion.Body style={{ paddingLeft: '50px' }}>
                                    <ol>
                                        <li>{item.des}</li>
                                    </ol>
                                    <Link to="/">
                                        <button className="btn-accrdion">{item.linkcontent}</button>
                                    </Link>
                                </Accordion.Body>
                            </Accordion.Item>)
                        }

                    </Accordion>
                </Row>
                {/* Contact us  section  start*/}
                <Row className="d-flex justify-content-center align-items-center py-5 mt-3">
                    <Col sm={12} md={6}>
                        <div className="service-text w-75 mx-auto">
                            <h6 style={{ color: '#EA4D2E' }}>Couldn't find your question?</h6>
                            <h2 className='fw-bold fs-1'>Contact us with any questions</h2>
                            <h5 className="py-2">
                                Phone – 07415 344 198<br />
                                Email - <a className='text-danger' href="#f">info@zembargo.co.uk</a>
                            </h5>
                            <div className=""><a className='text-danger' href="#k">Send Us Massege <i class="fas fa-arrow-circle-right"></i></a></div>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="service-right-img">
                            <img class="img-fluid" src={servicImg13} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FaqAccordion;