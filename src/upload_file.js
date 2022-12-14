import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Option } from './Admin_dashboard';
import { Dashboard } from './Admin_dashboard';
import React, { Component } from 'react';
import './upload_file.css';

class Upload extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div className='container bg-info w-50' id='fill'>
                    <form onSubmit={this.submit}>
                        <label className='form__label'>File Name</label>
                        <input type='text' className='form-control w-50' placeholder='File Name' onChange={this.handlechange}></input>
                        <br></br>
                        <input type='file' id='file' name='filename'></input>
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