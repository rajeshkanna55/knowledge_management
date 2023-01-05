import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useEffect, useState } from 'react';
import Faq from './faq';
import UserDash from './user_dashboard';
import { Link } from 'react-router-dom';
import './course.css';

function Usercourses(){
    const [course,setCourse]=useState([]);
    const [val,setVal]=useState('');
    useEffect(() => {
        const url = "http://localhost:4000/content/courses/get";
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setCourse(json);
            })
    }, []);
     
   

    return(
        <div>
            <UserDash/>
              <input type="text" id="search" className='form-control w-50'onChange={(e) => { setVal(e.target.value) }} placeholder='search...'></input>
            {
                        course.filter(article=>article.filename.toLowerCase().includes(val)).map((article, index) => (
                            <div>
                                <div className='col p-2 text-center' id="article">
                                    <h4>{article.filename}</h4>
                                    <p>{article.file}</p>
                                    <a name={article.docs} href={article.docs}  target="_blank">Download</a>
                                </div>
                                <br></br>
                            </div>
                        ))
                    }
        </div>
    );
}
export default Usercourses;