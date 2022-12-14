import React, { useEffect, useState } from "react";
import { Container, Dropdown, DropdownButton, Nav, Navbar } from "react-bootstrap";
import { AiFillCaretDown } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logOut } from "../../../actions/userActions";
import FecthHook from "../../../hooks/FecthHook";
import logo from "../../../images/logo/Zembargo-logo.svg";
import './Navigation.css';
const Navigaition = () => {
  const [user,setUser]=useState()
  useEffect(()=>{
    let userData =JSON.parse(localStorage.getItem('user'))
    setUser(userData)
  },[])
  const { servicSingle } = FecthHook();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin ? userLogin : {};
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logOut())
    navigate('/')

  }
  return (
    <div className="nav-section">
      <div className="container">
        <div className="row">
          <Navbar expand="lg" fixed="top" className="header" >
            <Container>
              <Navbar.Brand href="#home" className="me-5">
                <img width="160px" src={logo} alt="" />

              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
             {
               user? <NavLink end to="/dashboard" className="acount_btn"><i className="far fa-user-circle"></i></NavLink>: <NavLink end to="/login" className="acount_btn"><i className="far fa-user-circle"></i></NavLink>
             }
              <Navbar.Collapse id="basic-navbar-nav" className="mobile-space">
                <Nav
                  className="  nav-menu me-0"
                  // style={{ maxHeight: "50px" }}
                  navbarScroll
                >
                  <NavLink end to="/"> Home </NavLink>

                  <ul className="service-drop">
                    <li>
                      <ul>
                        <li className="second-menu">
                          {/* Desktop DropDown Menu */}
                          <NavLink end to="/service" className="desktop-drop-menu d-block ms-auto"> Service <AiFillCaretDown /></NavLink>
                          <div className="drop-item-desktop">
                            <div className="drop-item">
                              {
                                servicSingle.map(menuItem => <Link key={menuItem._id}
                                  to={`/service/${menuItem._id}`}>{menuItem.pagename}</Link>)
                              }
                            </div>
                          </div>
                          {/* Mobile DropDown Menu */}

                          <div>
                            <DropdownButton className="drop-item-mobile" style={{ backgroundColor: 'transparent', padding: '0px' }} id="dropdown-basic-button" title="Services" as={Link} to={"/service"}>
                              {
                                servicSingle.map(menuItem => <Dropdown.Item key={menuItem._id}
                                  to={`/service/${menuItem._id}`}>{menuItem.pagename}</Dropdown.Item>)
                              }
                            </DropdownButton>
                          </div>
                          <AiFillCaretDown className="icon-drop-mobile" />
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <NavLink end to="/about"> About Us </NavLink>
                  <NavLink end to="/contact"> Contact</NavLink>
                  <NavLink end to="/faq"> Faq</NavLink>
                  {
                    user?<NavLink end to="/dashboard" className='myAcount' style={{ marginLeft: '25px' }}><i style={{ marginRight: '5px', color: '#ea4d2e', fontSize: '22px' }} className="far fa-user-circle"></i>{user?.name ? user?.name : 'My Account'}</NavLink>:<NavLink end to="/login" className='myAcount' style={{ marginLeft: '25px' }}><i style={{ marginRight: '5px', color: '#ea4d2e', fontSize: '22px' }} className="far fa-user-circle"></i>{user?.name ? user?.name : 'My Account'}</NavLink>
                  }
                  <NavLink end to="/quate" className="btn-quote ms-5">Get A Quote</NavLink>
                  {userInfo && <><NavLink end to='' onClick={handleLogOut} > log Out</NavLink></>}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </div >
  );
};

export default Navigaition;
