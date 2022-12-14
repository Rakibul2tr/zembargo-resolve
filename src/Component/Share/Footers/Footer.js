import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer-section">
            <Container className="py-2"> <hr />
                <Row className="py-3 align-items-center border-bottom border-dark">

                    <div className="col-lg-6">
                        <div className="logo">
                            <Link to="/">
                                <img src="https://zembargo.co.uk/wp-content/uploads/2021/07/zembargo-footer-logo.png" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="footer-menu pagelinkul">
                            <ul >
                                <NavLink end to="/">Home </NavLink>
                                <NavLink end to="/service">Services </NavLink>
                                <NavLink end to="/about">About Us </NavLink>
                                <NavLink end to="/contact">Contact </NavLink>
                                <NavLink end to="/faq">FAQ</NavLink>
                            </ul>

                        </div>
                    </div>

                </Row> <hr />
                <Row className="py-3 align-items-center">

                    <div className="col-lg-5">
                        <div className="footer-menu social pb-3">
                            <ul>
                                <li><Link to="/"><FaFacebook /> </Link></li>
                                <li><Link to="/"><FaTwitter /> </Link></li>
                                <li><Link to="/"><FaInstagram /> </Link></li>
                                <li><Link to="/"><FaLinkedin /> </Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="footer-menu2">
                            <ul>
                                <li><Link to="/">Terms & Conditions </Link></li>
                                <li><Link to="/">Privacy Policy</Link></li>
                                <li><Link to="/">Cookie Policy</Link></li>
                                <li><Link to="/">Refund Policy </Link></li>
                                <li><Link to="/">FAQ</Link></li>
                            </ul>

                        </div>
                    </div>
                </Row>
                {/* CopyRight area start */}
                <Row className="pt-3 text-muted copyright-text">
                    <hr />
                    <p className="text-center text-white px-4 pt-2 fs-6">© 2021 Zembargo.co.uk. All rights reserved.</p>
                </Row>
                {/* CopyRight area end */}
            </Container>
        </div>
    );
};

export default Footer;