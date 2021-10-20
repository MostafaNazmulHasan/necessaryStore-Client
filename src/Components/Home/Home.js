import React, { useEffect } from 'react';
import { useState } from 'react';
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import "../Home/Home.css";
import { Button, Form, InputGroup } from 'react-bootstrap';
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
                        <div className="searchForm">
                            <form class="d-flex">
                                <input type="text" className="form-control me-2" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
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