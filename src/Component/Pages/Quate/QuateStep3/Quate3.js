import React from 'react';
import { useForm } from 'react-hook-form';
import '../Quate.css'

const Quate3 = (props) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        window.localStorage.setItem('step3',JSON.stringify(data))
        props.setnextPage('estimit')
    }
    const userdata=window.localStorage.getItem('userInfo')
    const userInfo=(JSON.parse(userdata));

    // tracking code random
    let trackcode = Math.floor((Math.random() * 1000) + 1);

    return (
        <div className='pb-5'>
          <form onSubmit={handleSubmit(onSubmit)}>
             <input type="hidden"defaultValue={`zem${trackcode}`} {...register('trackingCode', { required: true })} />
           <div className="row py-2 my-2">
                <div className="col-sm-6">
                <label htmlFor="weight">Total Weight in kg (Optional)</label><br/>
                <input
                type="text"
                name="weight"
                {...register('weight', { required: true })}
                placeholder="Item Weight"
                className='my-1 p-2 rounded border-1 w-100'
                />
                </div>
                <div className="col-sm-6">
                <label htmlFor="quantity">Quantity</label><br/>
                <input
                type="text"
                name="quantity"
                {...register('quantity', { required: true })}
                placeholder="E.G. E13 5BU" 
                className='my-1 p-2 rounded border-1 w-100'
                />
                </div>
            </div>
            {/* yes no filed */}
            <div className="row py-2 radioinput">
                <div className="radio-buttons mb-2">
                    <span className='me-3'>Is this item fargile?</span>
                    Yes
                    <input
                    id="yes"
                    value="Yes"
                    {...register('bolean', { required: true })}
                    type="radio"
                    className='me-4 ms-1'
                    />
                    No
                    <input
                    id="No"
                    value="No"
                    {...register('bolean', { required: true })}
                    type="radio"
                    className='me-4 ms-1'
                    />
                </div>
            </div>
            {/* email address */}
            <div className="row">
                <div className="col-md-12 my-2">
                <label htmlFor="email">Email Address</label><br/>
                <input
                type="email"
                defaultValue={userInfo?.email}
                {...register('emailadress', { required: true })}
                placeholder="A copy of the quote will be sent to email address"
                className='my-2 mt-2 p-2 w-100 rounded border-1'
                />
                </div>
            </div>
            <button className='nex_btn quate_btn' type='submit'>Get A Quote</button>
          </form>
        </div>
    );
};

export default Quate3;