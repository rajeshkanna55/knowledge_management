import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from 'react';
import Products from './products';
import './create.css';
import { Link } from 'react-router-dom';
export function Create(){
    const[filename,setFilename]=useState('');
    const fname={
        foldername:filename
    };
    const file=(e)=>{
         e.preventDefault(); 
         const url='http://localhost:4000/folder/products';
         if(filename==="")
         {
            alert('please enter file name');
         }
         else{
             fetch(url,{
                method: 'POST',
                mode: 'cors',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(fname)
            }).then(async (res)=>
            {
                if(await res.status===200)
                {
                    alert('file stored in database');
                }
                else if(await res.status===400){
                    alert('file is exist');
                }
                else{
                    alert('internal server error');
                }
                
            })
         }
    } 
    return(
        <div>
            <Products/>
            <div className='container w-25'>
                <h3>Product Name</h3> 
                 <input className='form-control' onChange={(e) =>{setFilename(e.target.value)}} type="text" placeholder="Enter your Filename"></input>
                 <br></br>
                 <Link to={"/products"}>
                 <button id='sav'>Cancel</button>
                 </Link>
                 
                 <button id="can"  onClick={file} >Save</button>
            </div>
        </div>
    );
}

export default Create;