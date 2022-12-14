import React, { useState } from 'react';
import { Button, Form, FormControl, Pagination, Table } from 'react-bootstrap';
import FecthHook from '../../../hooks/FecthHook';
import './UserList.css'

const UsersList = () => {
    const { userdata,setuserdata } = FecthHook();
    const [pageCount, setPageCount] = useState(10);

    const handleChangeCount = (e) => {
        setPageCount(e.target.value);
    }

    let totalUser = Math.ceil(userdata.length / 10);
    let userArray = [];
    for (let i = 1; i <= totalUser; i++) {
        userArray.push(i * 10);
    }

    //searching ablebe=================
    const [search, setSearch] = useState('');
    const [filterdata, setfilterdata] =useState([]);
    

  const handleSearch = (e) => {
      if(e.target.value !=''){
        setSearch(e.target.value);
        const filetertable=userdata.filter(o=>Object.keys(o).some(k=>String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
        setfilterdata([...filetertable])
        
      }else{
        setSearch(e.target.value);
        setuserdata([...userdata])
      }
    
  };


    return (
        <div className='container'>
            <div className=" d-flex justify-content-between py-5">
                <div className="headding">
                    <h3>User List</h3>
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
                        userArray.map((x) =>
                            <option value={x}>{x}</option>)
                    }</select>
                </div>
            </div>
            <div className="row">
                <Table className='alltable dashbordtabel'>
                    <thead>
                        <tr className='tableheadrow'>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            search.length >0 ? filterdata.slice(0, pageCount).map(user => <tr key={user._id} className='tablerow tablerowuser'>
                                <td><img width={'40px'}height={'40px'}style={{borderRadius:'100%'}} src={user.pic} alt="" /></td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.location}</td>
                            </tr>
                            ):
                            userdata.slice(0, pageCount).map(user => <tr key={user._id} className='tablerow tablerowuser'>
                                <td><img width={'40px'}height={'40px'}style={{borderRadius:'100%'}} src={user.pic} alt="" /></td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.location}</td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default UsersList;