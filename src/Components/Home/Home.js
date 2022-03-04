import React, { useEffect, useState } from 'react';
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Event from '../Event/Event';

import './Home.css'

const Home = () => {
    const [hotpacks, setHotPacks] = useState([])
    useEffect(() => {
        fetch("https://floating-plains-57094.herokuapp.com/addHotPackage")
            .then(res => res.json())
            .then(data => setHotPacks(data))
    }, [])
    return (
        <>

            <div className="container">
                <div className="">
                    <img src="https://img.freepik.com/free-vector/travel-tourism-illustration-with-resort-sightseeing-elements_1284-30189.jpg?t=st=1646066054~exp=1646066654~hmac=4722b550e4f738fe2e01f165ca0badd578a95bd9c7cecb5f4096bb005b710cdb&w=996
            " alt="" />
                    <div className="search mb-3">
                        <h1>Find Your Next</h1>
                        <h1>Tour Destinations</h1>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Find your best tour Package"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-warning" id="button-addon2">
                                Search
                            </Button>
                        </InputGroup>
                    </div>


                </div>

                <div className="package_container container mb-3">
                    <h1>Current Hot Packages</h1>
                    {
                        hotpacks.map(hotpack => <div
                            key={hotpack._id} className='div_card'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={hotpack.hpimageCard} />
                                <Card.Body>
                                    <Card.Title >{hotpack.hpname}</Card.Title>
                                    <span className="text">From {hotpack.hpcost} BDT</span><br />
                                    <span className="text">{hotpack.hpduration}</span><br />
                                    <NavLink to=
                                        {`/singleHotPack/${hotpack._id}`}>
                                        <Button variant="primary">View Details</Button>
                                    </NavLink>

                                </Card.Body>
                            </Card>
                        </div>
                        )
                    }
                </div>

            </div>


            <Event></Event>
        </>
    );
};

export default Home;