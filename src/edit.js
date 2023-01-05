import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { Option } from "./Admin_dashboard";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


export function Edit() {
    const { id } = useParams();
    const [folder, setFolder] = useState('');
    const [title, setTitle] = useState(' ');
    const [content, setContent] = useState('');
    const [file, setFile] = useState('');
    const navigate=useNavigate();
    useEffect(() => {
        const url = `http://localhost:4000/edit/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(json => {
                const val = json;
                setFolder(val.folder);
                setTitle(val.filename);
                setContent(val.file);

            }) 
       },[]);
    

    const save = () => {
        if (file === '') {
            alert('please select File');

        }
        else {
            const formData = new FormData();
            formData.append('id', id);
            formData.append('title', title);
            formData.append('content', content);
            formData.append('file', file);
            formData.append('foldername', folder);
            const check = formData.get('title');
            console.log(file);
            let url = 'http://localhost:4000/content';
            fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
            Accept: 'application/json'
            },
            body: formData
            
            }).then(async (res) => {
            if (res.status === 200) {
            alert('file updated successfully');
              navigate("/products");
            }
            
            else {
            alert('internal server error');
            }
            });
             
        }

    }


  


    return (
        <div>
            <Option />
            <form onSubmit={save}>
                <div className='container w-75' id="opt">
                    <Link to={'/courses'}>
                    <button id="cancel">Cancel</button>
                    </Link>
                    
                    <button id="save" type='submit' >Update</button>
                </div>
                <div className='container w-75' id="cont">
              
                <h2>{folder}</h2>
                    <h3>title</h3>
                    <input type='text' className='form-control' value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder='Title' name="title" id='title'></input>
                    <h3>Content</h3>
                    <textarea type='text' className='form-control' value={content} onChange={(e) => { setContent(e.target.value) }} placeholder='Enter your content' name="content" id='content'></textarea>
                    <br></br>
                    <input type='file' id="filename" onChange={(e) => { setFile(e.target.files[0]) }} name='filename'></input>
                </div>
            </form>
        </div>
    );
}

export default Edit;