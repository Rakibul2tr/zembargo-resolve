import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import FecthHook from '../../../hooks/FecthHook';
import image from '../../../images/contact-page-image/Asset-8ldpi.jpg';
import map from '../../../images/contact-page-image/vt.png';
import './ContactDetails.css';

const ContactDetails = () => {
    const { register, handleSubmit } = useForm();
    const {contact}=FecthHook();
    return (
        <>
            <div className='contact-banner'>
                {/* <img src={image} alt="" /> */}
            </div>
            <div className='py-5'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            {
                                contact.map(item=><div key={item._id} className="box p-5">
                                <h1 className='py-3 fs-2'>{item.title}</h1>
                                <p style={{fontSize:'20px'}}>
                                   {item.des}
                                </p>
                                <br />
                                <h4 style={{fontSize:'20px'}}>Phone - {item.number}</h4>
                                <br />
                                <h4 style={{fontSize:'20px'}}>Email - <a href="https://www.info@zembargo.co.uk">{item.email}</a></h4>
                                <br />
                                <h3 style={{fontSize:'20px'}}>
                                    {item.address}
                                </h3>
                            </div>)
                            }
                            
                            <div className='image-map'>
                                <img className='img-fluid' src={map} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 service">
                            <form onSubmit={handleSubmit()}>
                                <input {...register("name", { required: true })} placeholder="Name*" />
                                <input type="number" {...register("number", { required: true })} placeholder="Phone Number*" />
                                <input {...register("email")} placeholder="Email" />
                                <input {...register("company")} placeholder="Company" />
                                <input type={'url'} {...register("url")} placeholder="Business URL" />
                                <input {...register("subject")} placeholder="Subject" />
                                <textarea {...register("message", { required: true })} rows={4} placeholder="Message*" />
                                <button type='submit' className='send-button mt-2'>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactDetails;