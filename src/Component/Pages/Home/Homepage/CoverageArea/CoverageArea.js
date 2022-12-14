import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { BsCheckLg } from 'react-icons/bs'
import FecthHook from '../../../../../hooks/FecthHook';
import './CoverageArea.css'
const CoverageArea = () => {
    const {homearea}=FecthHook();
    return (
        <div className="coverege-section py-5 mt-5">
            <Container>
            {
             homearea.map(item=> <Row key={item._id}>
                    
                <div className="col-md-6">
                    <div className="img-coverege text-center">
                        <img className="img-fluid" src={item.img}alt="" />
                    </div>
                </div>
                <div className="col-md-6 px-4">
                    <div className="coverege-content">
                        <h1 className="pb-3">{item.title}</h1>
                        <p>{item.des}</p>
                    </div>
                    <Row>
                        <div className="col-md-6">
                            <div className="area-list">
                                <ul>
                                    <li> <BsCheckLg style={{ marginRight: '5px', color: '#EA4D2E' }} /> {item.li_0}</li>
                                    <li> <BsCheckLg style={{ marginRight: '5px', color: '#EA4D2E' }} /> {item.li_1}</li>
                                    <li> <BsCheckLg style={{ marginRight: '5px', color: '#EA4D2E' }} /> {item.li_2}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="area-list">
                                <ul>
                                    <li> <BsCheckLg style={{ marginRight: '5px', color: '#EA4D2E' }} /> {item.li_3}</li>
                                    <li> <BsCheckLg style={{ marginRight: '5px', color: '#EA4D2E' }} /> {item.li_4}</li>
                                    <li> <BsCheckLg style={{ marginRight: '5px', color: '#EA4D2E' }} /> {item.li_5}</li>
                                </ul>
                            </div>
                        </div>
                    </Row>
                </div>
            </Row>)
            }
               
            </Container>
        </div>
    );
};

export default CoverageArea;