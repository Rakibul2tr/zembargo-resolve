import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Singlepage from '../ServiceSenglepage/Singlepage';
import DucomentsD from './Ducomentsdelivery/DucomentsD';
import HeaderSer from './Header/HeaderSer';

const Dashboardservice = () => {
  const [show, setShow] = useState(false);

  const handleShow=()=>{
    setShow(true)
  }
    return (
        <>
            <Container>
               <div className="mainhead text-end">
               <h1 className='text-dark text-center'>Service page customize</h1>
               <button className="btn text-center border border-dark "onClick={handleShow}>Add Service +</button>
               </div>
                <Row >
                   <HeaderSer/>
                </Row>
                <Row >
                   <DucomentsD/>
                </Row>
            </Container>
               <Row >
                   <Singlepage showbtn={show} setShow={setShow}/>
               </Row>
        </>
    );
};

export default Dashboardservice;