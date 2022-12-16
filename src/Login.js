import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import img from './images/LOGO-BY-S.R.-EDITING-ZONE-13.png';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';


export function Header() {
  return (
    <div>
      <div className="container-fluid d-flex" >
        <nav className="d-flex w-100 " >
          <img src={img}
            alt='logo png'></img>
          <h3 className="mx-2 my-2">Learn</h3>
          <div className='row d-flex flex-row-reverse'>
            <div className='col my-2 '>
              <Link to={'/signup'}>
                <button className='btn btn-success'>Signup</button>
              </Link>
            </div>
            <div className='col my-2 '>
              <Link to={'/learn'}><button className='btn btn-success'>Login</button></Link>

            </div>
          </div>
        </nav>

      </div>
    </div>
  );
}
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
      username: '',
      password: ''
    }
  }
  handlechange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }
  submit = (e) => {
    e.preventDefault();
    const { val, username, password } = this.state;
    console.log(this.state);
    if (this.state.val !== 'select') {
      alert('please select user type')
    }
      else if (this.state.username === '' && this.state.password === '') {
        alert('please fill data');

      }
      else {
        fetch('http://localhost:4000/logon', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
        })
          .then(async (res) => {
            if (await res.status === 200) {
              alert("login successfully");
            }
          })
          .catch((error) => {
            console.log(error);
          })
      }


    }

    render() {
      return (
        <div>
          <form >
            <div className='container my-5 p-5 '>
              <h3 className="my-2">Login</h3>
              <select className="form-select w-25 " id="val" onChange={this.handlechange} aria-label="Default select example">
                <option>select</option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>

              <div className="form-group w-50">
                <label className="form__label my-2">Username</label>
                <input type="text" className="form-control" placeholder="Enter your Username" onChange={this.handlechange} name="name" id='username' required />
              </div>
              <div className="form-group w-50">
                <label className="form__label  my-2">Password</label>
                <input type="password" className="form-control" placeholder="Enter your Password" onChange={this.handlechange} name="pass" id='password' required />
              </div>
              <div className="form-group">
                <button onClick={this.submit} className="btn btn-success my-2 float-end">Submit</button>
              </div>
            </div>
          </form>
        </div>
      );
    }
  }
function App() {
  return (
    <div>
      <Header />
      <Login />
    </div>
  );
}

export default App;