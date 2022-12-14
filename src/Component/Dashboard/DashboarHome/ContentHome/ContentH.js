import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import FecthHook from '../../../../hooks/FecthHook';
import './ContentH.css';

const ContentH = () => {
    const {homeRealy}=FecthHook();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch(`http://localhost:5000/homeReaoy/${data._id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    }).then(res=>res.json())
    .then(data=>{
       if(data.acknowledged==true){
           alert('Your data Is Updated.')
       }
    })
    }
    
    return (
        <div className='text-dark '>
            <Container>
                <Row>      {/* Content section */}
                <div className="content-section p-5">
                    <h5 className='text-dark'>Reliability Content</h5>
                   {
                       homeRealy.map(item=> <form key={item._id}onSubmit={handleSubmit(onSubmit)} className='mobiledevice p-3'>
                           <input type="hidden" {...register("_id")} defaultValue={item._id} />
                       <div className="home-tile">
                           <label htmlFor="">Title</label><br/>
                           <div className='etitablefild'>
                               <i className="far fa-edit"></i>
                               <input type="text" defaultValue={item.title} {...register("title", { required: true,minLength:0 })} placeholder='title' />
                           </div>
                       </div><br/>

                       <div className="description">
                           <label htmlFor="">Description</label><br/>
                           <div className='etitablefild'>
                               <i className="far fa-edit"></i>
                               <input type="textaria" defaultValue={item.des} {...register("des", { required: true,minLength:0 })} placeholder='Description' />
                           </div>
                       </div><br/>

                       <div className="coverPhoto">
                           <label htmlFor="">Image Url</label><br/>
                           <div className="etitablefild">
                           <input type="text"defaultValue={item.img} {...register("img", { required: true,minLength:0 })} placeholder='Image' />
                          
                           </div>
                       </div>
                       <button className='btn border border-dark mt-3' type='submit'>Update</button>
                   </form>)
                   }
                </div>
                </Row>
            </Container>
        </div>
    );
};

export default ContentH;