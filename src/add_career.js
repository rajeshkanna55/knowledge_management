import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useEffect, useState } from 'react';
import { UserDash } from './user_dashboard';
import { Option } from './Admin_dashboard';
import { Dashboard } from './Admin_dashboard';
import './add_career.css';
export function Addcareer() {
    return (
        <div>
            <Option />
            <Dashboard />
            <form>
                <div id="job" className='container'>
                    <h2 className='text-center'>Post Job</h2>
                    <div id="post">
                    <div className='form-group container'>
                        <label>Company Name</label>
                        <input type="text" className='form-control w-50' placeholder='Enter company name'></input>
                    </div>
                    <div className='form-group container'>
                        <label>Job Title</label>
                        <input type="text" className='form-control w-50' placeholder='Enter company name'></input>
                    </div>
                    <div className='form-group container'>
                        <label>Qualification</label>
                        <input type="text" className='form-control w-50' placeholder='Enter company name'></input>
                    </div>
                    <label className="container">WorkType</label>
                    <div className='form-group container'>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>-Select-</option>
                            <option value="1">PartTime</option>
                            <option value="2">FullTime</option>
                            <option value="3">Remote</option>
                        </select>
                    </div>
                    </div>
                
                    <br></br>
                    <button id="job_cancel" type="submit" className='btn btn-danger m-2'>Cancel</button>
                    <button id="job_save" type="submit" className='btn btn-info '>Post</button>
                </div>
            </form>
        </div>
    );

}

export default Addcareer;