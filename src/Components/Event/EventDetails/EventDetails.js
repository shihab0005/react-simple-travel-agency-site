import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const EventDetails = () => {
    const { user } = useAuth()
    const { eid } = useParams();
    // const [allEvents, setAllEvents] = useState([]);
    const [singleEvent, setSingleEvent] = useState({});

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.email = user.email;
        data.bookStatus = "Processing"
        // console.log(data)
        axios.post("https://floating-plains-57094.herokuapp.com/bookingPackage", data)
            .then(res => {
                // console.log(res)
                if (res.data.insertedId) {
                    alert("Booking Successfully in processing");
                    reset();

                }

            })
    };

    useEffect(() => {
        fetch(`https://floating-plains-57094.herokuapp.com/addEvent/${eid}`)
            .then(res => res.json())
            .then(data => setSingleEvent(data))
    }, [eid]);

    // useEffect(() => {
    //     const findSingleEvent = allEvents.find(allEvent => allEvent?._id.toString() === eid);
    //     console.log(findSingleEvent);
    //     setSingleEvent(findSingleEvent)

    // }, [allEvents]);
    return (
        <div className='container pack'>
            <div className="tour_container">
                <h1 className='h1'>{singleEvent?.epackageName}</h1>
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "40px", color: "red" }} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h3 style={{ color: "#4C4646", fontWeight: "bolder" }}>{singleEvent?.elocation}</h3>
                </div>
                <div className="tour_details">
                    <div className="duration">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "40px", color: "#5ED3F9" }} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span style={{ fontSize: "18px", fontWeight: "bolder", color: "#0869D0 " }}>{singleEvent?.eduration}</span>
                    </div>
                    <div className="tour_type">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "40px", color: "#5ED3F9" }} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span style={{ fontSize: "18px", fontWeight: "bolder", color: "#0869D0 " }}>{singleEvent?.etourType}</span>
                    </div>
                    <div className="tour_type">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "30px", color: "#5ED3F9" }} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span style={{ fontSize: "22px", fontWeight: "bolder", color: "#0869D0 " }}>{singleEvent?.emaxGroupSize}</span>
                    </div>
                </div>
                <img src={singleEvent?.eimageCard} alt="" />
                <div className="food p-5">
                    <h1>Food Menu</h1>
                    <h3>{singleEvent?.efoodMenu}</h3>
                </div>
                <div className="">
                    <h1>Includes</h1>

                    <span>AC Coaster Bus service</span><br />
                    <span>Boat Service For Roaming</span><br />
                    <span>Mithamain-Ashtogram Transport Facilities</span><br />
                    <span>All meals (Breakfast , Lunch, Evening snacks)</span><br />


                </div>
                <Link to="/">
                    <Button>Back to Home</Button>
                </Link>
            </div>

            <div className="book_container">
                <div className="form">
                    <h1>Book Package</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            placeholder='Enter Name'
                            {...register("name", { required: true })}
                        />

                        <input
                            placeholder='Enter Address'
                            {...register("address", { required: true })}
                        />
                        <input
                            placeholder='Enter Phone Number'
                            {...register("phone", { required: true })}
                        />

                        <input
                            defaultValue={singleEvent?.epackageName}
                            {...register("pacName", { required: true })}
                        />
                        <input
                            defaultValue={singleEvent?.etourType}
                            {...register("packageType", { required: true })}
                        />
                        <input

                            defaultValue={singleEvent?.edate}
                            {...register("date", { required: true })}
                        />
                        <input
                            defaultValue={singleEvent?.ecost}
                            {...register("amount", { required: true })}
                        />

                        {user.email ? < input type="submit" value="Book Event" />
                            : <Link to='/login'>
                                <Button >Book Event To Login</Button>
                            </Link>
                        }
                    </form>
                </div>



            </div>

        </div>
    );
};

export default EventDetails;