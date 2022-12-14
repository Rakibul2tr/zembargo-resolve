import React from 'react';
import { useForm } from 'react-hook-form';
import '../Quate.css'

const Quate2 = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        window.localStorage.setItem('step2',JSON.stringify(data))
        props.setnextPage('step3')
    }
    const backbtn=()=>{
        props.setnextPage('step1')
    }
    return (
        <div className='pb-5'>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="step2 my-3">
            <label htmlFor="Same Day">Same Day, Next Day or Later</label><br/>
            <input
            type="text"
            placeholder="Same Day"
            {...register('daysellect', { required: true })} 
            className='my-1 p-2'
            />
            </div>
            <div className="step2 my-3">
            <label htmlFor="description">Item Descriptpion</label><br/>
            <input
            type="textarea"
            {...register('description', { required: true })} 
            placeholder="Item Descriptpion"
            className='my-1 p-2'
            />
            </div>
            <div className="step2 my-3">
            <label htmlFor="vehicle">Vehicle</label><br/>
            <select className='w-100 my-1 p-2 rounded border-1' id="cars" name="vehicle"
            {...register('vehicle', { required: true })} 
            >
            <option value="small_van">Small Van</option>
            <option value="track">Track</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
            </select>
            <small><a href="#/" className='text-danger'>Click Here </a>to know more about Vehicle Requirement</small>
            </div>
            <button className='nex_btn' type='submit'>Next</button>
            <button className='nex_btn2' onClick={backbtn}>Back</button>
        </form>
        </div>
    );
};

export default Quate2;