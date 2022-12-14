import React, { useReducer, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const[error,setError]=useState()
    let navigate = useNavigate();
    const reducer=(state,action)=>{
        if(action.type=='INPUT'){
            return{
                ...state,[action.payload.name]:action.payload.value,
            }
        }else{
            return state;
        }
    }
    const initiall={email:'',password:''}
    const [state,dispatch]=useReducer(reducer,initiall)
    const handleSubmit = (e) => {
        e.preventDefault()
       fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
        
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
          let users= JSON.stringify(data)
            if(data.error){
                setError(data.error)
            }
            else{
                localStorage.setItem('user',users)
                
                navigate('/');
                window.location.reload();
            }
        })
        .catch((err) => {
        });
    };

   
    return (
        <div className="py-5 mt-5">
            <Container>
                <h2 className="text-center">Login</h2>
                {error?<h6 className='text-center text-danger mb-0'>{error}</h6>:''}
                
                <form onSubmit={handleSubmit} className="d-block">
                    <br />
                    <div className="col-lg-5 d-block m-auto">
                        <label htmlFor="orofile-photo">Email</label><br />
                        <input className="mt-2" type="email"name='email' placeholder="Email" required onBlur={(e)=>dispatch({type:'INPUT',payload:{name:e.target.name,value:e.target.value}})}/>
                    </div>
                    <br />
                    <div className="col-lg-5 d-block m-auto">
                        <label htmlFor="orofile-photo">Password</label><br />
                        <input className="mt-2" type="password"name='password' placeholder="Password" required onBlur={(e)=>dispatch({type:'INPUT',payload:{name:e.target.name,value:e.target.value}})}/>
                    </div>
                    <br />
                    <div className="col-lg-5 d-block m-auto text-start">
                        <button className="btn btn-primary mt-2 px-5 py-2 text-end d-block m-auto" type="submit"> Login </button>
                    </div>
                </form>
                <Link to="/register" className='text-danger'>create a new account</Link>
            </Container>
        </div>
    );
};

export default Login;