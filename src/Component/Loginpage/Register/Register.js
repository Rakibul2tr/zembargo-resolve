import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../../actions/userActions';
import ErrorMessage from '../../Loading/ErrorMessage';
import Loading from '../../Loading/Loading';
import servicImg13 from '../../../images/serviceimg/Asset-5ldpi.png';
import './Register.css';

const Register = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    const [picUrl, setPicUrl] = useState('https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg');
    const [picMessage, setPicMessage] = useState(null);
    const { register, reset, handleSubmit } = useForm();
    const imageUploadHandler = (pics) => {
        if (!pics) {
            return setPicMessage('Please select a image')
        };
        setPicMessage(null)
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "zembergoWebData");
            data.append("cloud_name", "dydja7ouv");
            fetch("https://api.cloudinary.com/v1_1/dydja7ouv/image/upload", {
                method: "POST",
                body: data,
            })
                .then((res) => res.json())
                .then((data) => {
                    setPicUrl(data?.url?.toString());
                })
                .catch((err) => {
                });
        } else {
            return setPicMessage("Please Select an Image");
        }
    };

    const dispatch = useDispatch();
    const userRegister = useSelector(state => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    const onSubmit = async subData => {
        setErr(false)
        dispatch(registerUser(subData, picUrl, reset))
    }
    useEffect(() => {
        if (userInfo) {
            navigate('/login')
        }
    }, [navigate, userInfo])
    const errMessage = err || error;

    return (
        <div className='login-section'>
            <Container>
                <Row className='register-img justify-content-center align-items-center py-3 mt-3'>
                    <h1 className=' w-75 sitelogin-text'>Register</h1>
                </Row>
                <Row className='justify-content-center align-items-center pb-5'>
                    <div className="register-form login-form">
                        {errMessage && <ErrorMessage style={{ backgroundColor: 'red' }}>
                            {errMessage}
                        </ErrorMessage>}
                        {loading && <Loading className="my-2" />}
                        <form onSubmit={handleSubmit(onSubmit)} className="d-block m-auto form-dev">
                            <div className="username">
                                <label htmlFor="">Your Full Name *</label><br />
                                <input {...register("name", { required: true, minLength: 0 })} type="text"placeholder='Name *' required />
                            </div><br/>
                            <div className="email">
                                <label htmlFor="">Username or email address *</label><br />
                                <input type="email"{...register("email", { required: true, minLength: 0 })}placeholder='Email *' required />
                            </div><br/>
                            <div className="password">
                                {picMessage && <ErrorMessage style={{ backgroundColor: 'red' }}>
                                    {picMessage}
                                </ErrorMessage>}
                                <label htmlFor="orofile-photo">Select Profile Photo</label>
                                <input type="file" onChange={(e) => imageUploadHandler(e.target.files[0])} id="custom-file"
                                />
                            </div><br/>
                            <div className="password">
                                <label htmlFor="">Password *</label><br />
                                <input {...register("password", { required: true})} type="password" placeholder='Password' required />
                            </div>
                            <button type='submit' className='siteloginbtn btn w-25 border border-danger mt-3'> Register</button>
                            
                        </form>
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

export default Register;