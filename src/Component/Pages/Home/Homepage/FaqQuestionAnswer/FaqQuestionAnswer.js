import React from 'react';
import { Accordion, Container, Row } from 'react-bootstrap';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './FaqQuestionAnswer.css';
const FaqQuestionAnswer = () => {
    return (
        <div className="faq-section " style={{ marginBottom: '100px' }}>
            <Container>
                <h1 className="text-center title">Frequently Asked Questions</h1>
                <Row className='border-bottom'>
                    <div className="col-12">
                        <Accordion>
                            {/* Accordion Item start */}
                            <Accordion.Item eventKey="0" id="accrdionItem">
                                <Accordion.Header className="ms-4">How does it work?</Accordion.Header>
                                <Accordion.Body style={{ paddingLeft: '50px' }}>
                                    <ol>
                                        <li>Create a Free quote online and book your delivery</li>
                                        <li>Your package is picked up from the collection point</li>
                                        <li>Your package is on it’s way to you or the destination point</li>
                                        <li>Your package is successfully delivered with proof of collection and delivery</li>
                                    </ol>
                                    <Link to="/">
                                        <button className="btn-accrdion">I need some information on your service. How can I contact you?</button>
                                    </Link>
                                </Accordion.Body>
                            </Accordion.Item>
                            {/* Accordion Item end */}
                            {/* Accordion Item start */}
                            <Accordion.Item eventKey="1" id="accrdionItem">
                                <Accordion.Header className="ms-4">How do I pay?</Accordion.Header>
                                <Accordion.Body style={{ paddingLeft: '50px' }}>
                                    <ul>
                                        <li>You can pay online which with our safely and secure payment system and our recommended payment method. Following payment you will be receive a payment email confirmation. You can also elect to pay in person or contact us to discuss your specific payment arrangement. We are flexible and are happy to discuss an arrangement to suit your needs.
                                        </li>
                                    </ul>
                                    <Link to="/">
                                        <button className="btn-accrdion">I need some information on your service. How can I contact you?</button>
                                    </Link>
                                </Accordion.Body>
                            </Accordion.Item>
                            {/* Accordion Item end */}
                            {/* Accordion Item start */}
                            <Accordion.Item eventKey="2" id="accrdionItem">
                                <Accordion.Header className="ms-4">Can I make changes to my order?</Accordion.Header>
                                <Accordion.Body style={{ paddingLeft: '50px' }}>
                                    <ul>
                                        <li>Provided our driver has not collected your item and are on route to your destination location, you can contact us by phone or email to make changes to your delivery order. We would advise that you contact us at least 4 hours before your item is schedule to be collected from the pickup location to ensure that we can make the changes you need on time.
                                        </li>
                                        <li>We will let you know if there are any revised costs but if it’s simply to add another small item or wait 5-10 mins for item to be collected, we will do that for no extra costs – we are happy to help to accommodate your needs and the advance notice helps us to do just that.</li>
                                    </ul>
                                    <Link to="/">
                                        <button className="btn-accrdion">I need some information on your service. How can I contact you?</button>
                                    </Link>
                                </Accordion.Body>
                            </Accordion.Item>
                            {/* Accordion Item end */}
                        </Accordion>
                        <Link to="/">
                            <button className="btn-all-faq-accordion d-flex align-items-center"><span as={Link} to={'/faq'}>View all FAQ</span> <BsArrowRightCircle className="ms-2 text-danger" /></button>
                        </Link>
                    </div>
                </Row>
                <hr />
            </Container>
        </div>
    );
};

export default FaqQuestionAnswer;