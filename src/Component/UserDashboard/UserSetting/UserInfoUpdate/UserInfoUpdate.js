import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import FecthHook from '../../../../hooks/FecthHook';
import './UserInfoUpdate.css';

function UserInfoUpdate() {
    const [user,setUser]=useState()

    useEffect(()=>{
        let userData =JSON.parse(localStorage.getItem('user'))
        setUser(userData)
    },[])
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin ? userLogin : {};
    const {userdata}=FecthHook();
      
    const filterdata= userdata?.filter(item=>{return item._id==user?._id})
    const filteringuserdata=(filterdata[0]);

    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    
    fetch(`http://localhost:5000/manegeuser/${data.id}`,{
            method:'PUT',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                alert('Your orders is updated successfull.')
                
            }
        })
  }
    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col sm={6} md={6} className='mb-4'>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text"
                            {...register('name', { required: true })}
                            defaultValue={user?.name}
                             placeholder="Full Name" />
                        </Form.Group>
                    </Col>
                    <Col sm={6} md={6} className='mb-4'>
                        <Form.Group className="mb-3" controlId="location">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text"
                            defaultValue={filteringuserdata?.location}
                            {...register('location', { required: true, maxLength: 30 })} placeholder="Location" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} md={6} className='mb-4'>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"
                            defaultValue={user?.email}
                            {...register('email', { required: true, maxLength: 30 })} placeholder="Email" />
                        </Form.Group>
                    </Col>
                    <Col sm={6} md={6} className='mb-4'>
                        <Form.Group className="mb-3" controlId="Gender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control type="text"
                             defaultValue={filteringuserdata?.gender}
                            {...register('gender', { required: true, maxLength: 30 })} placeholder="Gender" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} md={6} className='mb-4'>
                        <Form.Group className="mb-3" controlId="Phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="tel"
                            defaultValue={filteringuserdata?.phone}
                            {...register('phone', { required: true, maxLength: 30 })} placeholder="Phone" />
                        </Form.Group>
                    </Col>
                    <Col sm={6} md={6} className='mb-4'>
                        <Form.Group className="mb-3" >
                            <input type="hidden" 
                            defaultValue={user?._id}
                            {...register('id', { required: true })} />
                        </Form.Group>
                    </Col>
                </Row>

                <Button variant="white" type="submit" className='border border-dark'>
                    Save Changes
                </Button>
            </Form>
        </>
    )
}

export default UserInfoUpdate;