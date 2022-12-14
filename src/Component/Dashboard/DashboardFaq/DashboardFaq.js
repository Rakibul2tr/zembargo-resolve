import React, { useState } from 'react';
import { Accordion, Col, Container, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FecthHook from '../../../hooks/FecthHook';
import './DashboardFaq.css';

const DashboardFaq = () => {
    const{faqpage}=FecthHook();
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    fetch('http://localhost:5000/data',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            alert('Your Faq question is Added Successfull.')
            setShow(false)
        }
    })
  }
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
            <Container>
                <Row className='pt-3'>
                    <div className="mainhead  py-3">
                    <h2 className='text-danger'>Frequently Asked Questions</h2>
                    <button className='btn border border-dark'onClick={handleShow}>Add New Faq +</button>
                    </div>
                    <Col>
                    <Accordion className='pb-5'>
                        {
                            faqpage.map(item=><Accordion.Item key={item._id} eventKey={item._id} id="accrdionItem">
                            <Accordion.Header className="ms-4">{item.title}</Accordion.Header>
                            <Accordion.Body style={{ paddingLeft: '50px' }}>
                                <ol>
                                    <li>{item.des}</li>
                                </ol>
                                <Link to="/">
                                    <button className="btn-accrdion">{item.linkcontent}</button>
                                </Link>
                             </Accordion.Body>
                           </Accordion.Item>)
                        }
                    </Accordion>
                    </Col>
                </Row>
                <Row>

                    <Modal className='w-75 ms-5' show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title className='fs-6'>New Entry</Modal.Title>
                        </Modal.Header>
                        <form onSubmit={handleSubmit(onSubmit)}className='w-100 p-5'>
                            <div className="tile">
                                <label htmlFor="">Title</label><br/>
                                <div className='etitablefild'>
                                <input className='w-100' {...register("title")}placeholder='Faq Question' />
                                </div>
                            </div><br/>
                            <div className="description">
                                <label htmlFor="">Description</label><br/>
                                <div className='etitablefild'>
                                <textarea {...register("des")}placeholder='Description' className='w-100' />
                                </div>
                            </div><br/>
                            <div className="home-tile">
                                <label htmlFor="">Link Content</label><br/>
                                <div className='etitablefild'>
                                <input className='w-100'{...register("linkcontent")}placeholder='linkcontent' />
                                </div>
                            </div><br/>
                            <input type="submit"value="Upload"style={{background:'#0073AA',width:'130px',color:'#fff',height:'43px'}} />
                         </form>
                    </Modal>
                </Row>
            </Container>
        </div>
    );
};

export default DashboardFaq;