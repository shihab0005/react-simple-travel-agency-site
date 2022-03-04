import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const ManageUser = () => {
    const [users, setUsers] = useState([])


    useEffect(() => {
        fetch("https://floating-plains-57094.herokuapp.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    const handleDeleteUser = id => {
        const confirmDelet = window.confirm("Are You Sure To delete this User ?")
        if (confirmDelet) {
            fetch(`https://floating-plains-57094.herokuapp.com/users/${id}`, {
                method: "DELETE"
            }).then(res => res.json())
                .then(result => {
                    console.log(result)
                    if (result.deletedCount) {
                        alert("User Delete Successfully")
                        const remainingUser = users.filter(user => user._id !== id)
                        setUsers(remainingUser)
                    }
                })
        }

    }
    return (
        <div>
            <h2>Manage User</h2>
            <div className="p-3">
                <Table striped bordered hover >
                    <thead>
                        <tr>

                            <th> Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Phone</th>
                            <th>Occupation</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr
                                key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.address}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.phone}</td>
                                <td>{user.occupation}</td>
                                <td>
                                    <Button

                                        className=' m-2'>Edit</Button>

                                    <Button
                                        onClick={() => handleDeleteUser(user._id)}
                                        className='m-2'>Delet</Button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default ManageUser;