import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Option } from './Admin_dashboard';
import img from './images/LOGO-BY-S.R.-EDITING-ZONE-13.png';
import { Link } from 'react-router-dom';
import { UserDash } from './user_dashboard';


export function Faq(){
    
    return(
        <div>
           <div>
                <div className="container-fluid d-flex" >
                    <nav className="d-flex w-100 " >
                        <img className='my-1' src={img}
                            alt='logo png'></img>
                        <h3 className="mx-2 my-3">Learn</h3>
                        <div>
                            <ul className='d-flex flex-row' >
                            <Link to={'/user/:username'}>
                                <li className='mx-5 my-3 p-1'>Home</li>
                                </Link>
                                <li className='mx-5 my-3 p-1'>Company</li>
                                <Link to={'/usercourses/jobs'}>
                                <li className='mx-5 my-3 p-1'>Career</li>
                                </Link>
                                <li className='mx-5 my-3 p-1'>Contact</li>
                                <Link to={'/usercourses'}>
                                <li className='mx-5 my-3 p-1'>Courses</li>
                                </Link>
                               

                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
           
        </div>
       
    );

}

export default Faq;