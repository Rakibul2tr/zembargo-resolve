import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Contact.css';
const Contact = () => {
    return (
        <div className="contact-section">
            <div className="container">
                <div className="row px-4">
                    <div className="col-sm-6">
                        <h1 className="contact-title">Contact us with any <br /> questions</h1>
                        <br />
                        <br />
                        <h5>Phone - 07415 344 198</h5>
                        <h5>Email - <a href="mailto:info@zembargo.co.uk">info@zembargo.co.uk</a></h5>
                        <br />
                        <Link to="/">
                            <button className="btn-send-msg d-flex align-items-center"><span>
                                Send Us Message</span> <BsArrowRightCircle className="ms-2" /></button>
                        </Link>
                    </div>
                    <div className="col-sm-6 banner">
                        <img style={{ width: "100%" }} src="https://zembargo.co.uk/wp-content/uploads/2021/07/Asset-5ldpi.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
