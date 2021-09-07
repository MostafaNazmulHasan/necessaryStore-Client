import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import ManageProduct from './Manageproduct/ManageProduct';
import AddProduct from './AddProduct/AddProduct';
import './Admin.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const Admin = () => {
    return (
        <div className='adminPage '>
            <div className='row'>

                <Router>
                    <div className='col-md-6'>
                        <Sidebar></Sidebar>
                    </div>
                    <Switch>
                        <div className='col-md-6'>
                            <Route path="/manageProduct">
                                <ManageProduct />
                            </Route>
                            <Route path="/addProduct">
                                <AddProduct />
                            </Route>
                            <Route path="/admin">
                                <AddProduct />
                            </Route>
                            
                        </div>
                    </Switch>

                </Router>

            </div >
        </div >
    );
};

export default Admin;