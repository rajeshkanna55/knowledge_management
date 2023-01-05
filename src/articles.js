import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Option } from './Admin_dashboard';
import { Dashboard } from './Admin_dashboard';
import { Products } from './products';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './article.css';
import { useNavigate } from 'react-router-dom';
function Article() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState('');
    const [folder, setFolder] = useState([]);
    const [foldername, setFoldername] = useState('');
    const navigate=useNavigate();
    const sel = (e) => {
        const vl = e.target.value;
        setFoldername(vl);
    };
    useEffect(() => {
        const url = "http://localhost:4000/folder/products/name";
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setFolder(json);
            })
    }, []);



    const save = (e) => {
       
        try {
            e.preventDefault();
         if(foldername!=='')
         {
            
            if (title === '') {
                alert('please enter the title');
            }
            else {


                if (content === '') {
                    alert('please enter content');
                }
                else {

                    if(file!==''){
                        const formData = new FormData();
                        formData.append('title', title);
                        formData.append('content', content);
                        formData.append('file', file);
                        formData.append('foldername', foldername);
                        let url = 'http://localhost:4000/content';
                        fetch(url, {
                            method: 'POST',
                            mode: 'cors',
                            headers: {
                                Accept: 'application/json'
                            },
                            body: formData
                        
                        }).then(async (res) => {
                            if (await res.status === 200) {
                                alert('file saved successfully');
                                navigate("/products");
                            }
                            else {
                                alert('internal server error');
                            }
                        });
                    }
                   else
                   {
                    alert("please select pdf");
                   }
                }
            }
        }
       else
        {
            alert('please select folder')
        }
        }
    
        
        catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
            <Option/>
            <form onSubmit={save}>
                <div className='container w-75' id="opt">
                    <Link to={'/dash'}>
                    <button id="cancel">Cancel</button>
                    </Link>
                    
                    <button id="save" type='submit' >Save</button>
                    <button id="new">New Article</button>
                </div>
                <div className='container w-75' id="cont">
                    <h2>select Folder</h2>
                    <select className="form-select " id="type" onChange={e => sel(e)} aria-label="Default select example">
                        <option >select</option>
                        {
                            folder.map((Folder, index) => (
                                <option id={Folder.folder} key={index} onChange={e => sel(e)}>{Folder.folder}</option>
                            ))
                        }
                    </select>
                    <h3>title</h3>
                    <input type='text' className='form-control' onChange={(e) => { setTitle(e.target.value) }} placeholder='Title' name="title" id='title'></input>
                    <h3>Content</h3>
                    <textarea type='text' className='form-control' onChange={(e) => { setContent(e.target.value) }} placeholder='Enter your content' name="content" id='content'></textarea>
                    <br></br>
                    <input type='file' id="filename" onChange={(e) => { setFile(e.target.files[0]) }} name='filename'></input>
                </div>
            </form>
        </div>
    );
}

export default Article;
