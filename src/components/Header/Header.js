import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { NavLink } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
                        <div> 
                <div className="d-lg-flex justify-content-evenly user-header">
                    <div className="col-12 col-md-12 col-lg-8 d-lg-flex custom-link">
                        <Navbar bg="light" expand="lg" className="navbar-brand">
                            <Container fluid>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="me-auto my-2 my-lg-0"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll
                                    >
                                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                        <Nav.Link as={Link} to="/events">Event</Nav.Link>
                                        <Nav.Link as={Link} to="/myschedule">My Schedule</Nav.Link>
                                        <NavDropdown title="Admin" id="collasible-nav-dropdown">
                                            <Link to="/createevent"><NavDropdown.Item href="createevent">Create Event</NavDropdown.Item></Link>
                                            <Link to="/eventlist"><NavDropdown.Item href="eventlist">All Event</NavDropdown.Item></Link>
                                            <Link to="/schedulelist"><NavDropdown.Item href="schedulelist">All Schedule</NavDropdown.Item></Link>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                    <div className="col-lg-4 ">
                        {
                            (user.email)
                                ?
                                <div className="d-flex gap-3 justify-content-end p-3 ">
                                    <div className="col-lg-5 d-flex align-items-center">
                                        <h5>{user.displayName}</h5>
                                    </div>
                                    <img src={user.photoURL} className="user-image" alt="" />
                                    <div className="col-lg-">
                                        <Link to="/home"><Button onClick={logOut} variant="primary">Sign Out</Button></Link>
                                    </div>
                                </div>
                                :
                                <div className="d-flex gap-3 justify-content-end p-3 ">
                                    <Link to="/login"><Button variant="warning">Login</Button></Link>
                                    <Link to="/signup"><Button variant="primary">Signup</Button></Link>
                                </div>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;