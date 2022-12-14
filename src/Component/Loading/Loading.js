import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = ({size=100}) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}
        >
            <Spinner
            width={size}
            height={size}
            animation="border"
            />

        </div>
    );
};

export default Loading;