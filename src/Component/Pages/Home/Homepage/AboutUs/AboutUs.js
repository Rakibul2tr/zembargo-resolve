import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import FecthHook from '../../../../../hooks/FecthHook';
import './AboutUs.css';
const AboutUs = () => {
    const { homeabout } = FecthHook();


    return (
        <div className="about-us">
            <Container>

                {
                    homeabout.length === 0 ? <Spinner className='loader' animation="border" variant="danger" /> :
                        homeabout.map(item => <Row key={item._id} className='d-flex justify-content-evenly align-items-center'>
                            <div className="col-md-5">
                                <div className="abouthomeimg">
                                    <img className='img-fluid homeaboutimg ' src={item.img} alt="" />
                                </div>
                            </div>

                            <div className="col-md-7 add-about-custom">
                                <h6 style={{ color: '#EA4D2E' }}> <strong>{item.subtitle}</strong></h6>
                                <div className="about-content">
                                    <h1 className="pb-4">{item.title}</h1>
                                    <p className="about-p">{item.des}</p>
                                    <Row className='pb-3' style={{ borderBottom: '1px solid #FFEEEA' }}>
                                        <div className="col-md-6">
                                            <ul className='aboutul'>
                                                <li><i className="fas fa-arrow-circle-right"></i>{item.li_0}</li>
                                                <li><i className="fas fa-arrow-circle-right"></i>{item.li_1}</li>
                                                <li><i className="fas fa-arrow-circle-right"></i>{item.li_2}</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul className='aboutul'>
                                                <li><i className="fas fa-arrow-circle-right"></i>{item.li_3}</li>
                                                <li><i className="fas fa-arrow-circle-right"></i>{item.li_4}</li>
                                                <li><i className="fas fa-arrow-circle-right"></i>{item.li_5}</li>
                                            </ul>
                                        </div>
                                        <br />
                                        <br />
                                    </Row>
                                    <br />
                                    <p className="about-contact-info">If you have any questions, give us a call on <span style={{ color: '#ea4d2e' }}>{item.phone}</span></p>
                                </div>
                            </div>
                        </Row>)
                }

            </Container>
        </div>
    );
};

export default AboutUs;