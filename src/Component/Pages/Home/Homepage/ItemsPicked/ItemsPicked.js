import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { BsArrowRightCircle } from 'react-icons/bs';
import './ItemsPicked.css';
const ItemsPicked = () => {
    return (
        <div className="itemsPicked-section">
            <Container>

                <Row style={{alignItems: 'center'}}>
                    <div className="col-md-8">
                        <div className="itempicked">
                        <h5 className="title py-2">Get Your Product At Your Door</h5>
                        <h1 className="heading-title">Get your items picked up and delivered using Zembargo.</h1>
                        </div>
                    </div>
                    <div className="col-md-4 py-2">
                        <button className="btnItemsPicked d-flex align-items-center"><span>Get A Quote</span> <BsArrowRightCircle className="ms-2" /></button>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default ItemsPicked;