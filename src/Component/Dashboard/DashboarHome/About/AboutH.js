import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import FecthHook from '../../../../hooks/FecthHook';
import './AboutH.css';

const AboutH = () => {
    const {homeabout}=FecthHook();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch(`http://localhost:5000/update/${data._id}`,{
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
        <div className='text-dark py-3'>
            <Container>
                <Row>      {/* About section */}
                <div className="about-section">
                    <h5 className='text-dark'>About</h5>
                    {
                        homeabout.map(item=><form key={item._id} onSubmit={handleSubmit(onSubmit)} className='mobiledevice p-3'>
                         <input type="hidden" {...register("_id")} defaultValue={item._id} />
                         
                        <div className="home-tile">
                            <label htmlFor="">Title</label><br/>
                            <div className='etitablefild'>
                                <i className="far fa-edit"></i>
                                <input type="text"defaultValue={item.title} {...register("title", { required: true,minLength:0 })} placeholder='title' />
                            </div>
                        </div><br/>
                        <div className="sub-title">
                            <label htmlFor="">Sub Title</label><br/>
                            <div className='etitablefild'>
                            <i className="far fa-edit"></i>
                            <input type="text"defaultValue={item.subtitle} {...register("subtitle", { required: true,minLength:0 })} placeholder='title' />
                            </div>
                        </div><br/>
                        <div className="description">
                            <label htmlFor="">Description</label><br/>
                            <div className='etitablefild'>
                                <i className="far fa-edit"></i>
                                <input type="textarea"defaultValue={item.des} {...register("des", { required: true,minLength:0 })} placeholder='Description'/>
                            </div>
                        </div><br/>


                        <div className="description">
                            <label htmlFor="">Call on</label><br/>
                            <div className='etitablefild'>
                                <i className="far fa-edit"></i>
                                <input type="tel"defaultValue={item.phone} {...register("phone", { required: true,minLength:0 })} placeholder='Phone' />
                            </div>
                        </div><br/>

                        <div className="coverPhoto">
                            <label htmlFor="">Image Url</label><br/>
                            <div className="etitablefild">
                            <input type="text"defaultValue={item.img} {...register("img", { required: true,minLength:0 })} placeholder='Image' />
                            </div>
                        </div><br/>
                        <div className="subinput">
                            <input type="text"defaultValue={item.li_0} {...register("li_0", { required: true,minLength:0 })} placeholder='list item' />
                            <input type="text"defaultValue={item.li_1} {...register("li_1", { required: true,minLength:0 })} placeholder='list item' />
                            <input type="text"defaultValue={item.li_2} {...register("li_2", { required: true,minLength:0 })} placeholder='list item' /><br/>
                            <input type="text"defaultValue={item.li_3} {...register("li_3", { required: true,minLength:0 })} placeholder='list item' />
                            <input type="text"defaultValue={item.li_4} {...register("li_4", { required: true,minLength:0 })} placeholder='list item' />
                            <input type="text"defaultValue={item.li_5} {...register("li_5", { required: true,minLength:0 })} placeholder='list item' />
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

export default AboutH;