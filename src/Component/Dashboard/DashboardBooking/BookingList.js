import React, { useEffect, useState } from 'react';
import { Form, FormControl, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './BookingList.css';

const BookingList = () => {
    const [show, setShow] = useState(false);
    const [iddata, setiddata] = useState("");
    const [booking, setbooking] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => {
                setbooking(data);
            })
    }, [])

    const statusupdate = (id) => {
        setShow(true)

        const filterdata = booking.filter(item => { return item._id == id })
        setiddata(filterdata[0])
    }

    const handleClose = () => {
        setShow(false)
    }
    const { register, handleSubmit } = useForm();
    //   const onSubmit = data => console.log(data);
    const onSubmit = data => {
        fetch(`http://localhost:5000/manegebook/${data.id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Your orders is updated successfull.')
                    setShow(false)
                }
            })
    }

    const [pageCount, setPageCount] = useState(10);

    const handleChangeCount = (e) => {
        setPageCount(e.target.value);
    }

    let totalUser = Math.ceil(booking.length / 10);
    let bookingArray = [];
    for (let i = 1; i <= totalUser; i++) {
        bookingArray.push(i * 10);
    }


    //searching ablebe=================
    const [search, setSearch] = useState('');
    const [filterdata, setfilterdata] =useState([]);
    

  const handleSearch = (e) => {
      if(e.target.value !=''){
        setSearch(e.target.value);
        const filetertable=booking.filter(o=>Object.keys(o).some(k=>String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
        setfilterdata([...filetertable])
        
      }else{
        setSearch(e.target.value);
        setbooking([...booking])
      }
    
  };
    

    return (
        <div className='container'>
            <div className="mobailhedding d-flex justify-content-between align-items-center py-5">
                <div className="headding">
                    <h3>Booking List</h3>
                </div>
                <div className="search">
                    <Form className="d-flex">
                        <i class="fas fa-search"></i>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="me-2 ps-5"
                            aria-label="Search"
                            onChange={handleSearch}
                            value={search}
                        />
                    </Form>
                </div>
                <div className="showingitem">
                    <span className='me-2'>Show Result</span>
                    <select onChange={handleChangeCount}>{
                        bookingArray.map((x) =>
                            <option value={x}>{x}</option>)
                    }</select>
                </div>
            </div>
            <div className="row">
              
                <table hover  className='alltable'>
                    <thead >
                        <tr className='tableheadrow'>
                            <th>Profile</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>CollectionPost Code</th>
                            <th>Delivery Postcode</th>
                            <th>Item</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                          search.length >0 ? filterdata.slice(0, pageCount).map(book => <tr className='tablerowbook' key={book._id}>
                                <td className='d-flex justify-content-start align-items-center'><img style={{width:'30px',height:'30px',borderRadius:'100%'}} className='text-start' src={book.pic} alt="" />
                                    <div className="imgname"><span>{book.name}</span><br /><span>{book.number}</span></div>
                                </td>
                                <td>{book.quantity}</td>
                                <td>{book.price}</td>
                                <td>{book.collectionPascode}</td>
                                <td>{book.deliveryPascode}</td>
                                <td>{book.vehicle}</td>
                                <td onClick={() => statusupdate(book._id)}
                                    style={{ cursor: 'pointer' }}
                                >{book.status == 'Completed' ? <span style={{ background: '#AACBBC', padding: '5px', borderRadius: '5px' }}>{book.status}</span> : <span style={{ background: '#F7B8AB', padding: '5px', borderRadius: '5px' }}>{book.status}</span>}</td>
                            </tr>):
                            booking.slice(0, pageCount).map(book => <tr className='tablerowbook' key={book._id}>
                            <td className='d-flex justify-content-start align-items-center'><img style={{width:'30px',height:'30px',borderRadius:'100%'}} className='text-start' src={book.pic} alt="" />
                                <div className="imgname"><span>{book.name}</span><br /><span>{book.number}</span></div>
                            </td>
                            <td>{book.quantity}</td>
                            <td>{book.email}</td>
                            <td>{book.collectionPascode}</td>
                            <td>{book.deliveryPascode}</td>
                            <td>{book.vehicle}</td>
                            <td onClick={() => statusupdate(book._id)}
                                style={{ cursor: 'pointer' }}
                            >{book.status == 'Completed' ? <span style={{ background: '#AACBBC', padding: '5px', borderRadius: '5px' }}>{book.status}</span> : <span style={{ background: '#F7B8AB', padding: '5px', borderRadius: '5px' }}>{book.status}</span>}</td>
                        </tr>)
                        }
                    </tbody>
                </table>
                <Modal show={show} onHide={handleClose} className='bookinglismodal'>
                    <div className="updatemodal">
                        <form onSubmit={handleSubmit(onSubmit)} className="updateorderform">
                            <input type="hidden" defaultValue={iddata._id} {...register("id", { required: true })} />
                            <input defaultValue={iddata.name} {...register("name", { required: true })} placeholder='Name' /><br />
                            <input defaultValue={iddata.number} {...register("price", { required: true })} placeholder='Price' /><br />
                            <input defaultValue={iddata.quantity} {...register("quantity", { required: true })} placeholder="quantity" /><br />
                            <input defaultValue={iddata.email} {...register("email", { required: true })} placeholder="user Email" /><br />
                            <input defaultValue={iddata.collectionPascode} {...register("collectionPascode", { required: true })} placeholder="collectionPascode" /><br />
                            <input defaultValue={iddata.deliveryPascode}{...register("deliveryPascode", { required: true })} placeholder='deliveryPascode' /><br />
                            <input defaultValue={iddata.vehicle}{...register("vehicle", { required: true })} placeholder='vehicle' /><br />
                            <select defaultValue={iddata.status} {...register("status", { required: true })} placeholder='status'>
                                <option value="Completed">Completed</option>
                                <option value="In progress">In progress</option>
                            </select>
                            <input type="submit" value="Update Booking" />
                        </form>

                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default BookingList;