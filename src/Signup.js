import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
import { Header } from './Login';
import React, { Component } from 'react';


class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            Arr: []
        }
    }
    handlechange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
        console.log("Change");
    }
    submit = (e) => {
        e.preventdefault();
        console.log("Submit");

        const { username, email, password } = this.state

        const Arr = {
            username, email, password
        }
        console.log(Arr);
    }



    render() {
        return (
            <div>
                <form onSubmit={(e)=>this.submit}>
                    <div className='container my-5 p-5 '>
                        <h3 className="my-2">Signup</h3>
                        <select className="form-select w-25 " id="val" aria-label="Default select example">
                            <option selected>select</option>
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                        </select>
                        <div className="form-group w-50">
                            <label for="name" className="form__label my-2">Username</label>
                            <input type="text" className="form-control" name='username' onChange={e => this.handlechange} placeholder="Enter your Username" id='user' required />
                        </div>
                        <div className="form-group w-50">
                            <label for="name" className="form__label  my-2">EmailId</label>
                            <input type="password" className="form-control" name='email' onChange={this.handlechange} placeholder="Enter your Password" id='email' required />
                        </div>
                        <div className="form-group w-50">
                            <label for="name" className="form__label  my-2">Password</label>
                            <input type="password" className="form-control" name='password' onChange={this.handlechange} placeholder="Enter your Password" id='pass' required />
                        </div>
                        <div className="form-group w-50">
                            <label for="name" className="form__label  my-2">Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Enter your Password" name="pass" id='name' required />
                        </div>
                        <div className="form-group">
                           <button className="btn btn-success my-2 float-end" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function Sign() {
    return (
        <div>
            <Header />
            <Signin />
        </div>
    );
}
export default Sign;
