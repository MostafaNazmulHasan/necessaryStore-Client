import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ProductDetails/ProductDetails.css'

const ProductDetails = (props) => {
    const { name, price, imageUrl } = props.event;

    return (
        <div className="col-md-3">
            <div className="productDetails">
                <Card className="productCard p-3 mt-4 " style={{ width: '10rem' }}>
                    <Card.Img className="productImage m-auto img-fluid" variant="top" src={imageUrl} />
                    <Card.Body>
                        <Card.Title className="productTitle">{name}</Card.Title>
                        <br/>
                        <div className="d-flex justify-content-between">

                            <Card.Text className="productPrice">
                                <strong> ${price} </strong> 
                            </Card.Text>
                            
                            <Button className="productBuy" as={Link} to={`/checkout/${name}`} variant="primary">buy</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ProductDetails;