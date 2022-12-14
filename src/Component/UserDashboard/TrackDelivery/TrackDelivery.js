import React, { useEffect, useState } from 'react';
import { Form, FormControl, Table } from 'react-bootstrap';
import Prograssbar from './Prograssbar';
import './TrackDelivery.css';

const TrackDelivery = () => {
    const [user,setUser]=useState()
    useEffect(()=>{
        let userData =JSON.parse(localStorage.getItem('user'))
        setUser(userData)
    },[])
    const [booking,setbooking]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/booking')
        .then(res=>res.json())
        .then(data=>{
            setbooking(data);
        })
    },[])

    const userdata=window.localStorage.getItem('userInfo')
    const userInfo=(JSON.parse(userdata));
    
    const filterdata=booking.filter(item=>{return item.email==user?.email})
    const a=filterdata[0]

    //trackin by code
    const [trakCode,setTrckCode]=useState('')
    const [filtercode,setfiltercode]=useState([])
    const trackingCode=(e)=>{
        setTrckCode(e.target.value);
    }
    const submitbtn=()=>{
        console.log('ami');
        if(trakCode !=''){
            const filetertable=booking.filter(o=>Object.keys(o).some(k=>String(o[k]).toLowerCase().includes(trakCode.toLowerCase())));
            setfiltercode([...filetertable])
            
          }else{
            
            setbooking([...booking])
          }
          
    }
   
    return (
      <div className=' container mx-auto'>
        <div className='trakuser'>
         <div className=" d-flex justify-content-around pt-5">
            <div className="headding">
                <h3>Tracking Code <i className="fas fa-arrow-right"></i></h3>
            </div>
            <div className="search">
            <Form className="d-flex tracklistform">
                <FormControl
                type="search"
                placeholder="Code"
                className="me-2"
                aria-label="Search"
                onChange={trackingCode}
                />
                <i className="fas fa-arrow-right"></i>
            </Form>
            </div>
            <div className="submitbtn">
               <button className='btn bg-dark text-white'onClick={submitbtn}>Submit</button>
            </div>
        </div>
        <div className="row py-5 mb-4">
            <div className="col-md-8 offset-8 mx-auto">
                <Prograssbar filtercode={filtercode}/>
            </div>
        </div>
        <div className="row pt-2">
        <Table striped bordered hover >
            <tbody >
            {
                filtercode.length>0?filtercode.map(item=><>
                    <tr key={item._id}>
                    <td className='leftfield'>Quote Reference</td>
                    <td>Quote</td>
                 </tr>
                <tr>
                    <td className='leftfield'>Quote Date</td>
                    <td>{item?.Colectiontime_date}</td>
                </tr>
                <tr>
                    <td className='leftfield'>Collection postcode</td>
                    <td>{item?.collectionPascode}</td>
                </tr>
                <tr>
                    <td className='leftfield'>Delivery Postcode</td>
                    <td>{item?.deliveryPascode}</td>
                </tr>
                <tr>
                    <td className='leftfield'>Delivery Type</td>
                    <td>{item?.platform}</td>
                </tr>
                <tr>
                    <td className='leftfield'>Delivery Vehicle</td>
                    <td>{item?.vehicle}</td>
                </tr>
                <tr>
                    <td className='leftfield'>Delivery Cost (Inc.VAT)</td>
                    <td>{item?.price}</td>
                </tr>
                <tr>
                    <td className='leftfield'>Item Description</td>
                    <td>{item?.description}</td>
                </tr>
                <tr>
                    <td className='leftfield'>Customer Email Address</td>
                    <td>{item?.email}</td>
                </tr>
                <tr>
                    <td className='leftfield'>Quantity</td>
                    <td>{item?.quantity}</td>
                </tr>
                <tr>
                    <td className='leftfield'>Is Item Fragile</td>
                    <td>{item?.bolean}</td>
                </tr>
                <tr>
                    <td className='leftfield'>Status</td>
                    <td>{item?.status}</td>
                </tr></>):<>
                <tr>
                <td className='leftfield'>Quote Reference</td>
                <td>ami</td>
            </tr>
            <tr>
                <td className='leftfield'>Quote Date</td>
                <td>{a?.Colectiontime_date}</td>
            </tr>
            <tr>
                <td className='leftfield'>Collection postcode</td>
                <td>{a?.collectionPascode}</td>
            </tr>
            <tr>
                <td className='leftfield'>Delivery Postcode</td>
                <td>{a?.deliveryPascode}</td>
            </tr>
            <tr>
                <td className='leftfield'>Delivery Type</td>
                <td>{a?.platform}</td>
            </tr>
            <tr>
                <td className='leftfield'>Delivery Vehicle</td>
                <td>{a?.vehicle}</td>
            </tr>
            <tr>
                <td className='leftfield'>Delivery Cost (Inc.VAT)</td>
                <td>{a?.price}</td>
            </tr>
            <tr>
                <td className='leftfield'>Item Description</td>
                <td>{a?.description}</td>
            </tr>
            <tr>
                <td className='leftfield'>Customer Email Address</td>
                <td>{a?.email}</td>
            </tr>
            <tr>
                <td className='leftfield'>Quantity</td>
                <td>{a?.quantity}</td>
            </tr>
            <tr>
                <td className='leftfield'>Is Item Fragile</td>
                <td>{a?.bolean}</td>
            </tr>
            <tr>
                <td className='leftfield'>Status</td>
                <td>{a?.status}</td>
            </tr></>
            }
            </tbody>
          </Table>
        </div>
      </div>
    </div>
    );
};

export default TrackDelivery;