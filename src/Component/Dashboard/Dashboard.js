import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Offcanvas, Row } from 'react-bootstrap';
import logo from '../../images/logo/Zembargo-logo.svg'
import profile from '../../images/Contact/Asset-8ldpi.jpg'
import DashboardAbout from './DashboardAbout/DashboardAbout';
import DashboardFaq from './DashboardFaq/DashboardFaq';
import DashboardContact from './DashbordContact/DashboardContact';
import './Dashboard.css'
import DashboardHome from './DashboarHome/DashboardHome';
import Dashboardservice from './Dashbordservice/Dashboardservice';
import UserMenu from '../UserDashboard/UserMenu/Usermenu';
import UserSetting from '../UserDashboard/UserSetting/UserSetting';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from './UsersList/UsersList';
import BookingList from './DashboardBooking/BookingList';
import QuateHistry from './DashboardQuat/QuateHistry';
import { Link } from 'react-router-dom';
import UserBookingList from '../UserDashboard/UserBooking/UserBookingList';
import UserQuateHistry from '../UserDashboard/UserQuateHis/UserQuateHistry';
import MackAdmin from './MakeAdmin/MackAdmin';
import TrackDelivery from '../UserDashboard/TrackDelivery/TrackDelivery';

const Dashboard = () => {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const [user,setUser]=useState()
    useEffect(()=>{
        let userData =JSON.parse(localStorage.getItem('user'))
        setUser(userData)
    },[])
    const [control, setcontrol] = useState('')
    const [menucontrol, setmenucontrol] = useState('')
    const resetHover = () => setmenucontrol("");
    const [usermenuconrol, setusermenucontrol] = useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
    }
    const handleShow = () => setShow(true);

    return (
        <div style={{ minHeight: '700px', position: 'fixed', width: '100%' }}>
            <div className='mx-auto dashbord-container'>
                <Row className='dashboarnav d-flex justify-content-center align-items-center py-1'>
                    <Col sm={4} >
                        <div className="deshbordlogo w-50 ">
                            <img className='img-fluid' src={logo} alt="" />
                            <Button variant="" onClick={handleShow}>Open</Button>
                        </div>
                    </Col>
                    <Col sm={4} >
                        <div className="heading text-start">
                            <i className="fas fa-stream"></i>
                            <span >{usermenuconrol ? usermenuconrol : `${menucontrol}||`}</span>
                            <span className='fs-6'> {menucontrol == 'website' ? `${control}` : ''}</span>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="profile mx-end">
                            <div className="profile-text text-center me-3">
                                <h6 className="sub-title text-dark m-0 p-0">Good Mornign</h6>
                                <h5 className='title text-dark m-0 p-0'>{user?.name}</h5>
                            </div>
                            <div className=" ">
                                <img width={'50px'} height={'50px'} style={{ borderRadius: '100%' }} src={user?.pic} alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='d-flex align-items-stretch justify-content-center h-100'>
                    {/* mobail device offcanvass dashbord menu */}
                    
                     <div className="offcanvas col-sm-12">
                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title className='text-center text-danger'>Dashboard</Offcanvas.Title>
                            </Offcanvas.Header>
                            {
                                user?.isAdmin?<>
                                <Offcanvas.Body  className='offcanvasmenu h-100'>
                            <div className="sidemenu scroller">
                                    <Link to={'/'} className='text-white me-5'>Home</Link>
                                    <li className="item" id="dashboard">
                                        <a
                                            className={menucontrol === "dashboard" ? "active" : undefined}
                                            onClick={() => setmenucontrol("dashboard")}
                                            onChange={resetHover}
                                            href="#dashboard"><i className="fas fa-hotel"></i>Dashboard <span className='dashbordicon'><i class="fas fa-angle-right"></i></span></a>

                                    </li>

                                    <li className="item" id="Booking_List">
                                        <a
                                            className={menucontrol === "Booking List" ? "active" : undefined}
                                            onClick={() => setmenucontrol("Booking List")}
                                            onChange={resetHover}
                                            href="#Booking_List"><i className="fas fa-list"></i>Booking List<span className='dashbordicon'><i class="fas fa-angle-right"></i></span></a>
                                    </li>

                                    <li className="item" id="Quote_List">
                                        <a
                                            className={menucontrol === "Quote List" ? "active" : undefined}
                                            onClick={() => setmenucontrol("Quote List")}
                                            onChange={resetHover}
                                            href="#Quote_List"><i className="fas fa-history"></i>Quote List<span className='dashbordicon'><i class="fas fa-angle-right"></i></span></a>
                                    </li>
                                    <li className="item" id="User_List">
                                        <a
                                            className={menucontrol === "User List" ? "active" : undefined}
                                            onClick={() => setmenucontrol("User List")}
                                            onChange={resetHover}
                                            href="#User_List"><i className="far fa-user"></i>User List<span className='dashbordicon'><i class="fas fa-angle-right"></i></span></a>
                                    </li>
                                    <li className="item" id="website">
                                        <a
                                            className={menucontrol === "website" ? "active" : undefined}
                                            onClick={() => setmenucontrol("website")}
                                            onChange={resetHover}

                                            href="#website"><i className="fas fa-user-circle"></i>Website<span className='dashbordicon'><i class="fas fa-angle-right"></i></span></a>
                                        <div className="submenu">
                                            <li onClick={() => setcontrol("home")}>Home</li>
                                            <li onClick={() => setcontrol("Service")}>Service</li>
                                            <li onClick={() => setcontrol("about")}>About Us</li>
                                            <li onClick={() => setcontrol("contact")}>Contact</li>
                                            <li onClick={() => setcontrol("faq")}>Faq</li>
                                        </div>
                                    </li>
                                    <li className="item" id="MakeAdmin">
                                        <a
                                            className={menucontrol === "Make Admin" ? "active" : undefined}
                                            onClick={() => setmenucontrol("Make Admin")}
                                            onChange={resetHover}
                                            href="#MakeAdmin"><i className="fas fa-hotel"></i>MakeAdmin<span className='dashbordicon'><i class="fas fa-angle-right"></i></span></a>
                                    </li>
                                    <li className="item" id="dashboard4">
                                        <a
                                            className={menucontrol === "dashboard4" ? "active" : undefined}
                                            onClick={() => setmenucontrol("dashboard4")}
                                            onChange={resetHover}

                                            href="#dashboard4"><i className="fas fa-sign-out-alt"></i>LogOut<span className='dashbordicon'><i class="fas fa-angle-right"></i></span></a>
                                    </li>
                                </div>
                             </Offcanvas.Body>
                                </>:<>
                                <Offcanvas.Body>
                                <div className='dashbord-white-menu offcanvaswithmenu'show={show} onHide={handleClose}>
                                <Link to={'/'} className='text-dark ms-4'>Home</Link>
                                <UserMenu setusermenucontrol={setusermenucontrol} />
                                </div>
                                </Offcanvas.Body>
                                </>
                            }
                        </Offcanvas>
                     </div>
                   

                    {
                        user?.isAdmin ? <>

                            <Col sm={12} md={2} className='dashbordmenu h-100'>
                                <div className="menu scroller">
                                    <Link to={'/'} className='text-white ms-4'>Home</Link>
                                    <li className="item" id="dashboard">
                                        <a
                                            className={menucontrol === "dashboard" ? "active" : undefined}
                                            onClick={() => setmenucontrol("dashboard")}
                                            onChange={resetHover}
                                            href="#dashboard"><i className="fas fa-hotel"></i>Dashboard <span className='dashbordicon'><i class="fas fa-angle-right"></i></span></a>

                                    </li>

                                    <li className="item" id="Booking_List">
                                        <a
                                            className={menucontrol === "Booking List" ? "active" : undefined}
                                            onClick={() => setmenucontrol("Booking List")}
                                            onChange={resetHover}
                                            href="#Booking_List"><i className="fas fa-list"></i>Booking List<span className='dashbordicon'><i class="fas fa-angle-right"></i></span></a>
                                    </li>

                                    <li className="item" id="Quote_List">
                                        <a
                                            className={menucontrol === "Quote List" ? "active" : undefined}
                                            onClick={() => setmenucontrol("Quote List")}
                                            onChange={resetHover}
                                            href="#Quote_List"><i className="fas fa-history"></i>Quote List<span className='dashbordicon'><i class="fas fa-angle-right"></i></span></a>
                                    </li>
                                    <li className="item" id="User_List">
                                        <a
                                            className={menucontrol === "User List" ? "active" : undefined}
                                            onClick={() => setmenucontrol("User List")}
                                            onChange={resetHover}
                                            href="#User_List"><i className="far fa-user"></i>User List<span className='dashbordicon'><i class="fas fa-angle-right"></i></span></a>
                                    </li>
                                    <li className="item" id="website">
                                        <a
                                            className={menucontrol === "website" ? "active" : undefined}
                                            onClick={() => setmenucontrol("website")}
                                            onChange={resetHover}

                                            href="#website"><i className="fas fa-globe-asia"></i>Website<span className='dashbordicon'><i class="fas fa-angle-right"></i></span></a>
                                        <div className="submenu">
                                            <li onClick={() => setcontrol("home")}>Home</li>
                                            <li onClick={() => setcontrol("Service")}>Service</li>
                                            <li onClick={() => setcontrol("about")}>About Us</li>
                                            <li onClick={() => setcontrol("contact")}>Contact</li>
                                            <li onClick={() => setcontrol("faq")}>Faq</li>
                                        </div>
                                    </li>
                                    <li className="item" id="MakeAdmin">
                                        <a
                                            className={menucontrol === "Make Admin" ? "active" : undefined}
                                            onClick={() => setmenucontrol("Make Admin")}
                                            onChange={resetHover}
                                            href="#MakeAdmin"><i className="fas fa-hotel"></i>MakeAdmin<span className='dashbordicon'><i class="fas fa-angle-right"></i></span></a>
                                    </li>
                                    <li className="item" id="dashboard4">
                                        <a
                                            className={menucontrol === "dashboard4" ? "active" : undefined}
                                            onClick={() => setmenucontrol("dashboard4")}
                                            onChange={resetHover}

                                            href="#dashboard4"><i className="fas fa-sign-out-alt"></i>LogOut<span className='dashbordicon'><i class="fas fa-angle-right"></i></span></a>
                                    </li>
                                </div>
                            </Col>
                            <Col sm={12} md={10} className=''>
                                <div className='text-dark scroller'>

                                    {
                                        menucontrol === "Booking List" ? <><BookingList /></> : ""
                                    }
                                    {
                                        menucontrol === "Quote List" ? <><QuateHistry /></> : ""
                                    }
                                    {
                                        menucontrol === "User List" ? <><UsersList /></> : ""
                                    }
                                    {
                                        menucontrol === "website" ?
                                            <>
                                                {
                                                    control === "home" ? <DashboardHome /> : ""
                                                }
                                                {
                                                    control === "Service" ? <Dashboardservice /> : ""
                                                }
                                                {
                                                    control === "about" ? <DashboardAbout /> : ""
                                                }
                                                {
                                                    control === "contact" ? <DashboardContact /> : ""
                                                }
                                                {
                                                    control === "faq" ? <DashboardFaq /> : ""
                                                }

                                            </>

                                            : ""
                                    }
                                    {
                                        menucontrol === "Make Admin" ? <><MackAdmin /></> : ""
                                    }
                                </div>
                            </Col>
                        </> : <>
                            <Col sm={12} md={3} >
                                <div className='dashbord-white-menu'show={show} onHide={handleClose}>
                                <Link to={'/'} className='text-dark ms-4'>Home</Link>
                                <UserMenu setusermenucontrol={setusermenucontrol} />
                                </div>
                            </Col>
                            <Col sm={12} md={9} className='userdashboardcontenfield'>
                                {
                                    usermenuconrol == 'Track Delivery' ? <TrackDelivery /> : ''
                                }
                                {
                                    usermenuconrol == 'Quote History' ? <UserQuateHistry /> : ''
                                }
                                {
                                    usermenuconrol == 'Booking History' ? <UserBookingList /> : ''
                                }
                                {
                                    usermenuconrol == 'Setting' ? <UserSetting /> : ''
                                }
                            </Col>
                        </>
                    }

                </Row>
            </div>
        </div>
    );
};

export default Dashboard;