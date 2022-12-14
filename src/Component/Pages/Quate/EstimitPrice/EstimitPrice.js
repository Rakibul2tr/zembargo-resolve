import React from 'react';
import { Table } from 'react-bootstrap';
import '../Quate.css'

const EstimitPrice = (props) => {

  const getdata1=window.localStorage.getItem('step1')
  const getdata2=window.localStorage.getItem('step2')
  const getdata3=window.localStorage.getItem('step3')
  const quatedata1=JSON.parse(getdata1)
  const quatedata2=JSON.parse(getdata2)
  const quatedata3=JSON.parse(getdata3)

  const onlineBooking=()=>{
    props.setnextPage('email')
  }

    // price calculete
    const price=25
    const multiple= quatedata3.quantity*price;
    return (
        <div className='estimitsection'>
          <div className="row">
          <h3 className='text-center pb-5 estimithead'style={{fontSize:'30px'}}>Estimated Price</h3>
            <div className="tablearia">
            <Table className='estimit' hover>
              <td style={{background:'#F4F4F4'}}>
                <div className="estimitprice">
                <span className='text-danger'style={{fontSize:'30px',fontWeight:600,display:'block'}}>${multiple}</span>
                <span  style={{fontSize:'11px'}}>EX VAT</span>
                </div>
                </td>
                <td style={{background:'#F4F4F4',borderTop:'0'}}>
                <div className="largtext">
                <span style={{fontSize:'14px',textAlign:'justify',color:'#8E8E8E'}}>Excess Loading/waiting time may be chargeable,but if less than 20 mins, we will waive it.</span>
                </div>
                </td>
                <tbody className=' tablebody'>
                  <tr>
                    <td>Delivery Type</td>
                    <td><small>{quatedata1.platform} (<span>{quatedata2.daysellect}</span>)</small> </td>
                  </tr>
                  <tr>
                    <td>Postcodes</td>
                    <td><small>{quatedata1.Collection_pascode} to {quatedata1.Delivery_pascode}</small></td>
                  </tr>
                  <tr>
                    <td>Miles</td>
                    <td><small>14</small></td>
                  </tr>
                  <tr>
                    <td>Estimated Delivery Time</td>
                    <td><small>{quatedata1.date} * {quatedata1.time}</small></td>
                  </tr>
                  <tr>
                    <td>Quote Reference</td>
                    <td><small>{quatedata3.trackingCode}</small></td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="teblefooter py-3">
            <h6>How can I book this?</h6>
              <p >You can either call us & quote the reference above on <span>020 3834 3433</span> contact us via Whatsapp on <span>07949 388 384</span> or click book online.</p>
              <button onClick={onlineBooking} className='btn onlinebokbtn'>Online Book</button>
            </div>
          </div>
        </div>
    );
};

export default EstimitPrice;