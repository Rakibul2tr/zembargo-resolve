import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import FecthHook from '../../../hooks/FecthHook';

const DashboardContact = () => {
    const { contact } = FecthHook();
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
      
      fetch(`http://localhost:5000/contact/${data._id}`,{
          method:'PUT',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(data=>{
          if(data.modifiedCount==1){
              alert('Your update is Success.')
          }
      })
  }

    return (
        <div>
            <Container>
                <Row className='py-5'>
                    <Col md={12}>
                        <div className="header-section pb-5">
                            <h5 className='text-dark'>Content</h5>
                            {
                                contact.map(item => <form key={item._id} onSubmit={handleSubmit(onSubmit)} className='mobiledevice p-3'>
                                    <input type="hidden" {...register("_id", { required: true })} defaultValue={item._id} />
                                    <div className="home-tile">
                                        <label htmlFor="">Title</label><br />
                                        <div className='etitablefild'>
                                            <i className="far fa-edit"></i>
                                            <input type="text" defaultValue={item.title} {...register("title", { required: true })} placeholder='title' />
                                        </div>
                                    </div><br />
                                    <div className="description">
                                        <label htmlFor="">Description</label><br />
                                        <div className='etitablefild'>
                                            <i className="far fa-edit"></i>
                                            <input type="text" defaultValue={item.des} {...register("des", { required: true })} placeholder='Description' />

                                        </div>
                                    </div><br />
                                    <div className="description">
                                        <label htmlFor="">Number</label><br />
                                        <div className='etitablefild'>
                                            <i className="far fa-edit"></i>
                                            <input type="tel" defaultValue={item.number} {...register("number", { required: true })} placeholder='Phone' />

                                        </div>
                                    </div><br />
                                    <div className="description">
                                        <label htmlFor="">Email</label><br />
                                        <div className='etitablefild'>
                                            <i className="far fa-edit"></i>
                                            <input type="email" defaultValue={item.email} {...register("email", { required: true })} placeholder='exemple@gmail.com' />
                                        </div>
                                    </div><br />
                                    <div className="description">
                                        <label htmlFor="">Address</label><br />
                                        <div className='etitablefild'>
                                            <i className="far fa-edit"></i>
                                            <input type="text" defaultValue={item.address} {...register("address", { required: true })} placeholder='Address' />
                                        </div>
                                    </div><br />
                                    <div className="description">
                                        <label htmlFor="">Loaction</label><br />
                                        <div className='etitablefild'>
                                            <i className="far fa-edit"></i>
                                            <input type="text" defaultValue={item.location} {...register("location", { required: true })} placeholder='Location' />
                                        </div>
                                    </div><br />
                                    <button type='submit' className='btn bg-danger text-white'>Up date</button>
                                </form>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DashboardContact;