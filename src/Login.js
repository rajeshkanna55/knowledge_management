import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import img from './images/LOGO-BY-S.R.-EDITING-ZONE-13.png';
import { Link } from 'react-router-dom';


export function Header() {
    return (
      <div>
        <div class="container-fluid d-flex" >
          <nav class="d-flex w-100 " >
            <img src={img}
              alt='logo png'></img>
            <h3 class="mx-2 my-2">Learn</h3>
            <div class='row d-flex flex-row-reverse'>
              <div class='col my-2 '> 
              <Link to={'/signup'}>
              <button class='btn btn-success'>Signup</button>
              </Link>
              </div>
              <div class='col my-2 '>
                <Link to={'/learn'}><button class='btn btn-success'>Login</button></Link>
                
              </div>
            </div>
          </nav>
  
        </div>
      </div>
    );
  }
  function Login() {
    return (
      <div>
        <form>
          <div class='container my-5 p-5 '>
            <h3 class="my-2">Login</h3>
            <select class="form-select w-25 "id="val" aria-label="Default select example">
              <option selected>select</option>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
  
            <div class="form-group w-50">
              <label for="name" class="form__label my-2">Username</label>
              <input type="text" class="form-control" placeholder="Enter your Username" name="name" id='name' required />
            </div>
            <div class="form-group w-50">
              <label for="name" class="form__label  my-2">Password</label>
              <input type="password" class="form-control" placeholder="Enter your Password" name="pass" id='name' required />
            </div>
            <div class="form-group">
              <button class="btn btn-success my-2 float-end">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
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