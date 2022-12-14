import React, { useState } from 'react';
import { Container, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import FecthHook from '../../../hooks/FecthHook';
import HeaderAbout from './AboutHeader/HeaderAbout';

const DashboardAbout = () => {
    const { aboutpage } = FecthHook();
    const [show, setShow] = useState(false);
    const [data, setdata] = useState({});

    const handleClose = () => {
        setShow(false)

    };
    const handleShow = (id) => {
        fetch(`http://localhost:5000/aboutedite/${id}`)
            .then(res => res.json())
            .then(data => setdata(data))
        setShow(true)
    }


    const { register, handleSubmit } = useForm();
    const onSubmit = updatedata => {
        fetch(`http://localhost:5000/aboutUpdate/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedata)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    alert('Your data Is Updated.')
                    setShow(false)
                }

            })
    }
    return (
        <div>
            <Container>
                <h1 className='text-center pt-3'>This is About page.</h1>
                <Row>
                    <HeaderAbout />
                </Row>
                {
                    aboutpage.map(item => <Row key={item._id}>      {/* header section */}
                        <div className="header-section p-5">
                            <h5 className='text-dark'>{item.title}</h5>
                            <form action="" method="post" className=' p-3'>
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
                                <div className="coverPhoto">
                                    <label htmlFor="file">Image Url</label><br />
                                    <div className="etitablefild">
                                        <input type="text" defaultValue={item.img2} name="img2" placeholder='Image Link' />
                                    </div>
                                </div>
                            </form>
                            <button className='btn btn-info text-white' onClick={() => handleShow(item._id)}>Edite</button>
                        </div>

                    </Row>)
                }
                <Modal className='mx-auto' show={show} onHide={handleClose}>
                    <Modal.Header closeButton></Modal.Header>
                    <form onSubmit={handleSubmit(onSubmit)} className='p-3 ps-5'>
                        <div className="home-tile">
                            <label htmlFor="title">Title </label><br />
                            <div className='etitablefild'>
                                <input type="text" defaultValue={data.title}  {...register('title', { required: true })} />
                            </div>
                        </div><br />

                        <div className="description">
                            <label htmlFor="">Description</label><br />
                            <div className='etitablefild'>
                                <input type="text"
                                    defaultValue={data.des}

                                    {...register("des", { required: true })}

                                    placeholder='Description' />
                            </div>
                        </div><br />
                        <div className="coverPhoto">
                            <label htmlFor="file">Image Url</label><br />
                            <div className="etitablefild">
                                <img width={"80px"} src={data.img} alt="" /><br />
                                <input type="text" defaultValue={data.img} {...register("img", { required: true })} placeholder='Image' />
                            </div>
                        </div><br /><br />
                        <hr />
                        <div className="home-tile">
                            <label htmlFor="">Title2</label><br />
                            <div className='etitablefild'>
                                <input type="text" defaultValue={data.title2} {...register("title2", { required: true })} placeholder='title' required />
                            </div>
                        </div><br />

                        <div className="description">
                            <label htmlFor="">Description2</label><br />
                            <div className='etitablefild'>
                                <input type="text" defaultValue={data.des2} {...register("des2", { required: true })} placeholder='Description' required />
                            </div>
                        </div><br />
                        <div className="coverPhoto">
                            <label htmlFor="file">Image Url</label><br />
                            <div className="etitablefild">
                                <img width={"80px"} src={data.img2} alt="" /><br />
                                <input type="text" defaultValue={data.img2} {...register("img2", { required: true })} placeholder='Image Link' />
                            </div>
                        </div>
                        <button type='submit' className='btn btn-info mt-3'>Update</button>
                    </form>
                </Modal>
            </Container>
        </div>
    );
};

export default DashboardAbout;