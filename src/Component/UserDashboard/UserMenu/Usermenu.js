import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './UserMenu.css'

const UserMenu =(props)=> {
   let navigator=useNavigate()
    const [user,setUser]=useState()
    let a=user?.userPic.split('blob:')

    useEffect(()=>{
        let userData =JSON.parse(localStorage.getItem('user'))
        setUser(userData)
    },[])
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin ? userLogin : {};

    const logoutHendal=()=>{
        localStorage.removeItem('user')
        navigator('/')
    }


    return (
        <div className='mt-5 rounded-0'>
            <div className="user-profile-img">
                <img src={a?a[1]:user?.userPic} alt="" />
                <div className="profiletext">
                    <h2>{user?.name}</h2>
                    <p><i style={{marginRight:'5px'}} className="far fa-envelope"></i> {user?.email}</p>
                </div>
            </div>
            <ul className='usermenuUl'>
                <li onClick={() => props.setusermenucontrol("Track Delivery")}><i className="fas fa-truck"></i> Track Delivery</li>
                <li onClick={() => props.setusermenucontrol("Quote History")}><i className="fas fa-history"></i> Quote History</li>
                <li onClick={() => props.setusermenucontrol("Booking History")}><i className="far fa-bookmark"></i> Booking History</li>
                <li onClick={() => props.setusermenucontrol("Setting")}><i className="fas fa-user-cog"></i> Setting</li>
                <li onClick={logoutHendal}><i className="fa-solid fa-right-from-bracket"></i> LogOut</li>
            </ul>
        </div>
    )
}

export default UserMenu;