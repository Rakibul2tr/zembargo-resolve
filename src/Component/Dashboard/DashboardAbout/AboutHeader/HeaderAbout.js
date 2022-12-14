import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import FecthHook from '../../../../hooks/FecthHook';
import './HeaderAbout.css';

const HeaderAbout = () => {
const {aboutheader}=FecthHook();
const { register, handleSubmit } = useForm();
const onSubmit = data => {
    fetch(`http://localhost:5000/aboutheaderUpdate/${data._id}`,{
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
        <div className='text-dark'>
            <Container>
                <Row>      {/* header section */}
                <div className="header-section pb-5 pt-2">
                    <h5 className='text-dark'>About Header</h5>
                    {
                        aboutheader.map(item=><form key={item._id} onSubmit={handleSubmit(onSubmit)} className=' p-3'>
                        <input type="hidden" {...register("_id", { required: true})}defaultValue={item._id} />
                        <div className="home-tile">
                            <label htmlFor="">Title</label><br/>
                            <div className='etitablefild'>
                                <i className="far fa-edit"></i>
                                <input type="text" defaultValue={item.title} {...register("title", { required: true })} placeholder='title' />
                            </div>
                        </div><br/>
                        <div className="sub-title">
                            <label htmlFor="">Sub Title</label><br/>
                            <div className='etitablefild'>
                                <i className="far fa-edit"></i>
                                <input type="text"defaultValue={item.subtitle} {...register("subtitle", { required: true })} placeholder='sub title' />
                            </div>
                        </div><br/>
                        <div className="description">
                            <label htmlFor="">Description</label><br/>
                            <div className='etitablefild'>
                                <i className="far fa-edit"></i>
                                <input type="text"defaultValue={item.des} {...register("des", { required: true })} placeholder='Description' />
                                
                            </div>
                        </div><br/>
                        <div className="description">
                            <label htmlFor="">Image Url</label><br/>
                            <div className='etitablefild'>
                                <i className="far fa-edit"></i>
                                <input type="text"defaultValue={item.img} {...register("img", { required: true })} placeholder='Description' />
                                
                            </div>
                        </div><br/>
                        <button type='submit' className='btn btn-info text-white'>Up date</button>
                    </form>)
                    }
                </div>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderAbout;