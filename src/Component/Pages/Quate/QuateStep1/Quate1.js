import React from 'react';
import {  useForm } from 'react-hook-form';
import '../../Quate/Quate.css'
import "../Quate.css"

const Quate1 = (props) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        window.localStorage.setItem('step1',JSON.stringify(data))
        props.setnextPage('step2')
    }
    return (
        <div className="container">
            <div className="row">
                <div className='step_1 pb-5'>

                    {/* clollection filed */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row py-2">

                    <div className="col-sm-6 my-1">
                    <label htmlFor="pascode">Collection Postcode</label><br/>
                    <input
                    type="text"
                    {...register('Collection_pascode', { required: true })}
                    placeholder="E.G. SE20 4XB"
                    className='my-1 p-2 rounded border-1'
                    />
                    </div>
                    <div className="col-sm-6 my-1">
                    <label htmlFor="price">Delivery Postcode</label><br/>
                    <input
                    type="text"
                    {...register('Delivery_pascode', { required: true })}
                    placeholder="E.G. E13 5BU" 
                    className='my-1 p-2 rounded border-1'
                    />
                    </div>
                    </div>

                    {/* radio filed */}
                    <div className="row py-2 radioinput">
                        <div className="radio-buttons text-danger">
                        <input
                            id="windows"
                            value='A to B'
                            {...register('platform', { required: true })}
                            type="radio"
                            className='me-1'
                        />
                        A to B
                        <input
                            id="mac"
                            value='Wait & Return ?'
                            {...register('platform', { required: true })}
                            type="radio"
                            className='ms-4 me-1'
                        />
                        Wait & Return ?
                        <input
                            id="linux"
                            value='Multi-Drop ?'
                            {...register('platform', { required: true })}
                            type="radio"
                            className='ms-4 me-1'
                        />
                        Multi-Drop ?
                        </div>
                    </div>

                    {/* delivery filed */}
                    <div className="row py-2 mt-2">
                    <div className="col-sm-6 my-1">
                    <label htmlFor="pascode">Date</label><br/>
                    <input
                    type="date"
                    {...register('date', { required: true })}
                    placeholder=""
                    className='my-1 p-2 rounded border-1'
                    />
                    </div>
                    <div className="col-sm-6 my-1">
                    <label htmlFor="price">Time</label><br/>
                    <input
                    type="time"
                    {...register('time', { required: true })}
                    className='my-1 p-2 rounded border-1'
                    />
                    </div>
                    </div>
                    <button className='nex_btn'  type='submit'>Next</button>
                   </form>
                  </div>
            </div>
        </div>
    );
};

export default Quate1;