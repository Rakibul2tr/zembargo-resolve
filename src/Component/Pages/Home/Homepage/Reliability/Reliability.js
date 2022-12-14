import React from 'react';
import { Container, Row } from 'react-bootstrap';
import FecthHook from '../../../../../hooks/FecthHook';
import './Reliability.css'
const Reliability = () => {
    const {homeRealy}=FecthHook();
    return (
        <div className="reliability-section">
            <Container>
                {
                    homeRealy.map(item=><Row key={item._id}>
                        <div className="col-md-6 ">
                            <div className="reliability-content">
                                <h1 className="py-3">{item.title}</h1>
                                <p>{item.des}</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img-reliability">
                                <img className="img-fluid"style={{display:'block',marginLeft:' 0 auto'}}src={item.img} alt="" />
                            </div>
                        </div>
                    </Row>)
                }
            </Container>
        </div>
    );
};

export default Reliability;