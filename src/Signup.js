import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Header } from './Login';
import React, { Component } from 'react';
import { Navigate } from "react-router-dom";
import { withRouter } from './roots';




class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            username: '',
            email: '',
            password: '',
            conpass:''
        }
    }
    handlechange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
         
    }
    submit = (e) => {
        e.preventDefault();
        const { type, username, email, password } = this.state;
        console.log("Role: ",this.state.type);
        if (this.state.type !== "") {
                alert("SELECT WORK");
            var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
            if (regularExpression.test(this.state.password)) {
                var regEx = /^[0-9A-Z]/;
                if (regEx.test(this.state.username)) 
                {
                    try {
                        fetch('http://localhost:4000/register/rajesh',{
                            method: 'POST',
                            mode: 'cors',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(this.state)
                        }).then(async (res)=>{ 
                            console.log(res.status);
                            if(await res.status===201)
                            {
                                alert('if condition work');
                                this.props.navigate('/learn');
                            }
                            else if(res.status===401){
                                 alert('else work');
                            }
                            else{
                                alert('server error');
                            }
                        })

                     
                    } catch (error) {
                        console.log(error);
                    }
                }
                else {
                    alert('enter strong username');
                }
            }
            else {
                alert("please enter strong password");
            }
        }
        else {
            alert('please select user type');
        }
    }
    render() {
        return (
            <div>
                    <Header />
                <form>
                    <div className='container my-5 p-5 '>
                        <h3 className="my-2">Signup</h3>
                        <select className="form-select w-25 " onChange={this.handlechange} id="type" aria-label="Default select example">
                            <option>select</option>
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                        </select>
                        <div className="form-group w-50">
                            <label className="form__label my-2">Username</label>
                            <input type="text" className="form-control" name='username' onChange={this.handlechange} placeholder="Enter your Username" id='username' required />
                        </div>
                        <div className="form-group w-50">
                            <label className="form__label  my-2">EmailId</label>
                            <input type="email" className="form-control" name='email' onChange={this.handlechange} placeholder="Enter your Emailid" id='email' required />
                        </div>
                        <div className="form-group w-50">
                            <label className="form__label  my-2">Password</label>
                            <input type="password" className="form-control" name='password' onChange={this.handlechange} autoComplete="off" placeholder="Enter your Password" id='password' required />
                        </div>
                        <div className="form-group w-50">
                            <label className="form__label  my-2">Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Enter your Password" onChange={this.handlechange} autoComplete="off" name="pass" id='conpass' required />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success my-2 float-end" type="submit" onClick={this.submit}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Signin);