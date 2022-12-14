import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { login } from '../../../actions/userActions';
import ErrorMessage from '../../Loading/ErrorMessage';
import Loading from '../../Loading/Loading';
import './Websitelogin.css'

const WebsiteLogin = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { register, reset, handleSubmit } = useForm();

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    const onSubmit = async subData => {
        dispatch(login(subData, reset, navigate))
    };

    useEffect(() => {
        if (userInfo) {
            navigate(location?.state?.from || '/')
        }
    }, [location?.state?.from, navigate, userInfo])
    const [passwordShown, setPasswordShown] = useState(false);

    const eyebtn = () => {
        setPasswordShown(!passwordShown);

    }
    return (
        <div className='login-section'>
            <Container>
                <Row className='login-img justify-content-center align-items-center py-3 mt-3'>
                    <h1 className=' w-75 sitelogin-text'>Login</h1>
                    {error && <ErrorMessage style={{ backgroundColor: 'red' }}>
                            {error}
                        </ErrorMessage>}
                        {loading && <Loading className="my-2" />}
                </Row>
                <Row className='justify-content-center align-items-center pb-5'>
                   <div className="sitelogin-form login-form">
                   <form onSubmit={handleSubmit(onSubmit)} className="d-block form loginform p-3">
                            <div className="">
                            <label htmlFor="">Username or email address *</label><br />
                                <input type="email" name='email'{...register("email", { required: true, minLength: 0 })} placeholder='exeple@gmail.com' required />
                            </div>

                            <div className="password ">
                             <label htmlFor="">Password *</label><br />
                                <input
                                    {...register("password", { required: true, minLength: 0 })}
                                    name='password'
                                    placeholder='Password'
                                    type={passwordShown ? "text" : "password"}
                                    required />

                                <span toggle="#password-field">
                                    {
                                        passwordShown?<i onClick={eyebtn}className="fas fa-eye opacity-0"></i>:
                                        <i onClick={eyebtn}className="fas fa-eye opacity-9"></i>
                                    }
                                    
                                </span>
                            </div>

                            <div className="loginbtn">
                                <p className="checkbox">
                                    <input type="checkbox" name="checkbox" className='w-auto me-2' />
                                    <label htmlFor="" className='text-dark fs-6'>Remember me</label>
                                </p>

                                <p className="forgate">
                                    <a href="http://" className='text-danger fs-6'>Forgotten password?</a>
                                </p>
                            </div>
                            <p className="">
                                <button type="submit" className='btn   siteloginbtn mt-3'>Login</button>
                            </p>
                        </form>
                         <div className="login-bottom text-center mt-4">
                             <h6 className='text-dark'>Don t have an account?</h6>
                             <Link to="/register"className='text-danger'>Register</Link>
                         </div>
                    </div> 
                </Row>
            </Container>
        </div>
    );
};

export default WebsiteLogin;