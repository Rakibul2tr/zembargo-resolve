import React from 'react';
import { Container, Row } from 'react-bootstrap';
import bgWorkImg from '../../../../../images/how-its-works/how-its-work.png';
import './HowItsWork.css';
const HowItsWork = () => {
    return (
        <div className="work-section"style={{marginBottom:'100px'}}>
            <h1 className="text-center title mt-70">HOW IT WORKS</h1>
            <Container className="bgWorkImg" style={{ backgroundImage: `url(${bgWorkImg})` }}>
                <Row className="pt-5">
                    <div className="col-3 position-relative">
                        <div className="position-absolute1">
                            <p>Get a Free quote online and book your delivery</p>
                        </div>
                    </div>
                    <div className="col-3 position-relative">
                        <div className="position-absolute2">
                            <p>Your package is on it’s way to you or the destination point</p>
                        </div>
                    </div>
                    <div className="col-3 position-relative">
                        <div className="position-absolute3">
                            <p>Your package is successfully delivered with proof of collection and delivery</p>
                        </div>
                    </div>
                    <div className="col-3 position-relative">
                        <div className="position-absolute4">
                            <p>Your package is picked up from the collection point</p>
                        </div>
                    </div>
                </Row>
            </Container>

        </div>
    );
};

export default HowItsWork;