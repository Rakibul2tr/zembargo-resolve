import React from 'react';
import { Link } from 'react-router-dom';

const SeccessFull = (props) => {
    const userinfo=window.localStorage.getItem('userInfo')
  const userName=JSON.parse(userinfo)
  const okhandale=()=>{
    props.setnextPage('')
  }
    return (
        <div className='successSection'>
            <div className="modalcontent d-flex justify-content-center align-items-center">
                <div className="text-center ">
                    <div className="okicon">
                        <div className="iconquat">
                        <i className="fas fa-check"></i>
                        </div>
                        <div className="name">
                        <small>Hey {userName.name}</small>
                        </div>
                    </div>
                    <div className="content">
                        <h6>Your Booking is Confirmed!</h6>
                        <p>We receved your order and will begin processing it soon.Please check your email and message for order related details.</p>
                    </div>
                    <div className="okbtn">
                    <button onClick={okhandale}><Link to={'/home'}>Back to home</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeccessFull;