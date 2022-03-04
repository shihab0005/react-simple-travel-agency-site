import React from 'react';
import { Navbar, Container, Nav, Stack, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();
    return (
        <div className=''>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand style={{ textDecoration: "none", fontSize: "18px", fontWeight: "bolder" }} href="#home"><h2>_BD_TRVLSR_</h2>
                    </Navbar.Brand>
                    <Nav className="">
                        <Stack direction="horizontal" gap={3}>
                            <NavLink style={{ textDecoration: "none", fontSize: "18px", fontWeight: "bold" }} className="text-white p-2" to="/home">Home</NavLink>

                            <NavLink style={{ textDecoration: "none", fontSize: "18px", fontWeight: "bolder" }} className="text-white p-2" to="/packages">Package</NavLink>

                            <NavLink style={{ textDecoration: "none", fontSize: "18px", fontWeight: "bold" }} className="text-white p-2" to="/events">Events</NavLink>

                            {user.email ? <NavLink style={{ textDecoration: "none", fontSize: "18px", fontWeight: "bold" }} className="text-white p-2" to="/order">My Package</NavLink>
                                : ""
                            }

                            {user.email && <small style={{ color: "white" }}>hello, {user.displayName || user.email}</small>}
                            {user?.email ?
                                <Button style={{ textDecoration: "none", fontSize: "18px", fontWeight: "bold" }} onClick={logOut} variant="warning">Logout</Button>
                                :
                                <NavLink style={{ textDecoration: "none", fontSize: "18px", fontWeight: "bold" }} className="text-white p-2" to="/login">Login</NavLink>}

                            <NavLink style={{ textDecoration: "none", fontSize: "18px", fontWeight: "bold" }} className="text-white p-2" to="/admin">Admin</NavLink>
                        </Stack>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;