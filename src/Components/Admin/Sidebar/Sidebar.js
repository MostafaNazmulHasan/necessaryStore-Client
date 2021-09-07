import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Siderbar.css';
import { IoMdAddCircleOutline } from "@react-icons/all-files/io/IoMdAddCircleOutline";
import { BiEdit } from "@react-icons/all-files/bi/BiEdit";
const Sidebar = () => {
    return (
        <div>
            <div className="sideBar">
                <ListGroup className="text-center ">
                    <ListGroup.Item as={Link} to='/manageProduct' variant="info"><BiEdit></BiEdit>  Manage Product</ListGroup.Item>
                    <ListGroup.Item as={Link} to='/addProduct' variant="light"><IoMdAddCircleOutline></IoMdAddCircleOutline>  Add Product</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default Sidebar;