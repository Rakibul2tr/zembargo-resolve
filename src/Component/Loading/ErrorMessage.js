import React from 'react';
import { Alert, Container } from 'react-bootstrap';

const ErrorMessage = ({variant='white',children}) => {
    return (
        <div>
            <Container>
                <Alert
                style={{fontSize:17,backgroundColor:'red',color:'white',textAlign:'center',}}>
                    <span>{children}</span>
                </Alert>
            </Container>
        </div>
    );
};

export default ErrorMessage;