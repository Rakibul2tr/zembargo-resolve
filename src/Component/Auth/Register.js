import React, { useEffect, useReducer, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './Register.css';
const Register = () => {
  let navigete=useNavigate()
  const initiall={
    name:'',
    email:'',
    userPic:'',
    password:''
  }
  const reducer = (state, action) => {
    if(action.type=='INPUT'){
      return {
        ...state,
          [action.payload.name]:action.payload.value
        }
     }
     else{
      return state;
    }
  };
  const [state,dispatch]=useReducer(reducer,initiall)

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
        
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          navigete('/login');
        })
        .catch((err) => {
        });
    
  }
  
  return (
    <div className="py-5 mt-5">
      <Container>
        <h2 className="text-center">Register</h2>
        {/* {errMessage && <ErrorMessage style={{ backgroundColor: 'red' }}>
          {errMessage}
        </ErrorMessage>} */}
        {/* {loading && <Loading className="my-2" />} */}
        <form onSubmit={handleSubmit} className="d-block m-auto">
          <div className="col-lg-5 d-block m-auto">
            <label htmlFor="orofile-photo">Name</label><br />
            <input className="mt-2 d-block" type="text" name='name'onBlur={(e)=>dispatch({type:'INPUT',payload:{name:e.target.name,value:e.target.value}})} placeholder="Name" required />
          </div>
          <br />
          <div className="col-lg-5 d-block m-auto text-start">
            <label htmlFor="orofile-photo">Email</label><br />
            <input className="mt-2" type="email" placeholder="Email" name='email' onBlur={(e)=>dispatch({type:'INPUT',payload:{name:e.target.name,value:e.target.value}})}required />
          </div>
          <br />
          <div className="col-lg-5 d-block m-auto text-start">
            {/* {picMessage && <ErrorMessage style={{ backgroundColor: 'red' }}>
              {picMessage}
            </ErrorMessage>} */}
            <label htmlFor="orofile-photo">Select Profile Photo</label>
            <input type="file" name='userPic' id="custom-file"onBlur={(e)=>dispatch({type:'INPUT',payload:{name:e.target.name,value:URL.createObjectURL(e.target.files[0])}})}
            />
          </div>
          <br />
          <div className="col-lg-5 d-block m-auto text-start">
            <label htmlFor="orofile-photo">Password</label><br />
            <input className="mt-2" type="password"name='password' placeholder="Password"onBlur={(e)=>dispatch({type:'INPUT',payload:{name:e.target.name,value:e.target.value}})} required />
          </div>
          <br />
          <div className="col-lg-5 d-block m-auto text-start">
            <button className="btn btn-primary mt-2 px-5 py-2 text-end d-block m-auto" type="submit">Register </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Register;