import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AboutH from './About/AboutH';
import Areas from './Areas/Areas';
import ContentH from './ContentHome/ContentH';
import './DashboardHome.css'
import HeaderH from './Header/HeaderH';

const DashboardHome = () => {
    return (
        <div className='text-dark py-3'>
            <h1 className='text-dark text-center'>home page customize</h1>
            <Container>
                <Row>      {/* header section */}
                    <HeaderH/>
                </Row>
                <Row>      {/* About section */}
                    <AboutH/>
                </Row>
                <Row>      {/* content section */}
                    <ContentH/>
                </Row>
                <Row>      {/* Areas section */}
                    <Areas/>
                </Row>
            </Container>
        </div>
    );
};

export default DashboardHome;