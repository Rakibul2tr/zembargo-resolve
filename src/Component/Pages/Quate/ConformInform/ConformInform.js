import React from 'react';
import { useForm } from 'react-hook-form';
import "../Quate.css";

const ConformInform = (props) => {
    const getdata1=window.localStorage.getItem('step1')
  const getdata2=window.localStorage.getItem('step2')
  const getdata3=window.localStorage.getItem('step3')
  const quatedata1=JSON.parse(getdata1)
  const quatedata2=JSON.parse(getdata2)
  const quatedata3=JSON.parse(getdata3)
  const userdata=window.localStorage.getItem('userInfo')
    const userInfo=(JSON.parse(userdata));
  


  const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.platform=quatedata1.platform
        console.log(data);
        data.status="In progress"
        fetch('http://localhost:5000/booking',{
                method:'POST',
                headers:{
                  'content-type':'application/json'
                },
                body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
          props.setnextPage('ok')
        })
        
    }



  // price calculete
  const price=25
  const multiple= quatedata3.quantity*price;
  let total=[]
    if(quatedata1.platform=='A to B'){
      total=multiple+2.5;
       
    }else if(quatedata1.platform=='Wait & Return ?'){
      total=multiple+3.5;
      
    }
    else if(quatedata1.platform=='Multi-Drop ?'){
      total=multiple+4.5;
      
    }
    

    return (
        <div className='py-5'>
          <h3 className='text-center pb-5 estimithead confarmformhead'style={{fontSize:'30px'}}>Quote Price and Booking Confirmation</h3>
        <div className='conformbody'>
          <div className="confarmaria text-center">
            <div className="headprice text-center">
              <h4>Confirmed Quote Price</h4>
              <h3 className='text-danger'>${total}</h3>
              <small>Including VAT</small>
            </div>
          <form onSubmit={handleSubmit(onSubmit)} className='confarmform m-5 text-start '>
            <input type="hidden"defaultValue={userInfo.pic}{...register('pic')} />
            <input type="hidden"defaultValue={quatedata3.trackingCode}{...register('trackingCode')} />
          {/* name && number filed */}
            <div className="row py-2">  
              <div className="col-md-6">
                <label htmlFor="name">Customer Name</label><br/>
              <input className='w-100 p-2' type="text" {...register('name')} placeholder='Name' />
              </div>
              <div className="col-md-6">
              <label htmlFor="number">Phone Number</label><br/>
              <input className='w-100 p-2' type="tel" {...register('number')} id=""placeholder='Phone number' />
              </div>
            </div>
          {/* email seet */}
            <div className="row py-2">
              <div className="col-md-12">
              <label htmlFor="email">Email Address</label><br/>
              <input className='w-100 p-2' type="email"
              defaultValue={quatedata3.emailadress}
              {...register("email", { required: true})}
               placeholder='motolani.fatuga@gmail.com' />
              </div>
            </div>
            {/* price set */}
            <div className="row py-2">
              <div className="col-md-6">
              <label htmlFor="price">Price</label><br/>
              <input className='w-100 p-2' type="number"
              readOnly
              defaultValue={total}
              {...register("price", { required: true})}
               placeholder='Price' />
              </div>
              {/* mils */}
              <div className="col-md-6">
              <label htmlFor="mils">Miles</label><br/>
              <input className='w-100 p-2' type="text"
              defaultValue=""
              {...register("miles", { required: true})}
               placeholder='give your destence' />
              </div>
            </div>
          {/* time && date */}
            <div className="row py-2">  
              <div className="col-md-6">
                <label htmlFor="date">Earliest Collection Time/Date</label><br/>
              <input className='w-100 p-2' type="text"
              {...register("Colectiontime_date", { required: true})} 
              defaultValue={`${quatedata1.date} * ${quatedata1.time >'12'?`${quatedata1.time} PM`:`${quatedata1.time} AM`}`}placeholder='time_date' />
              </div>
              <div className="col-md-6">
              <label htmlFor="time">Expected Delivery Time/Date</label><br/>
              <input className='w-100 p-2' type="text" 
              {...register('expactime_date')} defaultValue={`${quatedata1.date} * ${quatedata1.time >'12'?`${quatedata1.time} PM`:`${quatedata1.time} AM`}`}placeholder='time_date' />
              </div>
            </div>
             {/* clollection filed */}
          <div className="row py-2">
            <div className="col-sm-6">
            <label htmlFor="pascode">Collection Postcode</label><br/>
            <input
            type="text"
            placeholder="E.G. SE20 4XB"
            defaultValue={quatedata1.Collection_pascode}
            {...register("collectionPascode", { required: true})} 
            className='my-1 p-2 w-100'
            />
            </div>
            <div className="col-sm-6">
            <label htmlFor="pascode">Delivery Postcode</label><br/>
            <input
            type="text"
            placeholder="E.G. E13 5BU"
            defaultValue={quatedata1.Delivery_pascode} 
            {...register("deliveryPascode", { required: true})} 
            className='my-1 p-2 w-100'
            />
            </div>
          </div>

          {/* radio filed */}
          <div className="row py-2 radioinput text-danger">
              <div className="radio-buttons">
                <input
                  id="A_B"
                  value={quatedata1.platform=='A to B'?`${quatedata1.platform}`:''}
                //  defaultValue={quatedata1.platform=='A to B'?`${quatedata1.platform}`:''}
                  type="radio"
                  {...register("platform", { required: true})}
                  className='me-1'
                />
               A to B
                <input
                  id="wait_return"
                  value={quatedata1.platform=='Wait & Return ?'?`${quatedata1.platform}`:''}
                //   defaultValue={quatedata1.platform=='Wait & Return ?'?`${quatedata1.platform}`:''}
                  type="radio"
                  {...register("platform", { required: true})}
                  className='ms-4 me-1'
                />
                 Wait & Return ?
                <input
                  id="multi_drop"
                  value={quatedata1.platform=='Multi-Drop ?'?`${quatedata1.platform}`:''}
                //   defaultValue={quatedata1.platform=='Multi-Drop ?'?`${quatedata1.platform}`:''}
                  type="radio"
                  {...register("platform", { required: true})}
                  className='ms-4 me-1'
                />
                Multi-Drop ?
              </div>
          </div>
          <div className="row">
             <div className="col-md-12">
             <label htmlFor="Same Day">Same Day, Next Day or Later</label><br/>
              <input
              type="text"
              placeholder="Same Day"
              defaultValue={quatedata2.daysellect} 
              {...register("daysellect", { required: true})} 
              className='w-100 p-2'
              />
             </div>
            </div>
            <div className="row">
             <div className="col-md-12">
             <label htmlFor="description">Item Descriptpion</label><br/>
              <input
              type="textarea"
              placeholder="Item Descriptpion"
              defaultValue={quatedata2.description} 
              {...register("description", { required: true})} 
              className='w-100 p-2'
              />
             </div>
            </div>
              {/* wight & kg */}
            <div className="row py-2">
            <div className="col-sm-6">
            <label htmlFor="weight">Total Weight in kg (Optional)</label><br/>
            <input
            type="text"
            name="weight"
            placeholder="Item Weight"
            defaultValue={quatedata3.weight}
            {...register("weight", { required: true})} 
            className='my-1 p-2'
            />
            </div>
            <div className="col-sm-6">
            <label htmlFor="quantity">Quantity</label><br/>
            <input
            type="text"
            name="quantity"
            placeholder="E.G. E13 5BU"
            defaultValue={quatedata3.quantity} 
            {...register("quantity", { required: true})} 
            className='my-1 p-2'
            />
            </div>
          </div>
          {/* yes no filed */}
          <div className="row py-2 radioinput">
              <div className="radio-buttons mb-2">
                <span>Is this item fargile?</span>
                <input
                  id="yes"
                  defaultValue={quatedata3.bolean}
                  type="radio"
                  {...register("bolean", { required: true})} 
                  className='ms-4 me-1'
                />
                 Yes
                <input
                  id="No"
                  defaultValue={quatedata3.bolean}
                  type="radio"
                  {...register("bolean", { required: true})} 
                  className='ms-4 me-1'
                />
                No
              </div>
          </div>
            {/* vehicle van */}
            <div className="row">
              <div className="col-md-12">
              <label htmlFor="vehicle">Vehicle</label><br/>
              <select className='w-100 p-2' id="cars"
               {...register("vehicle", { required: true})}
               defaultValue={quatedata2.vehicle}>
              <option value="small_van">Small Van</option>
              <option value="track">Track</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
              </select>
              </div>
            </div>
            <div className="mt-2">
            <small><a href="#/" className='text-danger'>Click Here</a> to know more about Vehicle Requirement</small>
            </div>
            <div className="conformbtn">
            <button type="submit" className='btn btn-danger text-white mt-3 mx-auto'>Confirm Booking</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    );
};

export default ConformInform;