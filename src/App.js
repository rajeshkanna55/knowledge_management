
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import img from './images/LOGO-BY-S.R.-EDITING-ZONE-13.png';
import { Link } from 'react-router-dom';
function Head(){
  return (
    <div>
      <div class="container-fluid d-flex" >
          <nav class="d-flex w-100 " >
            <img src={img}
              alt='logo png'></img>
            <h3 class="mx-2 my-2">Learn</h3>
            </nav>
            </div>
    </div>
  );
}

function Welcome(){
  return (
    <div>
      <div class="container">
        <h2>Knowledge Base Portal
For Editors, Writers, and Reviewers
</h2>
<Link to={'/learn'}>
<button>Enter</button>
</Link>
      </div>
    </div>
  );
}
function Enter(){
  return (
    <div>
      <Head/>
      <Welcome/>
    </div>
  );
}
export default Enter;