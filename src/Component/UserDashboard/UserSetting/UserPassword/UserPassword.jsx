import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

function UserPassword() {
    return (
        <>
            <h5>Change Password</h5>
            <Form>

                <Col sm={6} md={6} className='mb-4'>
                    <Form.Group className="mb-3" controlId="Old_Password">
                        <Form.Label>Old Password</Form.Label>
                        <Form.Control type="password" placeholder="Old Password" />
                    </Form.Group>
                </Col>
                <Col sm={6} md={6} className='mb-4'>
                    <Form.Group className="mb-3" controlId="New_Password">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" placeholder="New Password" />
                    </Form.Group>
                </Col>
                <Col sm={6} md={6} className='mb-4'>
                    <Form.Group className="mb-3" controlId="Confirm_New_Password">
                        <Form.Label>Confirm New Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm New Password" />
                    </Form.Group>
                </Col>
                <Button variant="white" type="submit" className='border border-dark'>
                    Update Password
                </Button>
            </Form>
        </>
    )
}

export default UserPassword;
