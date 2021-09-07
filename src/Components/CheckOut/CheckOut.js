import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './CheckOut.css'
const CheckOut = () => {
    const { name } = useParams();
    const [product, setProduct] = useState([]);
    const result = product.find((product) => product.name === name);
    useEffect(() => {
        fetch("https://peaceful-peak-52420.herokuapp.com/events")
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    return (
        <div className="check-out">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <div className="title">
                            <h1>CheckOut</h1>
                        </div>
                        <br />
                        <div className="checkOut-table">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Description</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{result?.name}</td>
                                        <td>1</td>
                                        <td>${result?.price}</td>
                                    </tr>
                                    <tr>
                                        <td>Tax</td>
                                        <td></td>
                                        <td>$10</td>

                                    </tr>
                                    <tr>
                                        <td>Total Amount</td>
                                        <td></td>
                                        <td>${parseInt(result?.price) + 10}</td>

                                    </tr>
                                </tbody>
                                <br />
                                <Button primary='success' className="checkOutButton">
                                    CheckOut
                                </Button>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;