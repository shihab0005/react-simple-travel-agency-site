import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Experts from '../Experts/Experts';
import "./Event.css"
const Event = () => {
    const [events, setevents] = useState([])
    useEffect(() => {
        fetch("https://floating-plains-57094.herokuapp.com/addEvent")
            .then(res => res.json())
            .then(data => setevents(data))
    }, [])
    return (
        <>
            <div className="container">
                <h1 className='H1'>Upcomming Event</h1>
                {
                    events.map(event => <div
                        key={event._id} className='div_card'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={event.eimageCard} />
                            <Card.Body>
                                <Card.Title >{event.epackageName}</Card.Title>
                                <span className="text">From {event.ecost} BDT</span><br />
                                <span className="text">{event.eduration}</span><br />
                                <NavLink to=
                                    {`/eventDetails/${event._id}`}>
                                    <Button variant="primary">View Details</Button>
                                </NavLink>

                            </Card.Body>
                        </Card>
                    </div>
                    )
                }
            </div>
            <Experts></Experts>
        </>

    );
};

export default Event;