import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Experts from '../Experts/Experts';

const Packages = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch("https://floating-plains-57094.herokuapp.com/addPackage")
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <>

            <div>
                <div className="package_container container mb-3">
                    <h1>Current Offered Packages</h1>
                    {
                        packages.map(pack => <div
                            key={pack?._id} className='div_card'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={pack?.pimageCard} />
                                <Card.Body>
                                    <Card.Title >{pack?.ppackageName}</Card.Title>
                                    <span className="text">From {pack?.pcost} BDT</span><br />
                                    <span className="text">{pack?.pduration}</span><br />
                                    <NavLink to=
                                        {`/singlePackages/${pack?._id}`}>
                                        <Button variant="primary">View Details</Button>
                                    </NavLink>

                                </Card.Body>
                            </Card>
                        </div>
                        )
                    }
                </div>
            </div>
            <Experts></Experts>
        </>
    );
};

export default Packages;