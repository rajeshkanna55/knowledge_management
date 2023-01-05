import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Option } from './Admin_dashboard';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Article from './articles';
import './products.css';

export function Products() {
    const [val, setVal] = useState([]);
    const [data, setData] = useState([]);
    

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
        const url = `http://localhost:4000/content/${vl}`;
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setData(json);
            })
    }
    const download=(e)=>{
        const lin=e.target.getAttribute('name');
          console.log(lin);
        }
        const art=()=>{
            return(
                <div className='container w-75 ' id="artdiv">
                <div className='row' >
                    {
                        data.map((article, index) => (
                            <div>
                                <div className='col p-2 text-center' id="article1">
                                    <h4>{article.filename}</h4>
                                    <p>{article.file}</p>
                                    <a name={article.docs} href={article.docs} onClick={e => download(e)} target="_blank">Download</a>
                                    <Link to={`/edit/${article._id}`}>
                                        <br></br>
                                        <a>Edit</a>
                                    </Link>
                                </div>
                                <br></br>
                            </div>
                        ))
                    }
                    <Link to={"/solution/article"}>
                        <div className='col text-center p-2'>
                            <h4><span>+</span>Add Articles</h4>
                        </div>
                    </Link>
                </div>
            </div>
            );
        }
        const filter=(e)=>{
            console.log(e.target.value);
        }
    return (
        <div>
            <Option />
            <div className='container m-0' >
                <h3 className='mx-4'>Products</h3>
                <div className=''>
                    <ul>
                        {
                            val.map((Folder, index) => (
                                <li className='my-2' id={Folder.folder} key={index} onClick={e => folde(e)}>{Folder.folder}</li>
                            ))

                        }
                        <Link to={"/products/Create"}>
                            <li className='my-2'><a id="U" href="">Add Products</a></li>
                        </Link>
                    </ul>
                </div>
            </div>
            <footer><small>@2022 All Rights Reserved</small></footer>
            {art()}

        </div>
    );
}


function Contents() {
    return (
        <div>
            <Products />
        </div>
    );
}
export default Contents;