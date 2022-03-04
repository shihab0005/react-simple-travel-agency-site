import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import './Order.css'
const Order = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetch(`https://floating-plains-57094.herokuapp.com/bookingPackage/${user?.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [user?.email])
    return (
        <div>
            <h1>All Of My booked Packages</h1>
            {
                bookings.map(booking => <Card style={{ width: '18rem', display: "inline-block" }}>
                    <Card.Body>
                        <Card.Title>{booking?.pacName}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{booking?.packageType}</Card.Subtitle>
                        <Card.Text>
                            <p><strong>Name :</strong>{booking?.name} </p>
                            <p><strong>Address :</strong>{booking?.address} </p>
                            <p><strong>Phone :</strong>{booking?.phone} </p>
                            <p><strong>Date :</strong>{booking?.date} </p>
                            <p><strong>Amount :</strong>{booking?.amount} BDT </p>
                            <p><strong>Booking Status :</strong>{booking?.bookStatus}  </p>
                        </Card.Text>

                    </Card.Body>
                </Card>
                )
            }
        </div>
    );
};

export default Order;