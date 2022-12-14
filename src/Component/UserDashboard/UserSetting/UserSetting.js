import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserInfoUpdate from './UserInfoUpdate/UserInfoUpdate';
import UserPassword from './UserPassword/UserPassword';
import './UserSetting.css';

function UserSetting() {
    const [user,setUser]=useState()
    useEffect(()=>{
        let userData =JSON.parse(localStorage.getItem('user'))
        setUser(userData)
    },[])
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin ? userLogin : {};
    const [Infotoggle, setInfotoggle] = useState('info');
    return (
        <>
            <div className="userSetting">
                <Row>
                    
                    <hr className='w-100 my-3' />

                    <div className="user-profile-img">
                        <img src={user?.userPic} alt="" />
                        <div className="profiletext">
                            <h2>{user?.name}</h2>
                            <div className="">
                                <Link to='' onClick={() => setInfotoggle('info')} className={Infotoggle === 'info' ?'text-danger':'text-dark'}><i class="far fa-edit"></i> Edit Profile</Link> |
                                <Link to='' onClick={() => setInfotoggle('password')} className={Infotoggle === 'password' ?'text-danger':'text-dark'}> <i class="far fa-eye-slash"></i> Change Password</Link>
                            </div>
                        </div>
                    </div>
                </Row>

                <Row>
                    {
                        Infotoggle === 'info' ? <UserInfoUpdate /> : ''
                    }
                    {
                        Infotoggle === 'password' ? <UserPassword /> : ''
                    }
                </Row>
            </div>
        </>
    )
}

export default UserSetting;