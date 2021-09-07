import React, { useState } from 'react';
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import { BiEdit } from "@react-icons/all-files/bi/BiEdit";
import { RiDeleteBin6Line } from "@react-icons/all-files/ri/RiDeleteBin6Line";
import "./ManageProduct.css"
import { Button, Table } from 'react-bootstrap';
import { useEffect } from 'react';
const ManageProduct = () => {
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        fetch("https://peaceful-peak-52420.herokuapp.com/events")
            .then((response) => response.json())
            .then((data) => setProductData(data))
    }, []);
    console.log(productData);

    const handleDelete = (id) => {
        fetch(`https://peaceful-peak-52420.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE",
        }).then(() => {
            fetch("https://peaceful-peak-52420.herokuapp.com/events")
                .then((response) => response.json())
                .then((data) => setProductData(data));
        });
    };
    return (
        <div className="manageProduct">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 m-auto">
                        <div className="titles">
                            <h3>Manage Product</h3>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 m-auto">
                        <div className="totalProduct ">
                            <div className="productCart">
                                <FiShoppingCart></FiShoppingCart>
                            </div>
                            <h3>Total Product ({productData.length})</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 m-auto mt-5">
                        <div className="productTable">
                            <Table striped bordered hover size="md">
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productData.map((productData) => (
                                        <tr>
                                            <td>{productData.name}</td>
                                            <td>{productData.price}</td>
                                            <Button className="edit" variant="success"><BiEdit></BiEdit>  Edit</Button>
                                            <Button className="delete" variant="warning" onClick={()=>handleDelete(productData._id)}><RiDeleteBin6Line></RiDeleteBin6Line>  Delete</Button>
                                        </tr>
                                    ))};
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;