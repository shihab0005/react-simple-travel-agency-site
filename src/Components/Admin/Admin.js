import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AddEvent from '../AddEvent/AddEvent';
import AddHotPackage from '../AddHotPackage/AddHotPackage';
import AddPackage from '../AddPackage/AddPackage';
import ManageOrder from '../ManageOrder/ManageOrder';
import ManageUser from '../ManageUser/ManageUser';
import "./Admin.css"
const Admin = () => {
    const [controll, setControll] = useState('AddHotPackage')
    return (
        <div className='d-flex justify-around'>
            <div style={{ backgroundColor: '#B1E3F8' }} className="col-lg-3 p-5">
                <h1>Dashboard</h1>
                <ul style={{ listStyle: 'none', textAlign: 'left' }}>
                    <li className="p-2">
                        <Button variant="outline-dark" onClick={() => setControll('AddHotPackage')}>Add Offered Package</Button>
                    </li>

                    <li className="p-2">
                        <Button variant="outline-dark" onClick={() => setControll('manageUser')}>Manage User</Button>
                    </li>


                    <li className="p-2">
                        <Button variant="outline-dark" onClick={() => setControll('AddEvent')}>Add Event</Button>
                    </li>

                    <li className="p-2">
                        <Button variant="outline-dark" onClick={() => setControll('manageOrder')}>Manage Order</Button>
                    </li>

                    <li className="p-2">
                        <Button variant="outline-dark" onClick={() => setControll('AddPackage')}>Add Package</Button>
                    </li>



                </ul>
            </div>
            <div className="col-lg-9">
                {controll === 'AddHotPackage' && <AddHotPackage></AddHotPackage>}
                {controll === 'AddEvent' && <AddEvent></AddEvent>}
                {controll === 'AddPackage' && <AddPackage></AddPackage>}
                {controll === 'manageUser' && <ManageUser></ManageUser>}
                {controll === 'manageOrder' && <ManageOrder></ManageOrder>}

            </div>



        </div>
    );
};

export default Admin;