import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import img from './images/LOGO-BY-S.R.-EDITING-ZONE-13.png';
import './Admin.css'
import { Link } from 'react-router-dom';

export class Option extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="container-fluid d-flex" >
                    <nav className="d-flex w-100 " >
                        <img className='my-1' src={img}
                            alt='logo png'></img>
                        <h3 className="mx-2 my-3">Learn</h3>
                        <div>
                            <ul className='d-flex flex-row' >
                            <Link to={'/dash'}>
                                <li className='mx-5 my-3 p-1'><a href="">Home</a></li>
                                </Link>
                                <Link to={'/products'}>
                                <li className='mx-5 my-3 p-1'><a href="">Products</a></li>
                                </Link>
                                <li className='mx-5 my-3 p-1'><a href="">Company</a></li>
                                <li className='mx-5 my-3 p-1'><a href="">Career</a></li>
                                <li className='mx-5 my-3 p-1'><a href="">Contact</a></li>
                            </ul>
                        </div>
                        <input type="text" className='form-control w-35 my-3 h-50' placeholder='search courses'></input>
                    </nav>
                </div>
            </div>
        );
    }
}

export class Dashboard extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <div className='container m-0' >
                    <h3 className='mx-4'>Admin</h3>
                    <div className=''>
                        <ul>
                            <Link to={'/dashboard'}>
                            <li className='my-2'><a id="d" href="">Dashboard</a></li>
                            </Link>
                            <li className='my-2'><a id="u" href="">Users</a></li>
                            <Link to={'/solution'}>
                            <li className='my-2'><a id="f" href="">Solutions</a></li>
                            </Link>
                           
                        </ul>
                    </div>
                </div>
                <footer><small>@2022 All Rights Reserved</small></footer>

            </div>
        );
    }

}

function Admin() {
    return (
        <div>
            <Option />
            <Dashboard />
        </div>
    )
}
export default Admin;