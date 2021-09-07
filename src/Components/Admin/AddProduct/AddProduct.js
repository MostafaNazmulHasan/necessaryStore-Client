import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../AddProduct/AddProduct.css'
const AddProduct = () => {
    const [addProductValue, setAddProductValue] = useState(
        {
            name: "",
            price: "",
        }

    );
    const [addProductImage, setAddProductImage] = useState();

    const handleAddProduct = (e) => {
        const addProductData = { ...addProductValue };
        addProductData.imageUrl = addProductImage;

        const apiUrl = "https://peaceful-peak-52420.herokuapp.com/addProduct"
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addProductData),
        })
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });

        e.preventDefault();
    };


    const handleChange = e => {
        const value = { ...addProductValue };
        value[e.target.name] = e.target.value;
        setAddProductValue(value);
    }
    const handleChangeImage = e => {
        const imageData = new FormData();
        imageData.set("key", "13f47358ce60e3350ff899d9e922c7e2");
        imageData.append("image", e.target.files[0]);
        axios.post("https://api.imgbb.com/1/upload", imageData).then((result) => {
            setAddProductImage(result.data.data.display_url);
            console.log(e.target.files[0]);
        });
    }
    return (
        <div className="AddProductPage">
            <div className="container">
                <div className="title">
                    <h4>Add Product</h4>
                </div>
                <Form onSubmit={handleAddProduct}>
                    <div className="row">
                        <div className="col-md-3">
                            <Form.Group>
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" onChange={handleChange} name="name" placeholder="Enter your product name"></Form.Control>
                            </Form.Group>
                        </div>
                        <div className="col-md-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" onChange={handleChange} name="price" placeholder="Enter your price of product"></Form.Control>
                        </div>
                        <div className="col-md-3">
                            <Form.Label>Select your image</Form.Label>
                            <Form.Control type="file" onChange={handleChangeImage} ></Form.Control>
                        </div>
                    </div>
                    <br />
                    <Button type="submit" variant="primary" >Submit</Button>
                </Form>
            </div>
        </div>
    );
};

export default AddProduct;