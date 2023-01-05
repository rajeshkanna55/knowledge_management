import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import img from './images/LOGO-BY-S.R.-EDITING-ZONE-13.png';
import './Admin.css'
import { Link } from 'react-router-dom';

export function Option() {
            const filter=(e)=>{
                console.log(e.target.value);
            }
   
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
                                <li className='mx-5 my-3 p-1'>Home</li>
                                </Link>
                                <Link to={'/products'}>
                                <li className='mx-5 my-3 p-1'>Products</li>
                                </Link>
                                <li className='mx-5 my-3 p-1'>Company</li>
                                <Link to={'/usercourses/jobs'}>
                                <li className='mx-5 my-3 p-1'>Career</li>
                                </Link>
                                
                                <li className='mx-5 my-3 p-1'>Contact</li>
                                <Link to={'/courses'}>
                                <li className='mx-5 my-3 p-1'>Courses</li>
                                </Link>
                               

                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
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
                            <li className='my-2'> Dashboard</li>
                            </Link>
                            <li className='my-2'>users</li>
                            <Link to={'/solution'}>
                            <li className='my-2'>Solutions</li>
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