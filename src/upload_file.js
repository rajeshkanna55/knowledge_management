import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Option } from './Admin_dashboard';
import { Dashboard } from './Admin_dashboard';
import React, { Component } from 'react';
import './upload_file.css';

class Upload extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            filename:''  
        }
    }
        data = (e) =>{
            this.setState({[e.target.id]:e.target.value});
          
        }
        dat=(e)=>{
            const name=(e.target.files[0].name);
            this.setState({[e.target.id]:name});
        }
        submit=(e) =>{
            e.preventDefault();
            const {name,filename}=this.state;
            console.log(this.state);
            if(this.state.name==="")
            {
                alert('please enter file name');
            }
            else{
                const uri='http://localhost:4000/resource/uploads';
                fetch(uri, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.state)
                  }).then(async(res)=>
                  {
                     if(await res.status===200)
                     {
                        alert('file uploaded succesfully');
                     }
                     else 
                     {
                        alert('internal server error');
                     }
                  })
            }
        }
         
    
    render(){
        return (
            <div>
                <div className='container bg-info w-50' id='fill'>
                    <form onSubmit={this.submit}>
                        <label className='form__label' >File Name</label>
                        <input type='text' className='form-control w-50' placeholder='File Name' id="name" onChange={this.data}></input>
                        <br></br>
                        <input type='file' id="filename" onChange={e=>this.dat(e)} name='filename'></input>
                        <input id="button" type='submit'></input>
                    </form>
                </div>
            </div>
        );
    }
} 

function Files(){
    return ( 
        <div>
            <Option/>
            <Dashboard/>
            <Upload/>
        </div>
    );
    
}

export default Files;