import React from 'react';
import { useForm } from 'react-hook-form';
import '../Quate.css'

const EmailField = (props) => {

  const getdata1=window.localStorage.getItem('step1')
  const getdata2=window.localStorage.getItem('step2')
  const getdata3=window.localStorage.getItem('step3')
  const quatedata1=JSON.parse(getdata1)
  const quatedata2=JSON.parse(getdata2)
  const quatedata3=JSON.parse(getdata3)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
       data.quatedata1=quatedata1;
       data.quatedata2=quatedata2;
       data.quatedata3=quatedata3;
      fetch('http://localhost:5000/QuateEmailSender',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data){
          alert('Pleas Check Your Email And Conform Your Booking.')
          props.setnextPage('conform')
        }
      })
      


        
    }
    return (
        <div className='emailsection'>
          <h3 className='text-center'><i className="far fa-envelope"></i> Email My Quote</h3>
            <p className='p-3'>Please enter an email address below and we’ll send a copy of the quote</p>
          <div className="emailform text-center">
          <form onSubmit={handleSubmit(onSubmit)} className='mb-3'>
            <input
             className='w-100 rounded' 
             type="email" 
             {...register('email', { required: true })} 
             id=""
             placeholder='motolani.fatuga@gmail.com' />
            <button type="submit" className='btn btn-danger text-white mt-3 w-100'>Send Email</button>
          </form>
        </div>
        </div>
    );
};

export default EmailField;