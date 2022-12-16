import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Enter from './App';
import Login from './Login';
import Signup from './Signup';
import Admin from './Admin_dashboard';
import File from './upload_file'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { UserDash } from './user_dashboard';
export default function Main() {
    return (
        <BrowserRouter>
    <Routes>
    <Route path="/" element={<Enter/>}></Route>    
    <Route path="/learn" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/dash" element={<Admin/>}></Route>
    <Route path="/upload" element={<File/>}></Route>
    <Route path="/user" element={<UserDash/>}></Route>
    </Routes>       
  </BrowserRouter>
    );
    }
    
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);
reportWebVitals();
