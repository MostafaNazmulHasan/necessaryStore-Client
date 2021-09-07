import React, { useContext } from 'react';
import "../MainMenu/MainMenu.css";
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const MainMenu = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <Navbar bg="primary" expand="lg" fixed="top">
            <div className="container">
                <Navbar.Brand as={Link} to="/" id="navBrand">
                    Necessary Store
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link as={Link} to="/home" id="navLink">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/orders" id="navLink">
                            Orders
                        </Nav.Link>
                        {loggedInUser.email ? (
                            <Nav.Link as={Link} to="/admin" id="navLink">
                                Admin dashboard
                            </Nav.Link>
                        ) : (
                            <Nav.Link as={Link} to="/admin" id="navLink">
                                Admin
                            </Nav.Link>
                        )}
                        <Nav.Link as={Link} to="/deals" id="navLink">
                            Deals
                        </Nav.Link>
                        {loggedInUser.email ? (
                            <strong>
                                { loggedInUser.name } 
                                <img id="userImage" src={loggedInUser.photoURL} alt="" />                    
                            </strong>     
                        ) : (
                            <Nav.Link as={Link} to="/login" id="navLink">
                                Login
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default MainMenu;