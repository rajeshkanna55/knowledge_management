import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Option } from './Admin_dashboard';
import React, { Component } from 'react';
import { withRouter } from './roots';

export class UserDash extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Option/>
                <div className='container m-0 w-25' > 
                    <h3 className='mx-4'>Admin</h3>
                    <div className=''>
                        <ul>
                            <li className='my-2'><a href="">Users</a></li>
                            <li className='my-2'><a href="">FAQ?</a></li>
                        </ul>
                    </div> 
                </div>
                <footer><small>@2022 All Rights Reserved</small></footer>
               
            </div>
        );
    }
}

export default withRouter(UserDash);