import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Option } from './Admin_dashboard';
import { Dashboard } from './Admin_dashboard';
import { useState, useEffect } from 'react';
import './register.css';

export function Registers() {
    const [user, setUser] = useState([]);
    const [tab,setTab] = useState(false);
    const val = () => {
        const url = "http://localhost:4000/register/rajesh";
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setUser(json);
            })
    }
    useEffect(() => {
        val();
    }, []);
  const edit=()=>{
    return(
        <div id="editname">
        <p>name</p> 
        <input className="form-control w-50" ></input>
    </div>
    );
}
const table=()=>{
    return(
        <table className='table table-hover' id="table">
        <thead>
            <tr>
                <th>Type</th>
                <th>Username</th>
                <th>Email</th>
                <th>Action</th>
            </tr>   
        </thead>
        <tbody>
            {
                user.map((val, index) => (<tr key={val.id}>
                    <td>{val.type}</td>
                    <td>{val.email}</td>
                    <td>{val.username}</td>
                    <td><button id="edit" className='btn btn-success m-1'>Edit</button><button id="delete" className='btn btn-danger'>Delete</button></td>
                </tr>
                ))
            }
        </tbody>
    </table>
    );
}
    return (
        <div>
            <Option />
            <Dashboard />
           {table()}
            {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div> */}
           {edit()}
        </div>
    );

}
export default Registers;