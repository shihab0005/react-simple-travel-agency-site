import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const ManageOrder = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch("https://floating-plains-57094.herokuapp.com/bookingPackage")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDeleteOrder = id => {
        fetch(`https://floating-plains-57094.herokuapp.com/bookingPackage/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
            .then(result => {
                // console.log(result)
                if (result.deletedCount) {
                    alert("Delete Ordered Package Successfully");
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining)
                }
            })
    }
    return (
        <div className=''>
            <h3>Manage Order</h3>
            <div className=" p-3">
                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Address</th>
                            <th>Package Name</th>
                            <th>Package Type</th>
                            <th>Phone</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Booking Status</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <tr>
                                <td>{order?.name}</td>
                                <td>{order?.address}</td>
                                <td>{order?.pacName}</td>
                                <td>{order?.packageType}</td>
                                <td>{order?.phone}</td>
                                <td>{order?.date}</td>
                                <td>{order?.amount}</td>
                                <td>{order?.bookStatus}</td>
                                <td>
                                    <Button>Edit</Button>
                                    <Button
                                        onClick={() => handleDeleteOrder(order?._id)}

                                        variant='danger'>Delete</Button>
                                </td>


                            </tr>)
                        }



                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageOrder;