import React, { useEffect } from 'react';
import { useState } from 'react';
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import "../Home/Home.css";
import { Button, Form } from 'react-bootstrap';
import ProductDetails from '../ProductDetails/ProductDetails';

const Home = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-peak-52420.herokuapp.com/events')
            .then(res => res.json())
            .then(data => {
                setEvents(data);
            })
    }, [])
    return (
        <div className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 m-auto">
                        <div className="searchButton">
                            <div className="searchIcon">
                                <BsSearch />
                            </div>
                            <Form.Control
                                id="searchInput"
                                size="lg"
                                type="text"
                                placeholder="Search Product"
                            />
                            <Button id="searchBtn">Search</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        events.map((event) => <ProductDetails event={event}></ProductDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;