import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserDash } from './user_dashboard';
import { Option } from './Admin_dashboard';
import { Dashboard } from './Admin_dashboard';
export function Career() {
    return (
        <div>
           <Option/>
           <Dashboard/>
            <div className="container">
                <div className="row p-1">
                    <div className="col ">
                        One of three columns
                    </div>
                    <div className="col">
                        One of three columns
                    </div>
                    <div className="col">
                        One of three columns
                    </div>
                </div>
            </div>
            <Link to={"/usercourses/post"}>
            <h4><span>+</span>Add Jobs</h4> 
            </Link>
             
        </div>
    );
}

export default Career;