import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Option } from './Admin_dashboard';
import { Dashboard } from './Admin_dashboard';
import React, { useState, useEffect } from 'react';
import './article.css';
function Article() {
    const [title, setTitle] = useState('');
    const [content,setContent] = useState('');
    const obj={
        tiTle:title,
        conTent:content
    };
     
     
    const save = (e) => {
       
        try {
            e.preventDefault();
             if(title==='')
             {
                alert('please enter the title');
             }
             else{
                
                if(content==='')
                {
                    alert('please enter content');
                }
                else{
                    fetch('http://localhost:4000/content',{
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(this.state)
                    }).then(async(res)=>{
                      console.log(res);
                    });
                }
             }
         
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
            <Option />
            <Dashboard />
            <form onSubmit={save}>
                <div className='container w-75' id="opt">
                    <button id="cancel">Cancel</button>
                    <button id="save" type='submit' >Save</button>
                    <button id="new">New Article</button>
                </div>
                <div className='container w-75' id="cont">
                    <h3>Title</h3>
                    <input type='text' className='form-control' onChange={(e) =>{setTitle(e.target.value)}} placeholder='Title' name="title" id='title'></input>
                    <h3>Content</h3>
                    <textarea type='text' className='form-control' onChange={(e) => {setContent(e.target.value)}} placeholder='Enter your content' name="content" id='content'></textarea>
                    <br></br>
                </div>
            </form>
        </div>
    );
}

export default Article;
