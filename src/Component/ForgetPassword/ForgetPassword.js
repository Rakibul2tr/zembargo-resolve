import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

function ForgetPassword() {
    // const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin ? userLogin : {};

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        
        fetch(`http://localhost:5000reset-password/${userInfo._id}/${userInfo.token}`,{
            method:'PUT',
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
    
    return (
        <>
            <h5>Change Password</h5>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {/* <Col sm={12} md={6} className='mb-2'>
                    <Form.Group className="mb-3" controlId="Old_Password">
                        <Form.Label>Old Password</Form.Label>
                        <Form.Control type="password"{...register('oldPassword', { required: true })} placeholder="Old Password" />
                    </Form.Group>
                </Col> */}
                <Col sm={12} md={6} className='mb-2'>
                    <Form.Group className="mb-3" controlId="New_Password">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password"{...register('password', { required: true })} placeholder="New Password" />
                    </Form.Group>
                </Col>
                <Col sm={12} md={6} className='mb-2'>
                    <Form.Group className="mb-3" controlId="Confirm_New_Password">
                        <Form.Label>Confirm New Password</Form.Label>
                        <Form.Control type="password"{...register('password2', { required: true })} placeholder="Confirm New Password" />
                    </Form.Group>
                </Col>
                <Button variant="white" type="submit" className='border border-dark'>
                    Update Password
                </Button>
            </Form>
        </>
    )
}

export default ForgetPassword;