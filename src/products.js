import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Option } from './Admin_dashboard';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './products.css';

export function Products() {
    const [val, setVal] = useState([]);

    useEffect(() => {
        const url = "http://localhost:4000/folder/products/name";
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setVal(json);
            })
    }, []);
    const folde = (e) => {

        const vl = e.target.getAttribute('id');
        
        fetch('http://localhost:4000/content',{
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(vl)
                    });
    }
    return (
        <div>
            <Option />
            <div className='container m-0' >
                <h3 className='mx-4'>Products</h3>
                <div className=''>
                    <ul>
                        {
                            val.map((Folder) => (
                                <li className='my-2' id={Folder.folder} onClick={e => folde(e)}>{Folder.folder}</li>
                            ))

                        }
                        <Link to={"/products/Create"}>
                            <li className='my-2'><a id="U" href="">Add Products</a></li>
                        </Link>
                    </ul>
                </div>
            </div>
            <footer><small>@2022 All Rights Reserved</small></footer>

        </div>
    );
}

export function Content() {
         
    return (
        <div>
            <div className='container w-75 ' id="artdiv">
                <div className='row' >
                    <div className='col p-2 text-center' id="article">
                       <h4>this is my title 1</h4>
                       <p>This my content 1</p>
                    </div>
                    <Link to={"/solution/article"}>
                        <div className='col text-center p-2'>
                        <h4><span>+</span>Add Articles</h4>
                        
                    </div>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
}

function Contents(){
    return(
        <div>
            <Products/>
            <Content/>
        </div>
    );
}
export default Contents;