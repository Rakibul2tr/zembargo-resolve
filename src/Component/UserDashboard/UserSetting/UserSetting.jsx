import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserInfoUpdate from './UserInfoUpdate/UserInfoUpdate';
import UserPassword from './UserPassword/UserPassword';
import './UserSetting.css';

function UserSetting() {
    const [Infotoggle, setInfotoggle] = useState('info');
    return (
        <>
            <div className="userSetting">
                <Row>
                    <h2 className='setting-heading'>Setting</h2>
                    <hr className='w-100' />

                    <div className="user-profile-img">
                        <img src="https://avatars.githubusercontent.com/u/35348437?v=4" alt="" />
                        <div className="profiletext">
                            <h2>Helal Uddin</h2>
                            <div className="">
                                <Link to='' onClick={() => setInfotoggle('info')}><i class="far fa-edit"></i> Edit Profile</Link> |
                                <Link to='' onClick={() => setInfotoggle('password')}> <i class="far fa-eye-slash"></i> Change Password</Link>
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
