import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Singlepage.css';

const Singlepage = (props) => {
    const handleClose = () => props.setShow(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    fetch(`http://localhost:5000/servicsingleCreate`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            alert('Your Service is Add Successful')
        }
    })
  }

  
    return (
        <div>

            <Modal show={props.showbtn} onHide={handleClose} className='singlepage'>
                <Modal.Header closeButton>
                <p>New Entry</p>
                </Modal.Header>     {/* header section */}
                <div className="header-section">
                    <form className='mobiledevice p-3' onSubmit={handleSubmit(onSubmit)}>
                        <div className="home-tile">
                            <label htmlFor="" className='fs-3'>Page Name</label><br/>
                            <div className='etitablefild'>
                                <i class="far fa-edit"></i>
                                <input type="text" {...register("pagename")} placeholder='Page Name'required />
                            </div>
                        </div><br/><br/>
                        <label htmlFor="" className='fs-4'>Single Service Header</label><br/>
                        <div className="home-tile">
                            <label htmlFor="">Title</label><br/>
                            <div className='etitablefild'>
                                <i class="far fa-edit"></i>
                                <input type="text" {...register("title1")} placeholder='title'required />
                            </div>
                        </div><br/>
                        <div className="home-tile">
                            <label htmlFor="">Sub Title</label><br/>
                            <div className='etitablefild'>
                                <i class="far fa-edit"></i>
                                <input type="text" {...register("subtitle1")} placeholder='sub title'required />
                            </div>
                        </div><br/>
                        
                        <div className="description">
                            <label htmlFor="">Description</label><br/>
                            <div className='etitablefild'>
                                <i class="far fa-edit"></i>
                                <input type="text" {...register("des1")} placeholder='Description'required />
                            </div>
                        </div><br/>
                        <div className="coverPhoto">
                            <label htmlFor="">Image Url</label><br/>
                            <div className="etitablefild">
                            <input type="text" {...register("img1")} placeholder='image url'required />
                            </div>
                        </div>

                            
                        {/* section 2================== */}
                        <h5 className='text-dark pt-5'>Single Content</h5>
                        <div className="home-tile">
                            <label htmlFor="">Title</label><br/>
                            <div className='etitablefild'>
                                <i class="far fa-edit"></i>
                                <input type="text" {...register("title2")} placeholder='title'required />
                            </div>
                        </div><br/>
                        <div className="description">
                            <label htmlFor="">Description</label><br/>
                            <div className='etitablefild'>
                                <i class="far fa-edit"></i>
                                <input type="textarea" {...register("des2")} placeholder='Description'required />
                            </div>
                        </div><br/>


                        <div className="sub-title">
                            <label htmlFor="">Description2</label><br/>
                            <div className='etitablefild'>
                            <input type="text" {...register("img2")} placeholder='image url'required />
                            </div>
                        </div><br/>

                        <div className="image-link">
                            <label htmlFor="">Service List</label><br/>
                            <div className="submenu">
                            <input type="text" {...register("list_0")} placeholder='service item'required />
                            <input type="text" {...register("list_1")} placeholder='service item'required />
                            <input type="text" {...register("list_2")} placeholder='service item'required /><br/>
                            <input type="text" {...register("list_3")} placeholder='service item'required />
                            <input type="text" {...register("list_4")} placeholder='service item'required />
                            <input type="text" {...register("list_5")} placeholder='service item'required />
                            </div>
                        </div>
                        

                         {/* section 3================== */}
                    <h5 className='text-dark pt-5'>Single Content1</h5>
                        <div className="home-tile">
                            <label htmlFor="">Title</label><br/>
                            <div className='etitablefild'>
                                <input type="text" {...register("title3")} placeholder='title'required />
                            </div>
                        </div><br/>
                        <div className="description">
                            <label htmlFor="">Description</label><br/>
                            <div className='etitablefild'>
                                <input type="textarea" {...register("des3")} placeholder='Description'required />
                            </div>
                        </div><br/>

                        <div className="image-link">
                            <label htmlFor="">Image Url</label><br/>
                            <div className="etitablefild">
                            <input type="text" {...register("img3")} placeholder='Image url'required />
                        </div>
                        <Modal.Footer className='addpagfoterbtn justify-content-center'>
                       <Button variant="primary" type='submit'>
                        Add page
                    </Button>
                    </Modal.Footer>
                  </div>
              </form>
                </div>
            </Modal> 
        </div>
    );
};

export default Singlepage;

// URL.createObjectURL(selectedImage)