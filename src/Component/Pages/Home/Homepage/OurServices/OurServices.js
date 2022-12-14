import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import FecthHook from '../../../../../hooks/FecthHook';
import './OurServices.css';
const OurServices = () => {

    const {homeservice}=FecthHook();

    return (
        <div className="service-section">
            <Container className='border-bottom'>
                <h1 className="our-service-title">Our Services</h1>
                <Row>
                    {
                        homeservice.map(item=><div key={item._id} className="col-lg-3">
                        <div className="service-content">
                            <div className="icon text-center">
                                <i className={item.icon}style={{ color: '#EA4D2E',fontSize:'50px' }}></i>
                            </div>
                            <h4>{item.title}</h4>
                            <p>{item.des}</p>
                        </div>
                    </div>)
                    }
                </Row> 
                <hr className="my-5"/>
            </Container>
           
        </div>
    );
};

export default OurServices;