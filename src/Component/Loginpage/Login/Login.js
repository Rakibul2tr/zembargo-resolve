import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { login } from '../../../actions/userActions';
import loginlogo from '../../../images/logo/Zembargo-logo.svg';
import ErrorMessage from '../../Loading/ErrorMessage';
import Loading from '../../Loading/Loading';
import servicImg13 from '../../../images/serviceimg/Asset-5ldpi.png';
import './Login.css';
const Login = () => {
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
        <div className='login-section py-5'>
            <Container>
               <Row className='login-img justify-content-center align-items-center py-3 mt-3'>
                   
                    <h2 className="text-center fs-1 fw-bolder mt-5">Login</h2>
                </Row>
                <Row className='justify-content-center align-items-center pb-5 '>
                    <div className="login-form">
                        <div className=''>
                            <div className="loginlogo w-25 pb-5">
                                <img className='img-fluid' src={loginlogo} alt="" />
                            </div>
                        </div>
                        {error && <ErrorMessage style={{ backgroundColor: 'red' }}>
                            {error}
                        </ErrorMessage>}
                        {loading && <Loading className="my-2" />}
                        <form onSubmit={handleSubmit(onSubmit)} className="d-block form form-dev p-3">
                            <div className="emaildiv">
                            <label htmlFor="">Username or email address *</label><br />
                                <input type="email" name='email'{...register("email", { required: true, minLength: 0 })} placeholder='exeple@gmail.com' required />
                            </div>
                            <label htmlFor="">Password *</label><br />
                            <div className="password d-flex justify-content-center align-items-center">
                                <input
                                    {...register("password", { required: true, minLength: 0 })}
                                    name='password'
                                    placeholder='Password'
                                    type={passwordShown ? "text" : "password"}
                                    required />

                                <span toggle="#password-field">
                                    <i onClick={eyebtn}
                                        className="fas fa-eye"></i>
                                </span>
                            </div>
                            <button type='submit' className='siteloginbtn btn w-25 border border-danger mt-3'>Login</button>
                            <div className="loginbtn">
                                <div className="checkbox">
                                    <input type="checkbox" name="checkbox" className='w-auto me-2' />
                                    <label htmlFor="" className='text-dark'>Remember me</label>
                                </div>

                                <div className="forgate">
                                    <Link to="/forget-password" className='text-danger' >Forgotten password?</Link>
                                </div>
                            </div>
                            
                            {/* <p className="button">
                                <button type="submit" className='btn text-center d-block m-auto adminlogin mt-3'>Login</button>
                            </p> */}
                        </form>
                        <Link to="/register" className=' py-2 w-50 px-4 d-block m-auto rounded text-center'>Create a new Account</Link>
                    </div>
                </Row>
                <Row className="d-flex justify-content-center align-items-center py-2">
                   <Col sm={12} md={6}>
                        <div className="service-text w-75 mx-auto">
                            <h2 className='fw-bold fs-1'>Contact us with any questions</h2>
                            <h5>
                            Phone – 07415 344 198<br/>
                            Email - <a href="#f">info@zembargo.co.uk</a>
                            </h5>
                            <div className="service-btn btn border border-dark rounded-pill "><a className='text-dark' href="#k">Get A Quote <i class="far fa-arrow-alt-circle-right"></i></a></div>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="service-right-img">
                            <img className="img-fluid" src={servicImg13} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;