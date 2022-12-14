import React from 'react';
import { Button, Container, Row, Spinner } from 'react-bootstrap';
import FecthHook from '../../../hooks/FecthHook';
import './HomeBanner.css';
import bg_Benner from "../../../images/About/Asset-2ldpi.png"

const HomeBanner = () => {
    const { homeheader } = FecthHook();
    // const bgImg = {
    //     backgroundImage: `url(bg_Benner)`,
    
    // }
    return (
        <div className="home-banner-bg" >
            <Container >
                {/* Banner Page */}
                <Row>
                    <div className="col-lg-6">
                        {
                            homeheader.map(item => <div key={item._id} className="banner-content">
                                <h5 className="pt-3">{item.subtitle}</h5>
                                <h1>{item.title}</h1>
                                <p>{item.des}</p>
                                <div className="btn-home-banner  pb-4">
                                    <Button id="btn-banner" className="btn btn-dark btn-lg">Get a Quote</Button>
                                </div>
                            </div>)
                        }
                    </div>
                    <div className='col-lg-6'>
                        <img src={bg_Benner}alt=""/>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default HomeBanner;