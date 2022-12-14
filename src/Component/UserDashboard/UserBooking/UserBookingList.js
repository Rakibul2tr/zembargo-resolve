import React, { useEffect, useState } from 'react';
import { Form, FormControl, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './BookingList.css';

const UserBookingList = () => {
    
    const [show, setShow] = useState(false);
    const [iddata, setiddata] = useState("");
    const [UserInfo, setUserInfo] = useState("");
    const [booking, setbooking] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => {
                setbooking(data);
            })
    }, [])


    const [user,setUser]=useState()
    useEffect(()=>{
        let userData =JSON.parse(localStorage.getItem('user'))
        setUser(userData)
    },[])
    // const filetUser=booking.filter(o=>Object.keys(o).some(k=>String(o[k]).toLowerCase().includes(userInfo?.email.toLowerCase())));
    const filterUser = booking.filter(item => {return item.email==user?.email})
    
    // setUserInfo(filterUser)
    
    
    


    //status update function
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
    ///page count 10 or 20 or 30 ======etc
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
        const filetertable=filterUser.filter(o=>Object.keys(o).some(k=>String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
        setfilterdata([...filetertable])
        
      }else{
        setSearch(e.target.value);
        setbooking([...booking])
      }
    
  };
    

    return (
        <div className='container'>
          <div className='bookinghistory'>
            <div className="mobailhedding d-flex justify-content-between align-items-center py-5">
                <div className="headding">
                    <h3 className='text-danger'>Booking List</h3>
                </div>
                <div className="search bookserch">
                    <Form className="d-flex">
                        <i  class="fas fa-search"></i>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="ms-5 ps-5"
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
                                <td className='d-flex justify-content-start align-items-center'>
                                    <div className="imgname"><span>{book.name}</span><br /><span>{book.number}</span></div>
                                </td>
                                <td>{book.quantity}</td>
                                <td>${book.price}</td>
                                <td>{book.collectionPascode}</td>
                                <td>{book.deliveryPascode}</td>
                                <td>{book.item}</td>
                                <td onClick={() => statusupdate(book._id)}
                                    style={{ cursor: 'pointer' }}
                                >{book.status == 'Completed' ? <span style={{ background: '#AACBBC', padding: '5px', borderRadius: '5px' }}>{book.status}</span> : <span style={{ background: '#F7B8AB', padding: '5px', borderRadius: '5px' }}>{book.status}</span>}</td>
                            </tr>):
                            filterUser.slice(0, pageCount).map(book => <tr className='tablerowbook' key={book._id}>
                            <td className='d-flex justify-content-start align-items-center'>
                                <div className="imgname"><span>{book.name}</span><br /><span>{book.number}</span></div>
                            </td>
                            <td>{book.quantity}</td>
                            <td>${book.price}</td>
                            <td>{book.collectionPascode}</td>
                            <td>{book.deliveryPascode}</td>
                            <td>{book.item}</td>
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
                            <input defaultValue={iddata.name} {...register("name", { required: true })} placeholder='product name' /><br />
                            <input defaultValue={iddata.number} {...register("number", { required: true })} placeholder='Price' /><br />
                            <input defaultValue={iddata.quantity} {...register("quantity", { required: true })} placeholder="user name" /><br />
                            <input defaultValue={iddata.email} {...register("email", { required: true })} placeholder="user Email" /><br />
                            <input defaultValue={iddata.collectionPascode} {...register("collectionPascode", { required: true })} placeholder="number" /><br />
                            <input defaultValue={iddata.deliveryPascode}{...register("deliveryPascode", { required: true })} placeholder='Address' /><br />
                            <input defaultValue={iddata.vehicle}{...register("vehicle", { required: true })} placeholder='Date' /><br />
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
        </div>
    );
};

export default UserBookingList;