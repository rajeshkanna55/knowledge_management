import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Option } from './Admin_dashboard';
import React, { Component } from 'react';
import { withRouter } from './roots';
import './user.css';
import { Link } from 'react-router-dom';
import Faq from './faq';

export class UserDash extends Component{
    constructor(props) {
        super(props);
        
    }
    render() { 
        return (
            <div>
                <Faq/>
                <div className='container m-0' > 
                    <h3 className='mx-4'>User</h3>
                    
                    <div className=''>
                        <ul>
                            <li className='my-2'><a href="">Users</a></li>
                            <Link to={"/faq"}>
                            <li className='my-2'><a href="">FAQ?</a></li>
                            </Link>
                        </ul>
                    </div> 
                </div>
                <footer><small>@2022 All Rights Reserved</small></footer>
               
            </div>
        );
    }
}

export default withRouter(UserDash);