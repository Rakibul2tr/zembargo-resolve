import React from 'react';
import { useForm } from 'react-hook-form';

const MackAdmin = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
    fetch('http://localhost:5000/admin',{
        method:'PUT',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      
      if(data.modifiedCount){
          alert('Admin created is successfull.')
      }
    })
  };
    return (
        <div>
            <div className="row py-5">
                <div className="hedding py-5 text-center text-danger">
                    <h2>Make A Admin From This Field.</h2>
                </div>
                <div className="col-md-8 mx-auto">
                 <form onSubmit={handleSubmit(onSubmit)} className='w-75 p-5 border border-dark mx-auto'>
                    <input className='w-100 p-2' placeholder="Give An Email & Make Admin Him." {...register("email")} /><br/><br/>
                    <input type="submit" value="Make Admin" className=' p-1 w-25'/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MackAdmin;