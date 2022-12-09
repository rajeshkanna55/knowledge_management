import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Enter from './App';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
export default function Main() {
    return (
        <BrowserRouter>
    <Routes>
    <Route path="/" element={<Enter/>}></Route>    
    <Route path="/learn" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    </Routes>       
  </BrowserRouter>
    );
    }
    
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
