import React, { useEffect } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function TeakEmail() {
    // const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin ? userLogin : {};

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        
        fetch(`http://localhost:5000/forget-password`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.matchedCount===1){
             reset()
               alert('Your password Change Successfully.')

           }
        })
    };
    
    useEffect(()=>{
        if(userInfo){
            <Navigate to='/'></Navigate>
        }
    },[])
    return (
        <>
            <h5>Reset Password</h5>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Col sm={12} md={6} className='mb-2'>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control type="email"{...register('email', { required: true })} placeholder="Your Email" />
                    </Form.Group>
                </Col>
                
                <Button variant="white" type="submit" className='border border-dark'>
                    Reset Password
                </Button>
            </Form>
        </>
    )
}

export default TeakEmail;