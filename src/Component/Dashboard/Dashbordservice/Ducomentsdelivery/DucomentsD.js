import React, { useState } from 'react';
import { Container, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import FecthHook from '../../../../hooks/FecthHook';
import './DucomentsD.css';

const DucomentsD = () => {
    const { services } = FecthHook();

    const [show, setShow] = useState(false);
    const [data, setdata] = useState({});

    const handleClose = () => {
        setShow(false)

    };
    const handleShow = (id) => {
        fetch(`http://localhost:5000/edite/${id}`)
            .then(res => res.json())
            .then(data => setdata(data))
        setShow(true)
    }


    const { register, handleSubmit } = useForm();
    const onSubmit = updatdata => {
        fetch(`http://localhost:5000/update/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatdata)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged == true) {
                    alert('Your data Is Updated.')
                }
            })
    }


    return (
        <div className='text-dark py-3'>
            <Container>
                {
                    services.map(item => <Row key={item._id}>      {/* header section */}
                        <div className="header-section mb-4">
                            <h5 className='text-dark'>{item.title}</h5>
                            <form action="" method="post" className='mobiledevice p-3'>
                                <div className="home-tile">
                                    <label htmlFor="">Title</label><br />
                                    <div className='etitablefild'>
                                        <input type="text" defaultValue={item.title} name="title" placeholder='title' />
                                    </div>
                                </div><br />

                                <div className="description">
                                    <label htmlFor="">Description</label><br />
                                    <div className='etitablefild'>
                                        <input type="text" defaultValue={item.des} name="des" placeholder='Description' />
                                    </div>
                                </div><br />
                                <div className="icon">
                                    <label htmlFor="">Icon</label><br />
                                    <div className='etitablefild'>
                                        <input type="text" defaultValue={item.icon} name="icon" placeholder='title' />
                                    </div>
                                </div><br />
                                <div className="coverPhoto">
                                    <label htmlFor="file">Image Url</label><br />
                                    <div className="etitablefild">
                                        <input type="text" defaultValue={item.img} name="img" placeholder='Description' />
                                    </div>
                                </div><br />
                                <hr className=' border-dark w-100' /><br />
                                <h5 className='text-dark'>{item.title2}</h5><br />
                                <div className="home-tile">
                                    <label htmlFor="">Title 2</label><br />
                                    <div className='etitablefild'>
                                        <input type="text" defaultValue={item.title2} name="title2" placeholder='title' />
                                    </div>
                                </div><br />

                                <div className="description">
                                    <label htmlFor="">Description 2</label><br />
                                    <div className='etitablefild'>
                                        <input type="text" defaultValue={item.des2} name="des2" placeholder='Description' />
                                    </div>
                                </div><br />
                                <div className="icon">
                                    <label htmlFor="">Icon 2</label><br />
                                    <div className='etitablefild'>
                                        <input type="text" defaultValue={item.icon2} name="icon2" placeholder='fontawsome class name' />
                                    </div>
                                </div><br />
                                <div className="coverPhoto">
                                    <label htmlFor="file">Image Url</label><br />
                                    <div className="etitablefild">
                                        <input type="text" defaultValue={item.img2} name="img2" placeholder='Image Link' />
                                    </div>
                                </div>
                            </form>
                            <button className='btn btn-info text-white' onClick={() => handleShow(item._id)}>Update</button>
                        </div>

                    </Row>)
                }
                <Modal className='mx-auto' show={show} onHide={handleClose}>
                    <Modal.Header closeButton></Modal.Header>
                    <form onSubmit={handleSubmit(onSubmit)} className='p-3 ps-5'>
                        <div className="home-tile">
                            <label htmlFor="">Title</label><br />
                            <div className='etitablefild'>
                                <input type="text" defaultValue={data.title}  {...register('title', { required: true, minLength: 0 })} required />
                            </div>
                        </div><br />

                        <div className="description">
                            <label htmlFor="">Description</label><br />
                            <div className='etitablefild'>
                                <input type="text"
                                    defaultValue={data.des}
                                    required
                                    {...register("des", { required: true, minLength: 0 })}

                                    placeholder='Description' />
                            </div>
                        </div><br />
                        <div className="icon">
                            <label htmlFor="">Icon</label><br />
                            <div className='etitablefild'>
                                <input type="text" defaultValue={data.icon} {...register("icon", { required: true, minLength: 0 })} placeholder='fontawsome class name' required />
                            </div>
                        </div><br />
                        <div className="coverPhoto">
                            <label htmlFor="file">Image Url</label><br />
                            <div className="etitablefild">
                                <img width={"80px"} src={data.img} alt="" /><br />
                                <input type="text" defaultValue={data.img} {...register("img", { required: true, minLength: 0 })} placeholder='Image' required />
                            </div>
                        </div><br /><br />
                        <hr />
                        <div className="home-tile">
                            <label htmlFor="">Title2</label><br />
                            <div className='etitablefild'>
                                <input type="text" defaultValue={data.title2} {...register("title2", { required: true, minLength: 0 })} placeholder='title' required />
                            </div>
                        </div><br />

                        <div className="description">
                            <label htmlFor="">Description2</label><br />
                            <div className='etitablefild'>
                                <input type="text" defaultValue={data.des2} {...register("des2", { required: true, minLength: 0 })} placeholder='Description' required />
                            </div>
                        </div><br />
                        <div className="icon">
                            <label htmlFor="">Icon2</label><br />
                            <div className='etitablefild'>
                                <input type="text" defaultValue={data.icon2} {...register("icon2", { required: true, minLength: 0 })} placeholder='fontawsome class name' required />
                            </div>
                        </div><br />
                        <div className="coverPhoto">
                            <label htmlFor="file">Image Url</label><br />
                            <div className="etitablefild">
                                <img width={"80px"} src={data.img2} alt="" /><br />
                                <input type="text" defaultValue={data.img2} {...register("img2", { required: true, minLength: 0 })} placeholder='Image Link' />
                            </div>
                        </div>
                        <button type='submit' className='btn btn-info mt-3'>Update</button>
                    </form>
                </Modal>
            </Container>
        </div>
    );
};

export default DucomentsD;